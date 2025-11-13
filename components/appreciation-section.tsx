"use client";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500"],
});

const AppreciationSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-900 text-blue-100">
      <div className="absolute inset-0 bg-linear-to-b from-blue-800 via-blue-900 to-blue-950 opacity-95" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 sm:px-10">
        <div className="space-y-3 text-center">
          <span
            className={`${geist.className} text-xs uppercase tracking-[0.4em] text-amber-300/85`}
          >
            Thư Tri Ân
          </span>
          <h2
            className={`${geist.className} text-3xl font-semibold tracking-tight text-white sm:text-4xl`}
          >
            Tri ân những người đã đồng hành
          </h2>
          <div className="mx-auto h-px w-20 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400" />
        </div>

        <div
          className={`${geist.className} space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.65)] backdrop-blur-md sm:p-12`}
        >
          <p className="text-base leading-relaxed text-slate-100/90 sm:text-lg">
            Kính gửi quý Thầy Cô Khoa TC - NH &amp; QTKD, quý Anh Chị Ban cán sự
            các lớp, các Bạn học viên lớp Cao học QTKD K26B và Quý vị khách
            quý!
          </p>
          <p className="text-base leading-relaxed text-slate-100/85 sm:text-lg">
            Tập thể lớp Cao học QTKD K26B xin gửi lời tri ân sâu sắc đến tất cả
            quý vị. Sự tận tâm, hướng dẫn chu đáo của quý Thầy Cô đã giúp chúng
            em vượt qua những thử thách trong học tập và nghiên cứu. Sự quan
            tâm, hỗ trợ nhiệt tình của quý Anh Chị Ban cán sự cùng sự đồng hành
            của các bạn học viên đã làm nên một hành trình học tập trọn vẹn, ý
            nghĩa và đầy kỷ niệm.
          </p>
          <p className="text-base leading-relaxed text-slate-100/85 sm:text-lg">
            Buổi tiệc tri ân hôm nay là cơ hội để chúng em bày tỏ lòng biết ơn
            và trân trọng từng sự đóng góp của mọi người trong quá trình hoàn
            thành đề án thạc sĩ.
          </p>
          <p className="text-base leading-relaxed text-slate-100/85 sm:text-lg">
            Một lần nữa, tập thể lớp Cao học QTKD K26B xin trân trọng gửi lời cảm
            ơn sâu sắc tới tất cả quý vị!
          </p>
          <div className="border-t border-white/10 pt-8 text-right">
            <span className={`${geist.className} block text-sm text-slate-100/80`}>
              Thương mến,
            </span>
            <span className={`${geist.className} text-lg font-medium text-slate-100`}>
              Tập thể lớp Cao học QTKD K26B
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppreciationSection };


