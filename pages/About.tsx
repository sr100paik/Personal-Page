
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="mb-20 text-center">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1766722184/Whisk_d83f2cffc475960b878402f24b866c7bdr_nlamep.png" 
            alt="Daniel SR, Paik Profile" 
            className="w-48 h-48 rounded-full mx-auto object-cover mb-8 border-4 border-slate-100 shadow-xl"
          />
          <h1 className="serif text-4xl font-bold text-slate-900 mb-4">백승룡</h1>
          <p className="text-slate-500 font-medium tracking-widest uppercase">IR · PR ·ESG · Strategy Expert</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <div className="bg-slate-50 p-10 border-l-8 border-slate-900">
            <h2 className="serif text-3xl font-bold mb-6 text-slate-900">"실무의 정밀함과 경영의 통찰을 잇는 전문가"</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              KOSDAQ 상장사의 IR/PR/ESG 실무와 22년간의 CEO 경영 경력을 모두 보유한 보기 드문 전문가입니다. 
              기업공개(IPO), M&A, 기업가치평가 등 자본시장 전 분야에 걸친 실무 경험을 바탕으로 
              기업의 성장이 숫자로 증명되고 시장에서 인정받도록 돕습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="serif text-2xl font-bold border-b-2 border-slate-900 pb-2 inline-block">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                단순히 화려한 수식어로 기업을 포장하지 않습니다. 실체가 있는 전략과 투명한 공시를 통해 
                투자자의 신뢰를 확보하고, 지속가능한 주주가치 제고를 지향합니다.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="serif text-2xl font-bold border-b-2 border-slate-900 pb-2 inline-block">Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                LS그룹 계열사 경영과 벤처투자 심사역 경험을 통해 쌓은 네트워크와 분석력은 
                귀사의 신사업 기획, 제휴 및 자본 조달 과정에서 결정적인 자산이 될 것입니다.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-slate-200 pt-16">
            <h3 className="serif text-2xl font-bold mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {[
                { company: '㈜엠플러스 (KOSDAQ)', role: 'ESG 기획실장', period: '2024 - 2026' },
                { company: '㈜지비스', role: '부사장 / CSO', period: '2022 - 2023' },
                { company: '㈜플레넷 (창업, LS그룹 계열, Spin-Off)', role: '대표이사 / 사장', period: '1999 - 2021' },
                { company: '현대·LG 벤처캐피탈', role: '책임심사역', period: '1992 - 1999' },
              ].map((job, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.company}</h4>
                    <p className="text-sm text-slate-500">{job.role}</p>
                  </div>
                  <div className="text-slate-400 font-mono text-xs mt-1 md:mt-0">{job.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="serif text-2xl font-bold mb-8 text-center">Academic Background</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              <div className="p-6 bg-slate-50 border border-slate-100">
                <p className="text-xs text-slate-400 mb-2">Graduate School</p>
                <p className="font-bold text-slate-800">한양대학교 경영학 석사</p>
                <p className="text-xs text-slate-500 mt-1">IPO 가격 결정 연구</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100">
                <p className="text-xs text-slate-400 mb-2">University</p>
                <p className="font-bold text-slate-800">한양대학교 경영학 학사</p>
                <p className="text-xs text-slate-500 mt-1">1985 - 1989</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-900 text-white p-8 rounded-sm">
            <h3 className="serif text-xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="text-slate-400 mb-2 font-bold uppercase tracking-tighter">Finance</p>
                <p>회계·세무조정</p>
                <p>기업가치평가</p>
                <p>재무분석</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 font-bold uppercase tracking-tighter">Strategy</p>
                <p>IR/PR 전략</p>
                <p>ESG 체계구축</p>
                <p>M&A 실무</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 font-bold uppercase tracking-tighter">IT/Software</p>
                <p>MS Office</p>
                <p>AI Tools</p>
                <p>특허출원(10건)</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 font-bold uppercase tracking-tighter">Languages</p>
                <p>영어 (비즈니스)</p>
                <p>영문계약/협상</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
