export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  image: string;
  company: string;
  date: string;
  category: string;
  mediumUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tesla-odata-wildcards",
    client: "Tesla",
    industry: "Automotive",
    title: "Tesla OData Wildcards to Employee Directory",
    challenge:
      "A partner coordination portal sat on a flexible query architecture that trustingly exposed internal data to external authenticated users. The profile lookup accepted OData style wildcards, the dataset console returned backend blueprints, and ticket search leaked global record counts.",
    solution:
      "Mapped all three flaws, showed how wildcard queries iterated the full employee directory with personal mobile numbers, reporting lines, office locations, and internal groups, then reported the chain as one consolidated issue with clear remediation guidance: sanitize metadata, scope every count to the viewer, and never trust wildcards on sensitive datasets.",
    results: [
      "P2 high impact triage",
      "$2,000 bounty awarded",
      "Directory wide PII enumeration shut",
      "Schema and count leaks shut",
    ],
    services: ["API Security", "VAPT"],
    image: "/images/disclosures/tesla-odata.png",
    company: "Tesla",
    date: "Mar 31, 2026",
    category: "Bug Bounty",
    mediumUrl:
      "https://medium.com/@cyberrado57/exploiting-odata-wildcards-how-i-scraped-teslas-internal-employee-directory-for-a-2-000-bounty-3fe19887f18d",
  },
  {
    slug: "supabase-auth-bypass",
    client: "Enterprise SaaS",
    industry: "Technology",
    title: "Supabase Auth Bypass to Admin",
    challenge:
      "An enterprise SaaS platform built its backend on Supabase with a misconfigured auth layer. Signups on partner domains were auto confirmed without inbox access, and the app trusted client provided metadata for authorization decisions.",
    solution:
      "Registered on a partner domain to land an instant authenticated session, then injected an admin role through the signup metadata so the resulting JWT carried full tenant privileges. Walked triage through reproduction step by step until the exploit was confirmed and paid as a Critical 9.1.",
    results: [
      "CVSS 9.1 Critical severity",
      "$1,800 bounty awarded",
      "Auth bypass plus privilege escalation proven",
      "Email confirm plus RLS guidance delivered",
    ],
    services: ["API Security", "Cloud Security"],
    image: "/images/disclosures/supabase-auth.png",
    company: "Redacted program",
    date: "Apr 26, 2026",
    category: "Bug Bounty",
    mediumUrl:
      "https://medium.com/@cyberrado57/exploiting-supabase-misconfigurations-authentication-bypass-and-privilege-escalation-for-1-800-f20d02557e47",
  },
  {
    slug: "luxury-sso-chain",
    client: "Luxury Brand",
    industry: "Retail",
    title: "Luxury SSO Chain to Broken Access Control",
    challenge:
      "A global luxury brand ran an internal admin portal whose frontend build shipped a public config file with API secrets and a login integration ID. The single sign on flow behind that ID checked nothing about who was logging in, so any holder of a standard LINE account received a valid token.",
    solution:
      "Combined the leaked credentials with a freshly minted token to reach an internal survey API that lacked authorization middleware entirely, proving data injection plus department disclosure. Then showed the same flaw lived in the integration, pre production, and production environments, so each paid out as its own asset.",
    results: [
      "CVSS 6.5 Medium severity",
      "Paid per environment",
      "3 environments closed",
      "INT plus PRP plus PRD",
    ],
    services: ["API Security", "VAPT"],
    image: "/images/disclosures/luxury-sso.jpg",
    company: "Redacted brand",
    date: "Apr 26, 2026",
    category: "Bug Bounty",
    mediumUrl:
      "https://medium.com/@cyberrado57/hunting-bugs-in-high-fashion-chaining-sso-misconfigurations-and-broken-access-control-at-a-major-62546a3e42f1",
  },
];
