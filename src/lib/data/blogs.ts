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
      "Cloud Security — Modern enterprises rely heavily on cloud infrastructure to manage operations, store sensitive information, and support digital services across global environments.",
    content:
      "Cloud Security — Modern enterprises rely heavily on cloud infrastructure to manage operations, store sensitive information, and support digital services across global environments. While cloud technology improves flexibility, scalability, and operational efficiency, it also introduces new cybersecurity challenges that organizations must address to maintain secure and reliable systems. Protecting cloud environments has become essential for preventing unauthorized access, data breaches, ransomware attacks, and infrastructure vulnerabilities that can disrupt critical business operations.",
    category: "Cloud Security",
    date: "2026-05-17",
    readTime: "8 min read",
    author: "Nwachukwu Francis O.",
    authorRole: "Founder / Tech Lead",
    image: "/images/protexy/blogs/blog-body1.png",
  },
  {
    slug: "securing-cloud-environments-for-modern-enterprises",
    title: "Securing cloud environments for modern enterprises",
    excerpt:
      "Modern enterprises rely on cloud infrastructure to manage business operations, store sensitive customer information, and support large-scale digital services across connected environments.",
    content:
      "Modern enterprises rely on cloud infrastructure to manage business operations, store sensitive customer information, and support large-scale digital services across connected environments. As organizations continue expanding their cloud ecosystems, protecting these platforms from evolving cyber threats becomes essential for maintaining operational stability and long-term business growth. Advanced cybersecurity solutions help businesses secure cloud networks, applications, databases, and digital assets from unauthorized access, ransomware attacks, data breaches, and infrastructure vulnerabilities.",
    category: "Cloud Protection",
    date: "2026-06-09",
    readTime: "8 min read",
    author: "Agnes Akpa",
    authorRole: "Cyber Security Analyst",
    image: "/images/protexy/blogs/blog-body2.png",
  },
  {
    slug: "preventing-threats-through-early-detection",
    title: "Preventing threats through early detection",
    excerpt:
      "Continuous threat monitoring plays a critical role in securing modern cloud environments against increasingly sophisticated cyber attacks.",
    content:
      "Continuous threat monitoring plays a critical role in securing modern cloud environments against increasingly sophisticated cyber attacks. AI-powered monitoring systems analyze network traffic, user activity, and system performance to identify suspicious behaviors and hidden vulnerabilities before they become major security incidents. Real-time alerts and intelligent analytics help businesses improve response speed, reduce downtime, and strengthen digital defense capabilities across cloud infrastructure.",
    category: "Threat Monitoring",
    date: "2026-04-27",
    readTime: "7 min read",
    author: "Ridwan Adebayo",
    authorRole: "Penetration Tester",
    image: "/images/protexy/blogs/blog-related1.png",
  },
  {
    slug: "building-safer-networks-with-zero-trust",
    title: "Building safer networks with zero trust",
    excerpt:
      "Strong access control systems help organizations secure cloud environments by ensuring only authorized users can access critical platforms.",
    content:
      "Strong access control systems help organizations secure cloud environments by ensuring only authorized users can access critical platforms, applications, and sensitive business information. Multi-factor authentication, encrypted credentials, and role-based permissions reduce the risk of unauthorized access attempts, insider threats, and compromised user accounts across connected cloud systems.",
    category: "Access Control",
    date: "2026-07-23",
    readTime: "6 min read",
    author: "Isah Dauda",
    authorRole: "Security Researcher",
    image: "/images/protexy/blogs/blog-related2.png",
  },
  {
    slug: "how-ai-improves-threat-detection-and-response-time",
    title: "How AI improves threat detection and response time",
    excerpt:
      "Advanced security analysis technologies help organizations identify vulnerabilities, monitor system activity, and improve cloud infrastructure protection.",
    content:
      "Advanced security analysis technologies help organizations identify vulnerabilities, monitor system activity, and improve cloud infrastructure protection through intelligent cybersecurity insights. AI-driven threat analysis continuously scans cloud environments for unusual behavior patterns, suspicious access attempts, and operational weaknesses that may expose systems to cyber risks.",
    category: "Security Analysis",
    date: "2026-08-15",
    readTime: "9 min read",
    author: "Abang Obed",
    authorRole: "Lead Security Engineer",
    image: "/images/protexy/blogs/blog-related3.png",
  },
  {
    slug: "why-zero-trust-security-matters-today-2",
    title: "Why zero trust security matters today",
    excerpt:
      "AI-powered monitoring systems analyze network traffic, user activity, and system performance to identify suspicious behaviors and hidden vulnerabilities.",
    content:
      "AI-powered monitoring systems analyze network traffic, user activity, and system performance to identify suspicious behaviors and hidden vulnerabilities before they become major security incidents. Real-time alerts and intelligent analytics help businesses improve response speed, reduce downtime, and strengthen digital defense capabilities across cloud infrastructure.",
    category: "Threat Monitoring",
    date: "2026-09-10",
    readTime: "7 min read",
    author: "Agnes Akpa",
    authorRole: "Cyber Security Analyst",
    image: "/images/protexy/blogs/blog-related4.png",
  },
];
