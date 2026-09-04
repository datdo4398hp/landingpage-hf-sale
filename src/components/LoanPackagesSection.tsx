import React from 'react';
import { Car, Home, Briefcase, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { LOAN_PACKAGES } from '../data/mockData';
import { PageRoute } from '../types';

interface LoanPackagesSectionProps {
  onNavigate: (route: PageRoute, params?: { packageId?: string }) => void;
  onOpenApplyModal: (packageId?: string) => void;
}

export const LoanPackagesSection: React.FC<LoanPackagesSectionProps> = ({
  onNavigate,
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOAN_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Popular Badge if any */}
              {pkg.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase bg-emerald-100 text-[#006837] px-2.5 py-0.5 rounded-full">
                  {pkg.badge}
                </span>
              )}

              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-5 group-hover:bg-[#006837] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:brightness-200 transition-all">
                    {getIcon(pkg.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#006837] transition-colors">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 font-medium mb-2 line-clamp-3 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {/* <button
                    onClick={() => onNavigate('loan-detail', { packageId: pkg.id })}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#006837] hover:text-emerald-800 py-1.5 transition-colors group/link"
                  >
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button> */}

                <button
                  onClick={() => onOpenApplyModal(pkg.id)}
                  className="w-full bg-slate-900 hover:bg-[#006837] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-2xs flex items-center justify-center space-x-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Liên hệ tư vấn</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
