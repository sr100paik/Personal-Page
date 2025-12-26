
import React from 'react';
import { Calendar, CheckCircle2, Award, Zap } from 'lucide-react';

const TrackRecord: React.FC = () => {
  const cases = [
    {
      title: "㈜엠플러스 IR/PR/ESG 총괄",
      category: "KOSDAQ Listed Corp",
      period: "2024 - 2026",
      description: "ESG 기획실장으로서 지속가능경영보고서 최초 발간 및 ESG 평가 등급 개선 활동 주도. 공시 적시성 100% 달성 및 투자자·언론 커버리지를 50% 이상 확대함.",
      tags: ["ESG Reporting", "DART Disclosure", "Investor Relations"],
      impact: "Coverage Increased by 50%+"
    },
    {
      title: "㈜플레넷 대표이사 (창업, LS 그룹 계열, Spin-Off)",
      category: "Management & M&A",
      period: "1999 - 2021",
      description: "LS그룹 계열사로서 M&A 성공 및 독립법인 운영. 현대·삼성건설 등 대형 건설사 대상 홈넷 사업 수주(5만 세대) 및 LG·삼성전자 공동 개발 네트워크 가전 출시.",
      tags: ["CEO Experience", "LS Group M&A", "Global Business"],
      impact: "50bn KRW Investment Secured"
    },
    {
      title: "안철수연구소 등 10개社 벤처투자 성공",
      category: "Venture Capital",
      period: "1992 - 1999",
      description: "현대·LG·삼부벤처캐피탈 책임심사역으로서 안철수연구소, I&C테크놀러지 등 유망 벤처기업 발굴 및 투자. 포트폴리오 기업의 IPO 및 M&A 자문 수행.",
      tags: ["Venture Capital", "IPO Advisory", "Due Diligence"],
      impact: "Successful Exit of 10+ Tech Companies"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif text-4xl font-bold mb-4">Track Record</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            30년의 실무 경력과 20년의 경영 경험이 응축된 결과입니다. 
            상장사 실무와 벤처 투자의 정점에서 쌓아온 독보적인 레퍼런스를 확인하십시오.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid gap-12">
          {cases.map((item, index) => (
            <div key={index} className="bg-white document-shadow border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
              <div className="lg:w-1/3 bg-slate-50 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">{item.period}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                    {item.category}
                  </span>
                  <h3 className="serif text-2xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Zap size={18} />
                    <span>{item.impact}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8 md:p-12">
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {item.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 border border-slate-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Competency</h4>
                    <div className="flex items-center gap-2 text-slate-900">
                      <CheckCircle2 size={16} className="text-green-600" />
                      <span className="text-sm font-medium">실전 경영과 자본시장 실무의 융합</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <blockquote className="text-slate-500 italic text-sm">
                    "모든 성과는 단순한 운이 아닌, 철저한 시장 분석과 전략적 소통의 결과입니다."
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="serif text-3xl font-bold">Full Career Timeline</h2>
            <p className="text-slate-500 mt-2">1992년부터 현재까지의 주요 경력</p>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2 space-y-12">
            {[
              { year: '2024 - 2026', title: '㈜엠플러스 ESG 기획실장', desc: '상장사 IR/PR/ESG 총괄' },
              { year: '2022 - 2023', title: '㈜지비스 부사장/CSO', desc: '인테리어 플랫폼 전략 및 제휴 확대' },
              { year: '1999 - 2021', title: '㈜플레넷 (창업, LS그룹 계열, Spin-Off) 대표이사', desc: '22년간 경영 총괄 및 사업 확장' },
              { year: '1992 - 1999', title: 'VC 3사 책임심사역', desc: '현대·LG·삼부벤처캐피탈 초기 투자' },
              { year: '1989', title: '한양대학교 경영학 석사', desc: 'IPO 가격 결정 연구' },
            ].map((milestone, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white"></div>
                <div className={`w-full md:w-1/2 px-8 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="font-bold text-blue-600">{milestone.year}</span>
                  <h4 className="font-bold text-slate-900">{milestone.title}</h4>
                  <p className="text-sm text-slate-500">{milestone.desc}</p>
                </div>
                <div className="hidden md:block w-1/2 px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;
