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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "finsecure",
    client: "FinSecure",
    industry: "Financial Services",
    title: "FinSecure",
    challenge:
      "NexaBank partnered with our cybersecurity team to strengthen its digital infrastructure and improve protection across critical banking systems. The organization faced increasing risks from evolving cyber threats, unauthorized access attempts, and network vulnerabilities affecting operational security and customer trust. Our goal was to implement a scalable cybersecurity strategy powered by AI-driven threat detection, continuous monitoring, and rapid incident response systems.",
    solution:
      "Implemented AI-powered threat detection systems, improved real-time network monitoring capabilities, reduced security risks across critical infrastructure, strengthened customer data protection measures, enhanced incident response and recovery speed, increased visibility into suspicious network activity, and built a scalable long-term security framework.",
    results: [
      "Implemented AI-powered threat detection systems Improved",
      "Improved real-time network monitoring capabilities",
      "Reduced security risks across critical infrastructure",
      "Strengthened customer data protection measures",
      "Enhanced incident response and recovery speed",
      "Increased visibility into suspicious network activity",
      "Built a scalable long-term security framework",
    ],
    services: ["Cloud Security", "Threat Monitoring", "Incident Response"],
    image: "/images/protexy/case-studies/case-hero.png",
    company: "TechNova",
    date: "Jun 22, 2026",
    category: "Cybersecurity",
  },
  {
    slug: "vireon",
    client: "Vireon",
    industry: "Technology",
    title: "Vireon",
    challenge:
      "Vireon Corporation needed to strengthen its cybersecurity infrastructure to protect against evolving threats and maintain operational stability across its global technology platform.",
    solution:
      "Deployed advanced threat detection systems, implemented continuous monitoring, and established rapid incident response capabilities to protect critical infrastructure.",
    results: [
      "2.9M+ Threats Detected Annually",
      "Advanced threat detection deployed",
      "Continuous monitoring established",
      "Rapid response capability built",
    ],
    services: ["Threat Detection", "Security Analytics"],
    image: "/images/protexy/case-studies/case-overview1.png",
    company: "Vireon Corp",
    date: "Mar 15, 2026",
    category: "Cybersecurity",
  },
  {
    slug: "medicore-systems",
    client: "MediCore Systems",
    industry: "Healthcare",
    title: "MediCore Systems",
    challenge:
      "MediCore Systems needed to secure patient data across multiple healthcare facilities while maintaining compliance with healthcare regulations and operational efficiency.",
    solution:
      "Implemented comprehensive security measures including access control, data encryption, and continuous monitoring across all facilities.",
    results: [
      "99.7% Secure Access Maintained",
      "Patient data protection enhanced",
      "Compliance requirements met",
      "Operational efficiency improved",
    ],
    services: ["Patient Security", "Access Control"],
    image: "/images/protexy/case-studies/case-overview2.png",
    company: "MediCore",
    date: "Jan 10, 2026",
    category: "Cybersecurity",
  },
  {
    slug: "nexabank",
    client: "NexaBank",
    industry: "Banking",
    title: "NexaBank",
    challenge:
      "NexaBank, a digital-first bank, needed to establish security operations capabilities to match their rapid growth. With no existing SOC, threat detection capability, or incident response procedures, they were exposed to increasing threats in the highly targeted financial services sector.",
    solution:
      "Designed and built NexaBank's SOC from the ground up: selecting and deploying SIEM and SOAR platforms, developing detection use cases mapped to MITRE ATT&CK, creating incident response playbooks, and training their security team.",
    results: [
      "SOC operational within 12 weeks",
      "Over 200 detection use cases deployed",
      "Mean time to detect reduced to under 4 hours",
      "Successfully defended against 2 targeted attacks",
    ],
    services: ["Security Operations", "Threat Detection", "GRC Advisory"],
    image: "/images/protexy/case-studies/case-results1.png",
    company: "NexaBank",
    date: "Sep 22, 2026",
    category: "Cybersecurity",
  },
  {
    slug: "cloudsync",
    client: "CloudSync",
    industry: "Technology",
    title: "CloudSync",
    challenge:
      "CloudSync Technologies was migrating its entire infrastructure from on-premise data centers to a multi-cloud environment. The migration presented security risks at every stage — from data in transit to cloud misconfiguration to identity management sprawl.",
    solution:
      "Embedded within CloudSync's migration team to provide security architecture review, cloud security configuration validation, and continuous security testing throughout the migration.",
    results: [
      "Completed migration with zero security incidents",
      "47 cloud misconfigurations remediated",
      "Cloud security alert noise reduced by 60%",
      "Automated compliance monitoring established",
    ],
    services: ["Cloud Security", "Security Analysis", "Software Security"],
    image: "/images/protexy/case-studies/case-results2.png",
    company: "CloudSync",
    date: "Jul 18, 2026",
    category: "Cybersecurity",
  },
  {
    slug: "vertexhealth",
    client: "VertexHealth",
    industry: "Healthcare",
    title: "VertexHealth",
    challenge:
      "VertexHealth needed to protect sensitive patient health information across a distributed healthcare network while maintaining HIPAA compliance and operational efficiency.",
    solution:
      "Implemented comprehensive healthcare security measures including endpoint protection, network segmentation, and continuous compliance monitoring.",
    results: [
      "HIPAA compliance achieved across all facilities",
      "Patient data breaches prevented",
      "Security monitoring unified across locations",
      "Operational efficiency maintained",
    ],
    services: ["Network Security", "Compliance", "Endpoint Protection"],
    image: "/images/protexy/case-studies/case-content1.png",
    company: "VertexHealth",
    date: "May 5, 2026",
    category: "Cybersecurity",
  },
];
