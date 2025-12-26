
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Briefcase, ChevronRight } from 'lucide-react';

const Main: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600" 
            alt="Office Executive" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">
              Executive Summary & Strategy
            </span>
            <h1 className="serif text-4xl md:text-6xl font-bold leading-tight mb-8">
              투자와 경영의 경계를 허무는 30년,<br />
              <span className="text-blue-400">실전 전략가</span> 백승룡입니다.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              심사역의 예리한 통찰과 경영자의 책임감 있는 심장으로,<br />
              기업의 본질적 가치를 증명하고 자본시장의 신뢰를 구축합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                전문가와 논의 시작하기 <ArrowRight size={18} />
              </Link>
              <Link to="/track-record" className="border border-white/30 text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                주요 성과 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-3xl font-bold text-slate-900 mb-4">Key Achievements in Numbers</h2>
            <div className="w-12 h-1 bg-slate-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "DART 공시 적시성", value: "100%", desc: "단 한 건의 불성실 공시 없음", icon: ShieldCheck },
              { label: "투자자 커버리지 확대", value: "+50%", desc: "기관 투자자 유입 및 리서치 리포트 활성화", icon: TrendingUp },
              { label: "투자 성공 포트폴리오", value: "10+", desc: "안철수연구소 등 대표적 엑시트 성공 사례", icon: Briefcase },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 border-l-4 border-slate-900 flex flex-col items-center text-center">
                <stat.icon className="text-slate-400 mb-4" size={32} />
                <span className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</span>
                <p className="text-sm text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="serif text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
              <p className="text-slate-600">
                상장사와 스타트업, 서로 다른 두 세계를 연결하는 전략적 가교 역할을 수행합니다. 
                기업의 생애 주기에 맞춘 최적의 성과 지표를 제안합니다.
              </p>
            </div>
            <Link to="/services" className="text-slate-900 font-semibold flex items-center gap-1 hover:underline group">
              전체 서비스 보기 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 document-shadow border border-slate-100 group hover:border-slate-900 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">For Listed Corporations</span>
              <h3 className="serif text-2xl font-bold mb-4">IR / PR / ESG 고도화 전략</h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 시장 신뢰 회복을 위한 투명한 공시 체계 구축</li>
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 글로벌 스탠다드에 부합하는 ESG 경영 로드맵</li>
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 기관 투자자 및 애널리스트 타겟 마케팅</li>
              </ul>
              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-400 italic">Maximize Enterprise Value</span>
                <Link to="/services" className="bg-slate-900 text-white p-2 rounded-full"><ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="bg-white p-10 document-shadow border border-slate-100 group hover:border-slate-900 transition-colors">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 block">For Startups & Ventures</span>
              <h3 className="serif text-2xl font-bold mb-4">IPO / M&A 엑셀러레이팅</h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 자본 조달(Series A-C)을 위한 투자 유치 전략</li>
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 상장 심사를 대비한 경영 투명성 확보</li>
                <li className="flex items-start gap-2"><span className="text-slate-900 mt-1">•</span> 최적의 Exit을 위한 M&A 타당성 분석</li>
              </ul>
              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-400 italic">Strategic Growth & Exit</span>
                <Link to="/services" className="bg-slate-900 text-white p-2 rounded-full"><ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="serif text-6xl text-slate-700 italic font-bold">"</span>
          </div>
          <p className="serif text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
            비즈니스의 가치는 차트에 머물지 않습니다.<br />
            실체가 있는 성장, 숫자로 증명되는 신뢰만이 지속 가능한 미래를 담보합니다.
          </p>
          <div className="w-16 h-px bg-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-400 font-light tracking-widest uppercase text-sm">Strategic Advisor, Paik Seung ryong</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
