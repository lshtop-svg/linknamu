import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10 sm:px-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-6">
        <ProfileHeader {...profile} />
      </div>

      <LinkList links={links} />
    </main>
  );
}
