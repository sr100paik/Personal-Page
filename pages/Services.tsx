
import React from 'react';
import { Target, BarChart4, Globe, Zap, Users, Search } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-24">
      {/* Hero */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif text-4xl font-bold text-slate-900 mb-6">Expert Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            상장사의 신뢰 구축과 스타트업의 비약적 성장을 위해<br />
            맞춤형 경영 전략 및 자본시장 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-slate-900 text-white rounded-lg"><Target size={24} /></div>
            <div>
              <h2 className="serif text-2xl font-bold">상장사 IR/PR/ESG 고도화</h2>
              <p className="text-sm text-slate-500">Corporate IR/PR & Sustainability Advisory</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "전략적 IR/PR 시스템 구축", 
                desc: "단순한 공시를 넘어, 기업의 성장 스토리를 시장에 각인시키는 데이터 기반 IR/PR 컨텐츠 제작 및 투자자 미팅 프로세스 최적화.",
                icon: BarChart4
              },
              { 
                title: "ESG 경영 내재화", 
                desc: "공시 의무 대응을 넘어 실제 비즈니스 가치를 높이는 ESG KPI 수립 및 평가지표(MSCI, KCGS 등) 관리 지원.",
                icon: Globe
              },
              { 
                title: "시장 소통 강화 (Targeting)", 
                desc: "국내외 우량 기관 투자자 및 애널리스트 네트워크를 활용한 집중 타겟팅과 리서치 리포트 커버리지 확대 유도.",
                icon: Users
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 document-shadow flex flex-col items-start hover:-translate-y-1 transition-transform">
                <s.icon className="text-slate-400 mb-6" size={32} />
                <h3 className="font-bold text-lg mb-4 text-slate-900">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Services */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-white text-slate-900 rounded-lg"><Zap size={24} /></div>
            <div>
              <h2 className="serif text-2xl font-bold">스타트업 성정 및 엑시트</h2>
              <p className="text-sm text-slate-400">Startup Growth & M&A Strategy</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-10 border border-slate-700 hover:border-slate-500 transition-colors">
              <h3 className="serif text-xl font-bold mb-6 flex items-center gap-2">
                <Search size={20} className="text-emerald-400" />
                IPO / M&A 엑셀러레이팅
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">01</span>
                  <span>상장(IPO) 심사를 대비한 지배구조/내부통제 시스템 사전 점검</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">02</span>
                  <span>M&A 매수/매도 실사 지원 및 적정 기업가치 평가(Valuation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">03</span>
                  <span>Exit 이후의 지속적인 성장 모델 및 시너지 창출 전략 제안</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-10 border border-slate-700 hover:border-slate-500 transition-colors">
              <h3 className="serif text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart4 size={20} className="text-blue-400" />
                투자 유치 및 사업 타당성
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">01</span>
                  <span>Series A-C 투자 유치를 위한 IR 피치덱 고도화 및 스토리텔링</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">02</span>
                  <span>핵심 비즈니스 모델의 시장 타당성 분석 및 매출 추정 모델 설계</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">03</span>
                  <span>VC 및 전략적 투자자(SI) 매칭 자문</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="serif text-2xl font-bold mb-6">진단이 필요하신가요?</h2>
          <p className="text-slate-600 mb-8">
            현재 기업의 IR 현황이나 ESG 지표, 또는 준비 중인 딜에 대해 
            30분 이내의 가벼운 티타임으로 인사이트를 나눠보세요.
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-slate-800 transition-colors">
            무료 진단 문의하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
