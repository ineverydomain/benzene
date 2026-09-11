import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LineCardBanner from './components/LineCardBanner';
import ProductCatalog from './components/ProductCatalog';
import SolutionPillars from './components/SolutionPillars';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CompareDrawer from './components/CompareDrawer';
import OrderQuoteModal from './components/OrderQuoteModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [quoteList, setQuoteList] = useState([]);
  const [comparedIds, setComparedIds] = useState(['ca-8345', 'tc-4460h']);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Scroll handler for sections
  const handleNavigateSection = (sectionId) => {
    let target = null;
    if (sectionId === 'catalog') target = document.getElementById('catalog-section');
    if (sectionId === 'solutions') target = document.getElementById('solutions-section');
    if (sectionId === 'trust') target = document.getElementById('trust-section');
    if (sectionId === 'footer') target = document.getElementById('footer-section');
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Quote List Management
  const handleAddToQuote = (product) => {
    if (!quoteList.some((item) => item.id === product.id)) {
      setQuoteList([...quoteList, product]);
    }
    setIsQuoteModalOpen(true);
  };

  const handleRemoveFromQuote = (productId) => {
    setQuoteList(quoteList.filter((item) => item.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteList([]);
  };

  // Compare List Management
  const handleToggleCompare = (productId) => {
    if (comparedIds.includes(productId)) {
      setComparedIds(comparedIds.filter((id) => id !== productId));
    } else {
      if (comparedIds.length >= 4) {
        alert('You can compare up to 4 models simultaneously.');
        return;
      }
      setComparedIds([...comparedIds, productId]);
    }
  };

  const handleRemoveCompare = (productId) => {
    setComparedIds(comparedIds.filter((id) => id !== productId));
  };

  const handleClearAllCompare = () => {
    setComparedIds([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-0 font-sans selection:bg-gold-500 selection:text-navy-900">
      
      {/* Navigation Header */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        quoteList={quoteList}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => handleNavigateSection('catalog')}
          onRequestQuote={() => setIsQuoteModalOpen(true)}
        />

        {/* Triplett-Style Line Card Header Banner */}
        <LineCardBanner
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Product Catalog Grid & Filter Section */}
        <ProductCatalog
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onQuickView={setSelectedQuickViewProduct}
          onAddToQuote={handleAddToQuote}
          quoteList={quoteList}
          comparedIds={comparedIds}
          onToggleCompare={handleToggleCompare}
        />

        {/* Measure / Protect / Conserve Solution Pillars */}
        <SolutionPillars
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            handleNavigateSection('catalog');
          }}
        />

        {/* Benzene Electricals Support & Client Logo Wall */}
        <TrustSection />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateSection={handleNavigateSection}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
      />

      {/* Quick View Product Specification Modal */}
      <ProductDetailModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={quoteList.some((item) => item.id === selectedQuickViewProduct?.id)}
      />

      {/* Floating Compare Tray & Matrix Modal */}
      <CompareDrawer
        comparedIds={comparedIds}
        onRemoveCompare={handleRemoveCompare}
        onClearAllCompare={handleClearAllCompare}
        onAddToQuote={handleAddToQuote}
      />

      {/* Order Inquiry / Quote Request Modal (Contact details collector) */}
      <OrderQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        quoteList={quoteList}
        onRemoveFromQuote={handleRemoveFromQuote}
        onClearQuote={handleClearQuote}
      />

    </div>
  );
}
