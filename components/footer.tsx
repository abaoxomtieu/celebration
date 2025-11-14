"use client";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500"],
});

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-blue-950 text-blue-100 py-4 z-50">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center">
        <p className={`${geist.className} text-sm text-slate-100/80`}>
          Sản phẩm của Lớp Cao học QTKD K26B
        </p>
      </div>
    </footer>
  );
};

export { Footer };