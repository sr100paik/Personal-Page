
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md bg-slate-50 p-12 document-shadow border border-slate-100">
          <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="serif text-2xl font-bold mb-4">문의가 성공적으로 전달되었습니다</h2>
          <p className="text-slate-600 mb-8">
            보내주신 소중한 메시지를 확인하였습니다. 24시간 이내에 (영업일 기준) 기재해주신 연락처로 회신 드리겠습니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-slate-900 font-bold hover:underline"
          >
            뒤로 가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h1 className="serif text-4xl font-bold text-slate-900 mb-6">Start a Partnership</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              성공적인 IR 고도화와 투자 유치를 위한 파트너를 만나십시오.<br />
              백승룡 전문가의 30년 인사이트가 귀사의 해답이 되어 드립니다.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 border border-slate-200"><Mail size={20} className="text-slate-400" /></div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="font-bold text-slate-900">sr100@kakao.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 border border-slate-200"><Phone size={20} className="text-slate-400" /></div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="font-bold text-slate-900">010-8796-4381</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 border border-slate-200"><MapPin size={20} className="text-slate-400" /></div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Activity Area</p>
                <p className="font-bold text-slate-900">서울, 경기 (전국 컨설팅 지원 가능)</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200">
            <h3 className="serif text-xl font-bold mb-4">Executive Profile</h3>
            <p className="text-sm text-slate-500 mb-6">상세 이력서 및 경력기술서가 필요하신 경우 아래 버튼을 통해 다운로드 하실 수 있습니다.</p>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-sm hover:bg-slate-800 transition-colors">
              <Download size={18} />
              <span>Resume (PDF) Download</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 document-shadow border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">성함 / 담당자명</label>
                <input required type="text" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="성함을 입력하세요" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">회사명</label>
                <input required type="text" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="소속 회사명" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">연락처</label>
                <input required type="tel" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="010-8796-4381" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">이메일</label>
                <input required type="email" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="sr100@kakao.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">상담 희망 유형</label>
              <select className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors bg-white">
                <option>IR/PR/ESG 고도화 컨설팅</option>
                <option>IPO/M&A 전략 및 실무 자문</option>
                <option>독립이사 및 고문직 제안</option>
                <option>신규 사업 타당성 분석</option>
                <option>기타</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">문의 상세 내용</label>
              <textarea required rows={5} className="w-full border-2 border-slate-50 p-4 focus:border-slate-900 outline-none transition-colors resize-none" placeholder="현재 귀사의 상황이나 필요한 솔루션을 간단히 적어주시면 사전 검토 후 연락드리겠습니다."></textarea>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input required type="checkbox" id="privacy" className="rounded border-slate-300" />
              <label htmlFor="privacy" className="text-xs text-slate-500">개인정보 수집 및 이용에 동의합니다.</label>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors uppercase tracking-widest">
              <span>문의 보내기</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
