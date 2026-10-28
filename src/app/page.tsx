import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 클릭 수를 항상 최신으로 보여주기 위해 매 요청마다 렌더링한다
export const dynamic = "force-dynamic";

async function getClickCounts(): Promise<Record<string, number> | null> {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) return null;
    const docs = await clicks.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch {
    return null;
  }
}

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10 sm:px-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-6">
        <ProfileHeader {...profile} />
      </div>

      <ul className="mt-12 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} clicks={counts ? counts[link.id] ?? 0 : undefined} />
          </li>
        ))}
      </ul>
    </main>
  );
}
