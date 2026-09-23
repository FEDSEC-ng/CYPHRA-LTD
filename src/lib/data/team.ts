export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  cv?: string | null;
  credentials?: string;
}

export const team: TeamMember[] = [
  {
    name: "Nwachukwu Francis O.",
    role: "Founder / Tech Lead",
    bio: "A cybersecurity analyst and CTF player ranked in TryHackMe's top 2%, with hands-on experience spanning network security, threat analysis, and SOC operations across infrastructure, professional, and forensic environments. Francis leads FEDSEC's technical bench and brand, holding SOC Level 1, APIsec Certified Practitioner, Practical Ethical Hacking, Cisco Network Defense, and HCIA Cloud Security credentials.",
    image: "/images/team/francis.png",
    cv: null,
    credentials: "TryHackMe Top 2% · SOC L1 · APIsec",
  },
  {
    name: "Abang Obed",
    role: "Lead Security Engineer",
    bio: "Six years across security operations, application security, offensive security, and detection engineering — spanning web, API, mobile, network, cloud, and Windows internals. Secured government infrastructure at Nigeria's National Emergency Management Agency, holds CPTS, and has been credited on GitHub's and X's official security advisory programs.",
    image: "/images/team/obed.png",
    cv: "/images/resumes/obed-cv.pdf",
    credentials: "CPTS · NEMA · GitHub/X Advisories",
  },
  {
    name: "Ridwan Adebayo",
    role: "Penetration Tester",
    bio: "Cybersecurity adviser and penetration tester with five+ years in offensive security, vulnerability research, and security program advisory. Advises Nigeria's Police Force National Cyber Crime Center and leads penetration testing across government systems. 35+ accepted bug bounty reports; eCPPT, eWPT, CNSP certified.",
    image: "/images/team/ridwan.png",
    cv: "/images/resumes/ridwan-cv.pdf",
    credentials: "eCPPT · eWPT · CNSP · 35+ Bounties",
  },
  {
    name: "Agnes Akpa",
    role: "Cyber Security Analyst",
    bio: "Operates at the intersection of technical security, risk governance, and business strategy — application development, cloud security, and blockchain security awareness. Head of Security at FiatRouter, previously Cloud Computing Intern with NITDA's IT Hub. (ISC)² Certified in Cybersecurity and DevSecOps certified.",
    image: "/images/team/agnes.png",
    cv: "/images/resumes/agnes-cv.docx",
    credentials: "(ISC)² CC · DevSecOps · Cloud",
  },
  {
    name: "Isah Dauda",
    role: "Security Researcher",
    bio: "Cybersecurity researcher with hands-on experience in web application testing — uncovering misconfigurations, insecure headers, and application flaws, and turning findings into clear, actionable reports for stakeholders.",
    image: "/images/team/isah.png",
    cv: null,
    credentials: "Web App Testing · Reporting",
  },
  {
    name: "Badu Zaccheaus J.",
    role: "Cyber Security Analyst",
    bio: "Cybersecurity analyst with hands-on experience testing production systems — uncovering misconfigurations, insecure headers, and web application flaws, and turning findings into clear, actionable reports for stakeholders. Part of the discipline behind FEDSEC's methodology: authorized, documented, and built to hold up under scrutiny.",
    image: "/images/team/badu.png",
    cv: "/images/resumes/badu-cv.docx",
    credentials: "Web App Testing · Methodical Reporting",
  },
];
