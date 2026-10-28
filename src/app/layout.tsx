import type { Metadata } from "next";
import { Gowun_Dodum, Nunito } from "next/font/google";
import "./globals.css";

// 영문은 Nunito, 한글은 Gowun Dodum — 둘 다 둥근 산세리프
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const gowun = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gowun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하세요.",
};

// 첫 렌더 전에 저장된 테마를 적용해 화면 깜빡임을 막는다
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${nunito.variable} ${gowun.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans text-stone-800 antialiased dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
