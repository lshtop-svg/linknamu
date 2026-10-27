import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, photo }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover shadow-md"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-500 text-4xl font-bold text-white shadow-md"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
