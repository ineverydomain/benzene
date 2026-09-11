import React, { useState } from 'react';
import { X, FileText, Phone, Mail, User, Building, CheckCircle, Trash2, Send, ShieldCheck, Loader2 } from 'lucide-react';

export default function OrderQuoteModal({ isOpen, onClose, quoteList, onRemoveFromQuote, onClearQuote }) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone.trim() || !email.trim()) {
      setErrorMessage('Please enter both your Mobile Number and Email Address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);
    
    // Generate lead reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const leadId = `BE-RFQ-2026-${randomNum}`;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'rfq',
          leadId,
          name,
          phone,
          email,
          company,
          notes,
          items: quoteList
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmittedLeadId(leadId);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Submission failed. Please check details and try again.');
      }
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setErrorMessage('Unable to submit your enquiry right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    onClearQuote();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-surface-0 rounded-2xl max-w-2xl w-full border border-gold-500/40 shadow-2xl overflow-hidden relative my-auto">
        
        {/* Modal Header */}
        <div className="bg-navy-900 text-surface-0 px-6 py-4 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gold-500 text-navy-900 rounded-lg flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-display text-lg text-white">
                Request Product Pricing & Order Inquiry
              </h3>
              <p className="text-[11px] font-mono text-gold-400">
                Benzene Electricals B2B Technical Lead Service
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          /* Submission Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">
                INQUIRY SUBMITTED SUCCESSFULLY
              </span>
              <h4 className="text-2xl font-extrabold font-display text-navy-900">
                Thank You for Your Order Inquiry!
              </h4>
              <p className="text-xs text-ink-600 max-w-md mx-auto">
                Our application engineer will reach out to <strong className="text-navy-900">{phone}</strong> and <strong className="text-navy-900">{email}</strong> within 2 hours with detailed technical specifications and quotation.
              </p>
            </div>

            <div className="bg-surface-1 border border-border-custom rounded-xl p-4 max-w-sm mx-auto space-y-1 font-mono text-xs text-left">
              <div className="flex justify-between">
                <span className="text-ink-600">Reference ID:</span>
                <span className="font-bold text-gold-500">{submittedLeadId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600">Phone:</span>
                <span className="font-bold text-navy-900">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600">Email:</span>
                <span className="font-bold text-navy-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600">Items Enquired:</span>
                <span className="font-bold text-navy-900">{quoteList.length || 1} model(s)</span>
              </div>
            </div>

            <button
              onClick={handleResetForm}
              className="bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold px-8 py-3 rounded-lg text-xs shadow-md"
            >
              Done & Return to Catalog
            </button>
          </div>
        ) : (
          /* Input Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Selected Products Area */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-navy-900 uppercase">
                <span>Selected Instruments ({quoteList.length})</span>
                {quoteList.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearQuote}
                    className="text-rose-600 hover:underline flex items-center gap-1 cursor-pointer font-sans normal-case text-[11px]"
                  >
                    <Trash2 className="w-3 h-3" /> Clear items
                  </button>
                )}
              </div>

              {quoteList.length === 0 ? (
                <div className="bg-surface-1 border border-dashed border-border-custom rounded-xl p-4 text-center text-xs text-ink-600">
                  No items added yet. You can still submit a general product inquiry below!
                </div>
              ) : (
                <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
                  {quoteList.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-surface-1 border border-border-custom rounded-lg p-2.5 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-gold-500 bg-navy-900 px-2 py-0.5 rounded text-[11px]">
                          {item.modelCode}
                        </span>
                        <span className="font-semibold text-navy-900 line-clamp-1">{item.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveFromQuote(item.id)}
                        className="text-ink-300 hover:text-rose-600 p-1 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-lg font-medium">
                {errorMessage}
              </div>
            )}

            {/* User Details Form Fields */}
            <div className="space-y-4 pt-2 border-t border-border-custom">
              <div className="text-xs font-mono font-bold text-navy-900 uppercase">
                Contact Information (Required for Order Inquiry)
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Mobile / Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-gold-500" />
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface-1 border border-border-custom rounded-lg px-3 py-2 text-xs text-navy-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-gold-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. engineer@factory.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-1 border border-border-custom rounded-lg px-3 py-2 text-xs text-navy-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-ink-600" />
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anuj Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-1 border border-border-custom rounded-lg px-3 py-2 text-xs text-navy-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                {/* Company / Organization */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-ink-600" />
                    Company / Industry (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tata Power / BHEL"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-surface-1 border border-border-custom rounded-lg px-3 py-2 text-xs text-navy-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Inquiry Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink-900">
                  Application Requirements & Quantity Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify required quantity, voltage rating, or special calibration requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-surface-1 border border-border-custom rounded-lg px-3 py-2 text-xs text-navy-900 focus:outline-none focus:border-gold-500"
                ></textarea>
              </div>
            </div>

            {/* Privacy Note & Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-custom">
              <div className="text-[11px] text-ink-600 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your contact details are strictly used for technical RFQ pricing.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer gold-glow shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Order Inquiry
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
