import React from 'react';
import { Car, Home, Briefcase, ShieldCheck, PhoneCall, CheckCircle2, UserCheck } from 'lucide-react';
import { LOAN_PACKAGES } from '../data/mockData';

interface LoanPackagesSectionProps {
  onOpenApplyModal: (packageId?: string) => void;
}

export const LoanPackagesSection: React.FC<LoanPackagesSectionProps> = ({
  onOpenApplyModal
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'car':
        return <Car className="w-7 h-7 text-[#006837]" />;
      case 'home':
        return <Home className="w-7 h-7 text-[#006837]" />;
      case 'briefcase':
        return <Briefcase className="w-7 h-7 text-[#006837]" />;
      case 'shield-check':
        return <ShieldCheck className="w-7 h-7 text-[#006837]" />;
      default:
        return <Car className="w-7 h-7 text-[#006837]" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">
            CHỌN GÓI VAY PHÙ HỢP
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold">
            Đa dạng hình thức vay với hạn mức cao và thời hạn trả nợ linh hoạt
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {LOAN_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Popular Badge if any */}
              {pkg.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase bg-emerald-100 text-[#006837] px-2.5 py-0.5 rounded-full">
                  {pkg.badge}
                </span>
              )}

              <div>
                {/* Header: Icon + Title + Description */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-5 group-hover:bg-[#006837] group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:brightness-200 transition-all">
                      {getIcon(pkg.iconName)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#006837] transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Benefits & Requirements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Lợi ích nổi bật
                    </h4>
                    <ul className="space-y-2">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2 shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-blue-600" />
                      Điều kiện cơ bản
                    </h4>
                    <ul className="space-y-2">
                      {pkg.eligibilityRequirements.map((req, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => onOpenApplyModal(pkg.id)}
                  className="w-full sm:w-auto px-8 bg-slate-900 hover:bg-[#006837] text-white text-sm font-bold py-3 rounded-xl transition-colors shadow-2xs flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Liên hệ tư vấn ngay</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
