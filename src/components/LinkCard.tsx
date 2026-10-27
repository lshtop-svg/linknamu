"use client";

import type { LinkItem } from "@/data/profile";

type Props = LinkItem & { clicks?: number };

export default function LinkCard({ id, title, url, clicks }: Props) {
  // 이동을 막지 않도록 응답을 기다리지 않고 클릭을 기록한다
  const recordClick = () => {
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
      className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
    >
      <span>{title}</span>
      {clicks !== undefined && (
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {clicks.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
