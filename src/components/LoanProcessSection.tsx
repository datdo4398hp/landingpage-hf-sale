import React from 'react';
import {
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Calculator,
  Handshake,
  Banknote,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface LoanProcessSectionProps {
  onOpenApplyModal?: () => void;
}

export const LoanProcessSection: React.FC<LoanProcessSectionProps> = ({ onOpenApplyModal }) => {
  const phases = [
    {
      label: 'Giai đoạn 1',
      name: 'Khởi tạo & Thẩm định',
      steps: 'Bước 01 - 03',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      label: 'Giai đoạn 2',
      name: 'Phương án & Đối tác',
      steps: 'Bước 04 - 05',
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      label: 'Giai đoạn 3',
      name: 'Giải ngân & Chăm sóc',
      steps: 'Bước 06 - 07',
      color: 'from-emerald-600 to-[#006837]',
      bgColor: 'bg-green-50 text-[#006837] border-emerald-300'
    }
  ];

  const steps = [
    {
      stepNum: 1,
      numStr: '01',
      phase: 1,
      title: 'ĐĂNG KÝ TƯ VẤN',
      eta: '3 - 5 phút',
      desc: 'Điền thông tin trực tuyến trên website hoặc ứng dụng với các trường thông tin cơ bản.',
      tag: '100% Online',
      highlight: 'Bảo mật thông tin cá nhân',
      icon: ClipboardCheck,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      stepNum: 2,
      numStr: '02',
      phase: 1,
      title: 'TIẾP NHẬN & TƯ VẤN',
      eta: '15 phút',
      desc: 'Chuyên viên tài chính liên hệ trực tiếp, lắng nghe nhu cầu và định hướng giải pháp phù hợp.',
      tag: 'Tư vấn 1 - 1',
      highlight: 'Miễn phí tư vấn ban đầu',
      icon: Headphones,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      stepNum: 3,
      numStr: '03',
      phase: 1,
      title: 'TRA SOÁT & THẨM ĐỊNH',
      eta: '30 phút',
      desc: 'Tra soát tính hợp lệ hồ sơ, kiểm tra lịch sử tín dụng CIC và khả năng phê duyệt theo quy chuẩn.',
      tag: 'Nhanh gọn',
      highlight: 'Không thu giữ giấy tờ gốc',
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      stepNum: 4,
      numStr: '04',
      phase: 2,
      title: 'PHƯƠNG ÁN TÀI CHÍNH',
      eta: '45 phút',
      desc: 'Xây dựng phương án vay tối ưu: hạn mức cao, kỳ hạn linh hoạt và minh bạch toàn bộ lãi & phí.',
      tag: 'Tối ưu chi phí',
      highlight: 'Bảng tính gốc & lãi minh bạch',
      icon: Calculator,
      color: 'text-teal-700 bg-teal-50 border-teal-200'
    },
    {
      stepNum: 5,
      numStr: '05',
      phase: 2,
      title: 'KẾT NỐI ĐỐI TÁC',
      eta: '1 - 2 giờ',
      desc: 'Kết nối hồ sơ tới mạng lưới hơn 20+ ngân hàng và định chế tài chính uy tín đã liên kết.',
      tag: '20+ Đối tác',
      highlight: 'Tỷ lệ duyệt hồ sơ trên 95%',
      icon: Handshake,
      color: 'text-teal-700 bg-teal-50 border-teal-200'
    },
    {
      stepNum: 6,
      numStr: '06',
      phase: 3,
      title: 'PHÊ DUYỆT & GIẢI NGÂN',
      eta: 'Trong ngày',
      desc: 'Ký hợp đồng số hóa an toàn và tiền được giải ngân nhanh chóng trực tiếp vào tài khoản ngân hàng.',
      tag: 'Nhận tiền siêu tốc',
      highlight: 'Tiền về tài khoản ngay sau duyệt',
      icon: Banknote,
      color: 'text-[#006837] bg-emerald-100/80 border-emerald-300 ring-2 ring-emerald-500/20',
      isMilestone: true
    },
    {
      stepNum: 7,
      numStr: '07',
      phase: 3,
      title: 'CHĂM SÓC & ĐỒNG HÀNH',
      eta: 'Suốt kỳ hạn',
      desc: 'Theo dõi hạn mức, nhắc lịch đóng tiền định kỳ, hỗ trợ tất toán trước hạn hoặc nâng hạn mức khi cần.',
      tag: 'Hỗ trợ 24/7',
      highlight: 'Đồng hành trọn vòng đời khoản vay',
      icon: HeartHandshake,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-[#006837] text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#006837]" />
            <span>Lộ trình minh bạch – Tiết kiệm thời gian</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">
            LỘ TRÌNH 7 BƯỚC VAY VỐN CHUYÊN NGHIỆP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Quy trình khép kín, minh bạch từ bước tiếp nhận hồ sơ ban đầu, thẩm định, kết nối đối tác đến giải ngân và đồng hành chăm sóc suốt kỳ hạn.
          </p>

          {/* Phase Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {phases.map((p, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-left shadow-2xs transition-all ${p.bgColor}`}
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider block opacity-75">
                    {p.label} • {p.steps}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold block">
                    {p.name}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/80 shadow-2xs flex items-center justify-center shrink-0 ml-2">
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ROADMAP INFOGRAPHIC (lg & xl) ================= */}
        <div className="hidden lg:block relative my-6">

          {/* ROW 1: Steps 01 -> 04 */}
          <div className="relative mb-12">
            {/* Background Highway Road Track for Row 1 */}
            <div className="absolute top-[42px] left-[10%] right-[10%] h-3 bg-slate-100 rounded-full border border-slate-200/90 shadow-inner z-0">
              {/* Green gradient road line with animated pulse strip */}
              <div className="w-full h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full opacity-80" />
              <div className="absolute inset-0 border-t border-dashed border-white/60" />
            </div>

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.slice(0, 4).map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div key={step.stepNum} className="group flex flex-col items-center">

                    {/* Milestone Pin Node */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#006837] to-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-700/20 group-hover:scale-110 group-hover:shadow-emerald-600/35 transition-all duration-300 ring-4 ring-white">
                        {step.numStr}
                      </div>

                      {/* Micro pulse dot */}
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                      </span>

                      {/* Direction Arrow between cards */}
                      {idx < 3 && (
                        <div className="absolute left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 w-[calc(100%-1rem)] pointer-events-none hidden xl:flex items-center justify-center text-emerald-600">
                          <ArrowRight className="w-5 h-5 animate-pulse" />
                        </div>
                      )}
                    </div>

                    {/* Step Card */}
                    <div className="w-full bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col h-full text-left relative group-hover:-translate-y-1.5">
                      {/* Top ribbon bar */}
                      <div className="flex items-center justify-end mb-3">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          {step.tag}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center space-x-3 mb-2.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${step.color} transition-transform group-hover:rotate-3`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#006837] transition-colors line-clamp-2">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3 grow">
                        {step.desc}
                      </p>

                      {/* Highlight pill */}
                      <div className="pt-2.5 border-t border-slate-100 flex items-center text-[11px] text-slate-600 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                        <span className="truncate">{step.highlight}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Serpentine Transition Bridge / Connector from Row 1 to Row 2 */}
          <div className="relative flex items-center justify-center my-4 py-2">
            <div className="w-full max-w-5xl flex items-center justify-between px-8 relative">
              {/* Left connector track to Row 2 */}
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-emerald-300" />

              {/* Central Roadmap Stage Transition Badge */}
              <div className="mx-4 flex items-center space-x-3 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-300/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#006837] animate-ping" />
                <span className="text-xs font-black text-[#006837] uppercase tracking-wider">
                  Chuyển tiếp giai đoạn phê duyệt & giải ngân
                </span>
                <ArrowRight className="w-4 h-4 text-[#006837]" />
              </div>

              {/* Right connector track to Row 2 */}
              <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-emerald-200 to-emerald-300" />
            </div>
          </div>

          {/* ROW 2: Steps 05 -> 07 (Arranged nicely in 3 columns) */}
          <div className="relative max-w-5xl mx-auto mt-6">
            {/* Background Highway Road Track for Row 2 */}
            <div className="absolute top-[42px] left-[15%] right-[15%] h-3 bg-slate-100 rounded-full border border-slate-200/90 shadow-inner z-0">
              <div className="w-full h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-[#006837] rounded-full opacity-80" />
              <div className="absolute inset-0 border-t border-dashed border-white/60" />
            </div>

            <div className="grid grid-cols-3 gap-8 relative z-10">
              {steps.slice(4, 7).map((step, idx) => {
                const IconComp = step.icon;
                const isDisbursement = step.stepNum === 6;

                return (
                  <div key={step.stepNum} className="group flex flex-col items-center">

                    {/* Milestone Pin Node */}
                    <div className="relative mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg ring-4 ring-white transition-all duration-300 group-hover:scale-110 ${isDisbursement
                        ? 'bg-gradient-to-tr from-emerald-600 via-[#006837] to-teal-600 text-white shadow-emerald-700/30 ring-emerald-200'
                        : 'bg-gradient-to-tr from-[#006837] to-teal-500 text-white shadow-teal-700/20'
                        }`}>
                        {step.numStr}
                      </div>

                      {/* Direction Arrow between cards */}
                      {idx < 2 && (
                        <div className="absolute left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 w-[calc(100%-1rem)] pointer-events-none hidden xl:flex items-center justify-center text-emerald-600">
                          <ArrowRight className="w-5 h-5 animate-pulse" />
                        </div>
                      )}
                    </div>

                    {/* Step Card */}
                    <div className={`w-full rounded-2xl p-5 border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full text-left relative group-hover:-translate-y-1.5 ${isDisbursement
                      ? 'bg-gradient-to-b from-emerald-50/60 to-white border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200/90 hover:border-emerald-300'
                      }`}>

                      {/* Special banner for Disbursement step */}
                      {isDisbursement && (
                        <div className="absolute -top-3 right-4 z-20 bg-gradient-to-r from-emerald-600 to-[#006837] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1 ring-2 ring-white">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span>Bước quan trọng</span>
                        </div>
                      )}

                      {/* Top ribbon bar */}
                      <div className="flex items-center justify-end mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${isDisbursement
                          ? 'text-emerald-800 bg-emerald-100 border-emerald-200 font-extrabold'
                          : 'text-emerald-700 bg-emerald-50 border-emerald-100'
                          }`}>
                          {step.tag}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center space-x-3 mb-2.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${step.color} transition-transform group-hover:rotate-3`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className={`text-xs font-black uppercase tracking-tight transition-colors line-clamp-2 ${isDisbursement ? 'text-[#006837]' : 'text-slate-900 group-hover:text-[#006837]'
                          }`}>
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3 grow">
                        {step.desc}
                      </p>

                      {/* Highlight pill */}
                      <div className={`pt-2.5 border-t flex items-center text-[11px] font-semibold ${isDisbursement
                        ? 'border-emerald-200 text-[#006837]'
                        : 'border-slate-100 text-slate-600'
                        }`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${isDisbursement ? 'text-[#006837]' : 'text-emerald-600'}`} />
                        <span className="truncate">{step.highlight}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= MOBILE / TABLET VERTICAL ROADMAP (< lg) ================= */}
        <div className="lg:hidden relative mt-8 space-y-6">
          {/* Vertical road track running through nodes */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-[#006837] rounded-full z-0" />

          {steps.map((step) => {
            const IconComp = step.icon;
            const isDisbursement = step.stepNum === 6;

            return (
              <div key={step.stepNum} className="relative z-10 flex items-start space-x-4 sm:space-x-6">

                {/* Vertical Pin Node */}
                <div className="shrink-0">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white shadow-md ring-4 ring-white ${isDisbursement
                    ? 'bg-gradient-to-tr from-emerald-600 to-[#006837] ring-emerald-100'
                    : 'bg-gradient-to-tr from-[#006837] to-emerald-500'
                    }`}>
                    {step.numStr}
                  </div>
                </div>

                {/* Card */}
                <div className={`grow bg-white rounded-2xl p-4 sm:p-5 border shadow-xs transition-all ${isDisbursement
                  ? 'border-emerald-300 ring-2 ring-emerald-500/20 bg-gradient-to-b from-emerald-50/40 to-white'
                  : 'border-slate-200/90'
                  }`}>
                  <div className="flex items-center justify-end mb-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {step.tag}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${step.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-2.5">
                    {step.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center text-[11px] text-slate-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                    <span>{step.highlight}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM ROADMAP SUMMARY & ACTION BANNER ================= */}
        <div className="mt-14 lg:mt-16 bg-gradient-to-r from-emerald-900 via-[#006837] to-teal-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Cam kết đồng hành trọn đời</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
                Sẵn sàng giải quyết nhu cầu tài chính của bạn?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-1.5">
                Chỉ mất 3 phút điền thông tin, chuyên viên tài chính của chúng tôi sẽ liên hệ tư vấn gói vay tối ưu nhất cho bạn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onOpenApplyModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#006837] hover:bg-emerald-50 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Đăng ký tư vấn ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
