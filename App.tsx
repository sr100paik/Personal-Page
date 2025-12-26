
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';

// Lazy load pages for performance
const Main = lazy(() => import('./pages/Main'));
const TrackRecord = lazy(() => import('./pages/TrackRecord'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Track Record', path: '/track-record' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="serif text-xl font-bold tracking-tight text-slate-900">백승룡</span>
            <span className="text-slate-400 text-sm hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:inline">Strategy & IR/PR Expert</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  location.pathname === link.path ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="bg-slate-900 text-white px-4 py-2 text-sm rounded-sm hover:bg-slate-800 transition-all font-medium">
              Consulting Request
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-slate-900 text-white px-4 py-2 rounded-sm"
          >
            Consulting Request
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 border-b border-slate-800 pb-12">
        <div>
          <h2 className="serif text-white text-2xl font-bold mb-4">백승룡 (Daniel SR, Paik)</h2>
          <p className="max-w-md text-slate-400 leading-relaxed">
            KOSDAQ 상장사 실무와 20년 이상의 벤처기업 CEO 경력을 보유한 전략가. 기업 가치 제고와 지속가능 성장을 위한 최상의 파트너십을 제공합니다.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-center space-y-4">
          <div className="flex space-x-4">
            <a href="mailto:sr100@kakao.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
          <a 
            href="https://foj9p10hxsmxhnzm.public.blob.vercel-storage.com/Daniel_SR_Paik_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-sm transition-colors"
          >
            <Download size={16} />
            <span>이력서(PDF) 다운로드</span>
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2024 Paik Seung ryong. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <Link to="/about" className="hover:text-slate-300">About</Link>
          <Link to="/contact" className="hover:text-slate-300">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen bg-slate-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4 mx-auto"></div>
                <p className="text-slate-500 serif">Loading Document...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/track-record" element={<TrackRecord />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
