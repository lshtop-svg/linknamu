import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, photo }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover shadow-[0_10px_25px_-5px_rgba(180,100,50,0.35)] ring-4 ring-white/80 dark:ring-white/10"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-orange-400 text-4xl font-bold text-white shadow-[0_10px_25px_-5px_rgba(180,100,50,0.35)] ring-4 ring-white/80 dark:ring-white/10"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 whitespace-nowrap text-xs text-stone-600 dark:text-stone-400 sm:text-sm">
        {bio}
      </p>
    </header>
  );
}
