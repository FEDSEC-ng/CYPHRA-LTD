export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Nwachukwu Francis O.",
    role: "Founder / Tech Lead",
    bio: "Francis leads FEDSEC with deep expertise in cybersecurity strategy, vulnerability assessment, and penetration testing.",
    image: "/images/protexy/team/nathan-brooks.png",
  },
  {
    name: "Francis Buchi",
    role: "Chief Executive Officer",
    bio: "Francis drives FEDSEC's vision and growth, building trusted partnerships and leading the firm's multidisciplinary security practice.",
    image: "/images/protexy/team/olivia-walker.png",
  },
];
