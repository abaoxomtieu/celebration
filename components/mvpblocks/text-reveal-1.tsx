import { TextReveal } from '@/components/ui/text-reveal';
import { cn } from '@/lib/utils';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: '400',
});

export default function TextRevealLetters() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-white via-white to-slate-50">
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-slate-200/60 to-transparent" />
      <div className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <span
          className={cn(
            "text-[0.7rem] uppercase tracking-[0.45em] text-slate-500 sm:text-xs",
            geist.className
          )}
        >
          Lễ tốt nghiệp MBA 2024
        </span>
        <div className="h-px w-24 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400" />
        <TextReveal
          className={cn(
            "bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl",
            geist.className
          )}
          from="bottom"
          split="word"
        >
          Chào mừng Quý Thầy Cô, Anh Chị, các Bạn đến với Tiệc tri ân và Chúc
          mừng hoàn thành đề án thạc sĩ
        </TextReveal>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Cùng nhìn lại hành trình học tập và tri ân những người đã đồng hành
          trên con đường tri thức.
        </p>
      </div>
    </section>
  );
}
