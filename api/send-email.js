export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { type, leadId, name, phone, email, company, notes, items } = req.body || {};
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!email && type !== 'rfq') {
      return res.status(400).json({ error: 'Email address is required' });
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    let payload;
    if (type === 'newsletter') {
      payload = {
        type: 'newsletter',
        timestamp,
        email: email || ''
      };
    } else {
      payload = {
        type: 'rfq',
        timestamp,
        leadId: leadId || '',
        name: name || '',
        phone: phone || '',
        email: email || '',
        company: company || '',
        notes: notes || '',
        items: Array.isArray(items)
          ? items.map((item) => ({
              modelCode: item.modelCode || item.id || '',
              name: item.name || ''
            }))
          : []
      };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const sheetsRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await sheetsRes.json();
      } catch {
        data = {};
      }

      if (!sheetsRes.ok || data.success === false) {
        console.error('Google Sheets webhook returned error:', sheetsRes.status, data);
        return res.status(502).json({
          error: 'Unable to submit your enquiry right now. Please try again.'
        });
      }

      return res.status(200).json({
        success: true,
        message:
          type === 'newsletter'
            ? 'Subscribed successfully'
            : 'Inquiry submitted successfully',
        timestamp
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error('Error sending to Google Sheets:', fetchError.message);
      return res.status(502).json({
        error: 'Unable to submit your enquiry right now. Please try again.'
      });
    }
  } catch (error) {
    console.error('Error handling form submission API:', error);
    return res.status(500).json({
      error: 'Unable to submit your enquiry right now. Please try again.'
    });
  }
}
