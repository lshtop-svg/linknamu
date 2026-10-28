"use client";

import type { LinkItem } from "@/data/profile";

type Props = LinkItem & { clicks: number; onClick?: () => void };

export default function LinkCard({ id, title, url, clicks, onClick }: Props) {
  // 이동을 막지 않도록 응답을 기다리지 않고 클릭을 기록한다
  const recordClick = () => {
    onClick?.();
    fetch(`/api/click/${id}`, { method: "POST", keepalive: true }).catch(
      () => {}
    );
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="flex w-full items-center justify-between rounded-3xl border border-white/60 bg-white/40 px-6 py-4 font-semibold shadow-[0_8px_30px_rgba(180,100,50,0.08)] backdrop-blur-md transition duration-200 hover:bg-white/60 hover:shadow-[0_10px_34px_rgba(180,100,50,0.14)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span>{title}</span>
      <span className="text-xs font-normal text-stone-500 dark:text-stone-400">
        {clicks.toLocaleString()}회
      </span>
    </a>
  );
}
