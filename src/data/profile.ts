export type Profile = {
  name: string;
  bio: string;
  photo?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "이승훈",
  bio: "신아 시스템 개발자 | 요즘 CLAUDE에 관심이 많아요",
  photo: "https://placehold.co/150/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
