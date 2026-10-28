"use client";

import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  clicks: number;
  onClick?: () => void;
  onCounted?: (count: number) => void;
};

export default function LinkCard({
  id,
  title,
  url,
  clicks,
  onClick,
  onCounted,
}: Props) {
  // 링크는 새 탭에서 열리므로 응답을 기다려도 이동이 막히지 않는다.
  // 응답의 DB 값으로 덮어써서 다른 곳에서 누른 횟수까지 반영한다.
  const recordClick = () => {
    onClick?.();
    fetch(`/api/click/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.count === "number") onCounted?.(data.count);
      })
      .catch(() => {});
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
