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
    bio: "Cybersecurity analyst and CTF player ranked in TryHackMe's top 2%, with hands-on experience spanning network security, threat analysis, and SOC operations. Holds SOC Level 1, APIsec Certified Practitioner, Practical Ethical Hacking, Cisco Network Defense, and HCIA Cloud Security credentials. Leads FEDSEC's technical bench and brand.",
    image: "/images/team/francis.png",
    cv: null,
    credentials: "TryHackMe Top 2% · SOC L1 · APIsec · CNSP",
  },
  {
    name: "Isah Dauda",
    role: "Full-Stack Developer & Security Researcher",
    bio: "Researcher and full-stack blockchain engineer who audits from the inside out — tracing vulnerabilities through architecture and business logic rather than relying on scanners. CAP and CNSP certified, hunts bounties across Cantina, YesWeHack, and Bugcrowd, and has competed in public audit contests including on the XRP Ledger.",
    image: "/images/team/isah.png",
    cv: null,
    credentials: "CAP · CNSP · XRP Ledger Audits",
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
    bio: "Cybersecurity adviser and penetration tester with five+ years in offensive security, vulnerability research, and security program advisory. Advises Nigeria's Police Force National Cyber Crime Center and leads penetration testing across government systems. 35+ accepted bug bounty reports; eCPPT, eWPT, CNSP, and Google Associate Cloud Engineer certified.",
    image: "/images/team/ridwan.png",
    cv: "/images/resumes/ridwan-cv.pdf",
    credentials: "eCPPT · eWPT · CNSP · 35+ Bounties",
  },
  {
    name: "Agnes Akpa",
    role: "Cyber Security Analyst",
    bio: "Operates at the intersection of technical security, risk governance, and business strategy — application development, cloud security, DevSecOps, and blockchain security awareness. Head of Security at FiatRouter, previously Cloud Computing Intern with NITDA's IT Hub. (ISC)² Certified in Cybersecurity, DevSecOps, and Google Cybersecurity certified.",
    image: "/images/team/agnes.png",
    cv: "/images/resumes/agnes-cv.docx",
    credentials: "(ISC)² CC · DevSecOps · Google Cyber",
  },
  {
    name: "Anih Kosarachi Clement",
    role: "SOC Analyst",
    bio: "Cybersecurity graduate of FUTMinna with a strong foundation in security monitoring, alert triage, incident analysis, and threat detection. Grounded in SIEM concepts, log versus event analysis, IOCs, and endpoint behavior — building toward incident response, threat hunting, and detection engineering.",
    image: "/images/team/clement.png",
    cv: "/images/resumes/clement-cv.pdf",
    credentials: "FUTMinna · SIEM · Threat Detection",
  },
  {
    name: "Olowolagba Peter",
    role: "Network Security Engineer",
    bio: "Network security specialist with hands-on experience across enterprise networking and IT security operations, gained through internships with Stanbic IBTC Pension Managers. Cisco core switching, SD-WAN, SolarWinds, ManageEngine, Forcepoint, Trellix ePO, Check Point SmartConsole, and Imperva DAM. Pursuing CCNA.",
    image: "/images/team/peter.png",
    cv: "/images/resumes/peter-cv.pdf",
    credentials: "CCNA (pursuing) · Cisco · Stanbic IBTC",
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