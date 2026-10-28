"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있어서 모든 카드가 0회로 표시된다
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.counts) setCounts(data.counts);
      })
      .catch(() => {});
  }, []);

  const increase = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="mt-12 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            clicks={counts[link.id] ?? 0}
            onClick={() => increase(link.id)}
            onCounted={(count) =>
              setCounts((prev) => ({ ...prev, [link.id]: count }))
            }
          />
        </li>
      ))}
    </ul>
  );
}
