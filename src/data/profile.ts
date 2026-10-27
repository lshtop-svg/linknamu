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

// TODO: 더미 값입니다. 실제 내용으로 교체하세요 (사진은 public/ 아래에 넣고 경로 지정)
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  photo: "/dummy-profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
