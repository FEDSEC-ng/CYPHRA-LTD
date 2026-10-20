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
  mediumUrl?: string;
  externalLabel?: string;
  researcher?: string;
  plain: string;
  takeaways: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tesla-odata-wildcards",
    client: "Tesla",
    industry: "Automotive",
    title: "Tesla OData Wildcards to Employee Directory",
    challenge:
      "A partner coordination portal for bodyshops and suppliers sat on a flexible query architecture that trustingly exposed internal data to external authenticated users. The profile lookup accepted OData style wildcards, so one crafted query iterated the entire employee directory with personal mobile numbers, directReports hierarchy, exact office addresses, and internal group memberships. The dataset console went further, returning developer emails plus full backend schemas with hidden fields and validation rules, while ticket search leaked global counts of 10,000 plus records in North America and 1,963 in Europe.",
    solution:
      "Chained all three flaws into one consolidated report with proof for each endpoint, quantified the exposure in people, schemas, and ticket counts, and closed with concrete remediation guidance: sanitize metadata, scope every count to the viewer, and never trust wildcards on sensitive datasets. Triaged as P2 high impact with a $2,000 award, then published as a full technical writeup so other teams can audit their own query layers for the same pattern.",
    plain:
      "A search feature on a supplier portal let an outsider page through Tesla's internal staff directory, phone numbers and all.",
    takeaways: [
      "Sensitive data needs to be limited at the source, not hidden in the interface.",
      "Flexible search and query features deserve the same review as a login page.",
      "Counts and metadata can leak as much as the records themselves.",
    ],
    results: [
      "P2 high impact triage",
      "$2,000 bounty awarded",
      "Directory wide PII enumeration shut",
      "Schema and count leaks shut",
    ],
    services: ["API Security", "VAPT"],
    image: "/images/disclosures/tesla-odata.png",
    researcher: "Ridwan Adebayo",
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
      "An enterprise SaaS platform built its backend on Supabase with a misconfigured auth layer. The public anon key opened the door, a prior leak had already exposed valid partner domains, and signups on those domains came back instantly confirmed with a live session token, no inbox access needed. Worse, the app read roles straight from client provided signup metadata, so any registrant could simply declare themselves admin.",
    solution:
      "Registered on a partner domain for an instant session, injected an admin role through the signup payload, decoded the token to show the privilege baked in, and proved full tenant control. When triage stumbled on reproduction, clarified exactly how the anon key flows through the frontend and why the metadata injection was the real impact, then waited through three quiet weeks until the team confirmed it. Paid as a Critical 9.1 with a $1,800 award, plus guidance to enforce email confirmation and move roles into backend only tables behind proper row level policies.",
    plain:
      "Signing up with a partner email was enough to get a working session, and one form field let anyone claim to be an admin.",
    takeaways: [
      "Email confirmation is not optional when an account unlocks access.",
      "Roles belong on the server, never in details the visitor can edit.",
      "Access rules need to be tested, not assumed.",
    ],
    results: [
      "CVSS 9.1 Critical severity",
      "$1,800 bounty awarded",
      "Auth bypass plus privilege escalation proven",
      "Email confirm plus RLS guidance delivered",
    ],
    services: ["API Security", "Cloud Security"],
    image: "/images/disclosures/supabase-auth.png",
    researcher: "Ridwan Adebayo",
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
      "A global luxury brand ran an internal admin portal whose frontend build shipped a public config file with Survey API secrets and a LINE login integration ID. The sign on flow behind that ID checked nothing about who was logging in, so any holder of a standard LINE account out of more than 200 million received a valid token, and one internal microservice had no authorization middleware at all.",
    solution:
      "Combined the leaked credentials with a freshly minted token to hit the internal survey API, proving forged entries at a pace of 80,000 a day, forged consent flags, and leaked department identifiers, while sibling services correctly returned 401s. Then proved the identical flaw across integration, pre production, and production, so each environment paid as its own asset. Initially scored 8.2, settled at 6.5 on data sensitivity grounds, and patched everywhere by late March with authorization checks now enforced on every login.",
    plain:
      "A public settings file handed over the keys, and the login flow never checked who was actually signing in.",
    takeaways: [
      "Secrets shipped to the browser are public secrets.",
      "A login token is only as strong as the check behind it.",
      "Every environment deserves testing, not just production.",
    ],
    results: [
      "CVSS 6.5 Medium severity",
      "Paid per environment",
      "3 environments closed",
      "INT plus PRP plus PRD",
    ],
    services: ["API Security", "VAPT"],
    image: "/images/disclosures/luxury-sso.jpg",
    researcher: "Ridwan Adebayo",
    company: "Redacted brand",
    date: "Apr 26, 2026",
    category: "Bug Bounty",
    mediumUrl:
      "https://medium.com/@cyberrado57/hunting-bugs-in-high-fashion-chaining-sso-misconfigurations-and-broken-access-control-at-a-major-62546a3e42f1",
  },
  {
    slug: "codesandbox-payment-replay",
    client: "CodeSandbox",
    industry: "Developer Tools",
    title: "Payment Replay to Free Compute Credits",
    challenge:
      "A cloud development platform credited virtual machine time on payment, but replaying a completed transaction through a proxy minted fresh credits without fresh payment. The payment path never confirmed whether a transaction had already settled, so one purchase could be spent over and over.",
    solution:
      "Traced the flaw to missing idempotency in the checkout and team mutation logic, where replayed transactions processed as new instead of settled. Showed the credit balance climbing past 5,000 on replay with screenshots and a walkthrough video, supplied workspace identifiers so the vendor could trace events in their own logs, and filed a full public advisory with reproduction detail. The vendor confirmed investigation and the researcher was formally credited on the published GHSA.",
    plain:
      "Replaying an old payment created new credits, like a receipt that works every time you show it.",
    takeaways: [
      "Every payment action needs a guard against being repeated.",
      "Check that a payment already settled before handing over value.",
      "Replay protection belongs in the ledger, not the interface.",
    ],
    results: [
      "High severity triage",
      "Credited GHSA reporter",
      "Payment replay proven on video",
      "Idempotency guidance delivered",
    ],
    services: ["API Security", "Software Security"],
    image: "/images/disclosures/case-payment-code.jpg",
    researcher: "Abang Obed",
    company: "CodeSandbox",
    date: "Jun 21, 2024",
    category: "Security Advisory",
    mediumUrl:
      "https://github.com/codesandbox/codesandbox-client/security/advisories/GHSA-5jw5-g7mr-h26r",
    externalLabel: "Read the advisory",
  },
  {
    slug: "polyglot-upload-stored-xss",
    client: "Major Browser Vendor",
    industry: "Technology",
    title: "Polyglot Upload to Stored Script Execution",
    challenge:
      "A leading browser discards content type headers it cannot parse, then sniffs the body to guess. A file that is a valid archive and valid markup at once slips past upload checks as one thing and executes as the other, turning quiet file hosting into stored script execution in the origin.",
    solution:
      "Built a generator that crafts spec valid archives opening with markup while keeping central directory offsets intact, paired with minimal server harnesses that reproduce the exact header conditions, and handed triage a complete kit: payload builder, capture server, MIME server, and video. When the report was flagged as a possible duplicate, proved it carried the missing reproduction the earlier report lacked. Severity assessed at P3 S3 with security review engaged.",
    plain:
      "One file could pass as a harmless archive and still run code when the browser opened it.",
    takeaways: [
      "Guessing a file type turns a file host into an execution surface.",
      "Upload checks should read the bytes, not trust the extension.",
      "Serve uploaded files from a separate, locked down origin.",
    ],
    results: [
      "P3 S3 severity set",
      "Stored execution proven",
      "Full reproduction kit delivered",
      "Security review engaged",
    ],
    services: ["Software Security", "VAPT"],
    image: "/images/disclosures/case-filetransfer.jpg",
    researcher: "Abang Obed",
    company: "Redacted vendor",
    date: "May 4, 2026",
    category: "Responsible Disclosure",
  },
  {
    slug: "dm-restriction-bypass",
    client: "Global Social Platform",
    industry: "Social Media",
    title: "Share Flow Messaging Restriction Bypass",
    challenge:
      "A protected account on a global social platform cannot be messaged directly. The interface says so plainly. Yet the post sharing flow on mobile never got that memo, so forwarding a public post to the same account quietly landed a message in a conversation that should not exist.",
    solution:
      "Walked the exact mobile path step by step with screenshots, proved the web flow stayed locked while mobile delivered, and proposed the one line fix that matters: enforce the same inbox permission check in the sharing flow. The report passed preliminary review, stayed alive through months of follow ups, and the behavior has since been observed fixed in the wild.",
    plain:
      "A private account blocked direct messages, but sharing a post quietly delivered one anyway.",
    takeaways: [
      "One permission rule must cover every path that can send a message.",
      "Mobile and web flows drift apart unless they are tested together.",
      "Privacy settings need coverage on share and forward, not just the inbox.",
    ],
    results: [
      "Preliminary review passed",
      "Restriction bypass proven",
      "Mobile only attack path mapped",
      "Remediation observed in the wild",
    ],
    services: ["API Security", "VAPT"],
    image: "/images/disclosures/case-dm-bypass.jpg",
    researcher: "Abang Obed",
    company: "Redacted platform",
    date: "Aug 19, 2026",
    category: "Responsible Disclosure",
  },
];
