export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "why-zero-trust-security-matters-today",
    title: "Why zero trust security matters today",
    excerpt:
      "Trust was once granted by location. If you were inside the office network, you were treated as safe. That model no longer matches how work actually happens.",
    content:
      "Most breaches I review in the SOC share one root cause. Someone or something was trusted because of where it sat on the network, not because it proved it should be there. A VPN login, a device on office wifi, a service account that has been quiet for months. Attackers love inherited trust because it turns one small foothold into free movement. Zero trust answers this with a plain rule. Never trust, always verify. Every user, every device, and every workload must prove itself on every request, no matter where it connects from. In practice that means strong identity at the center, least privilege everywhere, and continuous verification instead of a single login gate. Micro segmentation then limits how far any compromise can travel, so a breached laptop does not become a breached company. The realistic part is that nobody rebuilds everything at once. Start with identity. Enforce multi factor across the board, inventory service accounts, and remove standing admin rights. Then segment the crown jewels first, usually finance systems, backups, and production data. Measure progress by how few paths lead to those assets, not by how many tools you bought. Done this way, zero trust is not a product. It is a habit of verifying, and it pays off the first time an attacker finds the front door locked from the inside.",
    category: "Cloud Security",
    date: "2026-05-17",
    readTime: "6 min read",
    author: "Nwachukwu Francis O.",
    authorRole: "Founder/Tech Lead",
    image: "/images/blogs/blog-zero-trust.jpg",
  },
  {
    slug: "securing-cloud-environments-for-modern-enterprises",
    title: "Securing cloud environments for modern enterprises",
    excerpt:
      "Cloud providers secure the infrastructure. You secure what you build on it. Most cloud incidents I see come from that second half.",
    content:
      "The shared responsibility model sounds simple until an incident shows where the line sits. The provider patches hypervisors and guards data centers. Your team owns identities, permissions, storage settings, logging, and every toggle in between. When I assess cloud estates, the same misconfigurations appear again and again. Storage buckets left readable, access keys that never expire, admin roles handed to entire teams, and logs nobody reviews. None of these need exotic exploits. They need discipline. A practical baseline starts with identity. Give every human and workload the smallest role that works, require multi factor for console access, and rotate keys on a schedule you actually enforce. Then lock the data layer. No public storage by default, encryption switched on, and backups tested by restoring them, not by assuming they work. Guardrails beat checklists here. Policy as code in your deployment pipeline stops a public bucket before it ships, while detective controls catch drift in accounts nobody visits. Finally, centralize logs and alert on what matters. Failed admin logins, permission changes, and new access keys are cheap signals with high value. Cloud security is mostly governance with good tooling. Build the habits, automate the rest, and your incident count will show it.",
    category: "Cloud Protection",
    date: "2026-06-09",
    readTime: "7 min read",
    author: "Agnes Akpa",
    authorRole: "DevSecOps & GRC",
    image: "/images/blogs/blog-cloud-security.jpg",
  },
  {
    slug: "preventing-threats-through-early-detection",
    title: "Preventing threats through early detection",
    excerpt:
      "Attackers rarely break in loudly. They land quietly, learn the environment, then move. Early detection is how you meet them at the door instead of at the vault.",
    content:
      "Years of offensive testing taught me one pattern above all. The initial foothold is almost never the disaster. The disaster is the weeks of quiet movement after it, while nobody looks at the right signals. Early detection flips that math. You cannot stop every intrusion, but you can shrink the time between landing and discovery until attacks stop paying. Good detection starts with knowing your normal. Which accounts touch production at 3am, which servers talk to the internet, what a regular admin session looks like. Once that baseline exists, deviations become stories worth reading. A service account logging in interactively, a workstation reaching a database directly, an old protocol waking up after a year of silence. Each is a thread to pull. My rule for tuning is simple. Every alert must name the action to take. If an alert fires and nobody knows the next step, it is noise, and noise trains teams to ignore everything. Review detection coverage against real attacker paths, not compliance lists. Map your alerts to the tactics you actually worry about, test them with controlled simulations, and retire what never fires. Our Tesla and Supabase disclosures both started as small anomalies that rewarded a closer look. Detection is curiosity with a paper trail. Build it, and the quiet attacks get loud fast.",
    category: "Threat Monitoring",
    date: "2026-04-27",
    readTime: "6 min read",
    author: "Ridwan Adebayo",
    authorRole: "Penetration Tester & Cloud Engineer",
    image: "/images/blogs/blog-threat-detection.jpg",
  },
  {
    slug: "building-safer-networks-with-zero-trust",
    title: "Building safer networks with zero trust",
    excerpt:
      "Passwords get phished and tokens get stolen. Access control has to assume both will happen and still hold the line.",
    content:
      "Access control fails most often at the human layer, so design for that reality. Assume credentials will leak and sessions will be hijacked, then make each of those events worthless on its own. That is the whole game. Start with authentication strength. Multi factor everywhere, phishing resistant methods for admins and finance, and short session lifetimes for sensitive apps. Passwords alone have not been enough for years, and every red team engagement keeps proving it. Next comes authorization with context. Who is asking, from which device, at what hour, to reach what data. A login that looks fine at noon from Lagos looks very different at 3am from a new device, and your controls should treat those two events differently. Step up authentication when risk rises instead of blocking blindly, or users will route around you. Then review access on a rhythm. Quarterly reviews sound boring until you find the contractor account from two vendors ago still holding production rights. Automate joiner mover leaver flows so access follows the org chart without manual tickets. Finally, log every decision. When something breaks, the access logs tell you whether it was a control failure or a process failure, and that distinction decides the fix. Strong access control is invisible when it works. Build it in layers and it will be.",
    category: "Access Control",
    date: "2026-07-23",
    readTime: "6 min read",
    author: "Isah Dauda",
    authorRole: "Full Stack Developer & Security Researcher",
    image: "/images/blogs/blog-access-control.jpg",
  },
  {
    slug: "how-ai-improves-threat-detection-and-response-time",
    title: "How AI improves threat detection and response time",
    excerpt:
      "AI will not replace analysts, but it changes what one analyst can cover. Used well, it compresses the hours between signal and response.",
    content:
      "Coming from offensive security, I watch both sides of this race. Attackers now use automation to recon faster, craft convincing lures, and sift stolen data in minutes. Defenders get the same leverage, and the teams winning are the ones who aim it at analyst bottlenecks. The clearest win is triage. A modern SOC drowns in alerts, and most are variations of the same few stories. Models trained on your environment group those variations, attach context like asset value and past behavior, and present one decision instead of fifty. That alone can take mean time to respond from hours to minutes. Behavioral analytics adds the second win. Rules catch known bad. Baselines catch weird. An account pulling ten times its normal data volume or a server spawning shells at midnight deserves attention even when no signature fires. Pair those anomalies with asset context and you get a short list worth human eyes. A word of caution from the red side. Attackers poison data, evade models, and abuse the same copilots you deploy. Never let automation take irreversible actions alone. Let it draft, enrich, and suggest, while humans approve isolation and shutdowns. Measure the program on outcomes, not model scores. Track detection coverage against real techniques, time from alert to containment, and false positive rate per analyst. If those three move the right way, the AI is earning its place. If not, it is decoration.",
    category: "Security Analysis",
    date: "2026-08-15",
    readTime: "7 min read",
    author: "Abang Obed",
    authorRole: "Offensive Security & Red Team Operations",
    image: "/images/blogs/blog-ai-security.jpg",
  },
  {
    slug: "why-zero-trust-security-matters-today-2",
    title: "Why zero trust security matters today",
    excerpt:
      "Boards ask about maturity, auditors ask about evidence, and attackers ask for neither. Monitoring that satisfies all three is worth building.",
    content:
      "Monitoring usually starts as a tooling project and only later becomes a governance question. Flip that order and everything gets easier. Decide first what the business must prove. That customer data stays private, that financial systems stay intact, that operations keep running. Then instrument toward those promises. Each promise maps to a small set of signals worth watching around the clock. The metrics that matter fit on one page. Mean time to detect, mean time to respond, and coverage of your most critical assets. When detection time drops, say so in plain language and tie it to a change you made, like a new use case or a tuned alert. Leaders fund what they can see working. Alert fatigue is the silent killer here. I advise teams to budget attention like money. Every alert costs analyst minutes, so price it. If an alert never leads to action, tune it or delete it. A quiet console with ten trusted alerts beats a screaming one with ten thousand ignored lines. Reporting closes the loop. A short monthly note covering what was detected, what was contained, and what changed as a result turns security from a cost center into a story of progress. Auditors get evidence, executives get confidence, and the team gets proof their work matters. Monitor what matters, report it plainly, and repeat.",
    category: "Threat Monitoring",
    date: "2026-09-10",
    readTime: "6 min read",
    author: "Agnes Akpa",
    authorRole: "DevSecOps & GRC",
    image: "/images/blogs/blog-soc-monitoring.jpg",
  },
];
