
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. 발급받으신 Access Key
  const WEB3FORMS_ACCESS_KEY = "42893392-afa4-43c4-a5c5-e94c47cf208b";
  
  // 2. Vercel Blob 이력서 직링크
  const RESUME_URL = "https://foj9p10hxsmxhnzm.public.blob.vercel-storage.com/Daniel_SR_Paik_CV.pdf";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms 전송에 필요한 필수 필드들
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `[CV Portfolio] 신규 문의: ${formData.get("name")} (${formData.get("company")})`);
    formData.append("from_name", "Paik Seung-ryong CV Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("전송에 실패했습니다: " + (data.message || "알 수 없는 오류"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("네트워크 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 text-center">
        <div className="max-w-md bg-slate-50 p-12 document-shadow border border-slate-100">
          <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="serif text-2xl font-bold mb-4">문의가 성공적으로 전달되었습니다</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            보내주신 문의 내용은 즉시 이메일로 발송되었습니다.<br />
            빠른 시일 내에 기재해주신 연락처로 답변 드리겠습니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-slate-900 font-bold hover:underline"
          >
            추가 문의하기
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
            <p className="text-sm text-slate-500 mb-6">상세 이력서 및 경력기술서가 필요하신 경우 아래 버튼을 통해 바로 확인하실 수 있습니다.</p>
            <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-sm hover:bg-slate-800 transition-colors"
            >
              <Download size={18} />
              <span>이력서 (PDF) 보기 및 다운로드</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 document-shadow border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">성함 / 담당자명</label>
                <input required name="name" type="text" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="성함을 입력하세요" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">회사명</label>
                <input required name="company" type="text" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="소속 회사명" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">연락처</label>
                <input required name="phone" type="tel" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="010-0000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">이메일</label>
                <input required name="email" type="email" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors" placeholder="email@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">상담 희망 유형</label>
              <select name="service_type" className="w-full border-b-2 border-slate-100 py-2 focus:border-slate-900 outline-none transition-colors bg-white cursor-pointer">
                <option value="IR/PR/ESG 고도화">IR/PR/ESG 고도화 컨설팅</option>
                <option value="IPO/M&A 전략 자문">IPO/M&A 전략 및 실무 자문</option>
                <option value="독립이사/고문직 제안">독립이사 및 고문직 제안</option>
                <option value="신규 사업 분석">신규 사업 타당성 분석</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">문의 상세 내용</label>
              <textarea required name="message" rows={5} className="w-full border-2 border-slate-50 p-4 focus:border-slate-900 outline-none transition-colors resize-none" placeholder="현재 귀사의 상황이나 필요한 솔루션을 적어주세요."></textarea>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input required type="checkbox" id="privacy" className="w-4 h-4 rounded border-slate-300 cursor-pointer" />
              <label htmlFor="privacy" className="text-xs text-slate-500 cursor-pointer select-none">개인정보 수집 및 이용에 동의합니다.</label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-slate-900 text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 transition-all uppercase tracking-widest ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-800'}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>전송 중...</span>
                </>
              ) : (
                <>
                  <span>문의 보내기</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
