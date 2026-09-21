export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  marqueeBadges: string[];
  overview: string;
  benefits: { title: string; description: string }[];
  features: { title: string; description: string; image: string }[];
  processSteps: { title: string; description: string }[];
  relatedServices: { slug: string; title: string; features: string[] }[];
}

export const services: Service[] = [
  {
    slug: "vulnerability-assessment-and-penetration-testing",
    title: "Vulnerability Assessment & Penetration Testing",
    shortDescription:
      "Comprehensive VAPT services to identify, analyze, and remediate security vulnerabilities across your digital infrastructure.",
    fullDescription:
      "Our VAPT services provide a thorough evaluation of your organization's security posture. We combine automated scanning with manual testing to identify vulnerabilities that automated tools miss, delivering actionable remediation guidance aligned with industry standards.",
    icon: "Shield",
    marqueeBadges: [
      "Vulnerability Scanning",
      "Penetration Testing",
      "Security Auditing",
    ],
    overview:
      "We identify and validate security weaknesses before attackers can exploit them. Our VAPT methodology combines automated scanning with expert manual testing to deliver comprehensive coverage.",
    benefits: [
      {
        title: "Identify Hidden Vulnerabilities",
        description:
          "Discover security gaps across applications, networks, and infrastructure that automated tools often miss.",
      },
      {
        title: "Reduce Attack Surface",
        description:
          "Prioritize and remediate critical vulnerabilities to minimize the pathways available to attackers.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Meet compliance requirements for PCI DSS, ISO 27001, SOC 2, and other security standards.",
      },
      {
        title: "Actionable Remediation",
        description:
          "Receive detailed, prioritized findings with clear guidance on how to fix each vulnerability.",
      },
    ],
    features: [
      {
        title: "Network Penetration Testing",
        description:
          "We simulate real-world attacks against your network infrastructure to identify weaknesses in firewalls, routers, switches, and network configurations. Our testing covers both internal and external network segments.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Web Application Testing",
        description:
          "Comprehensive security testing of web applications covering OWASP Top 10 vulnerabilities, business logic flaws, API security, and authentication mechanisms.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Mobile Application Testing",
        description:
          "Security assessment of iOS and Android applications covering data storage, communication security, authentication, and platform-specific vulnerabilities.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Cloud Infrastructure Testing",
        description:
          "Evaluation of cloud environments across AWS, Azure, and GCP covering misconfigurations, access controls, and cloud-native security risks.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Scope & Plan",
        description:
          "Define testing scope, objectives, and rules of engagement with your team.",
      },
      {
        title: "Discover & Exploit",
        description:
          "Identify vulnerabilities and attempt controlled exploitation to validate real-world impact.",
      },
      {
        title: "Report & Remediate",
        description:
          "Deliver detailed findings with prioritized remediation steps and support your team through fixes.",
      },
    ],
    relatedServices: [
      {
        slug: "grc-advisory",
        title: "GRC Advisory",
        features: [
          "Risk Assessment",
          "Policy Development",
          "Compliance Management",
        ],
      },
      {
        slug: "incident-response",
        title: "Incident Response",
        features: [
          "Breach Investigation",
          "Forensic Analysis",
          "Recovery Planning",
        ],
      },
    ],
  },
  {
    slug: "grc-advisory",
    title: "GRC Advisory",
    shortDescription:
      "Strategic governance, risk, and compliance advisory to align your security program with business objectives and regulatory requirements.",
    fullDescription:
      "Our GRC advisory services help organizations build mature governance frameworks, manage risk effectively, and maintain compliance with industry regulations. We provide strategic guidance that connects security investments to business outcomes.",
    icon: "Lock",
    marqueeBadges: [
      "Governance Frameworks",
      "Risk Management",
      "Compliance Strategy",
    ],
    overview:
      "We help organizations establish robust governance, risk management, and compliance programs that protect business value and meet regulatory obligations.",
    benefits: [
      {
        title: "Strategic Alignment",
        description:
          "Align security investments and risk management with your organization's business objectives.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Navigate complex regulatory requirements including ISO 27001, PCI DSS, GDPR, and local data protection laws.",
      },
      {
        title: "Risk Quantification",
        description:
          "Translate cyber risk into business terms that leadership and board members can understand and act on.",
      },
      {
        title: "Policy Development",
        description:
          "Create practical, enforceable security policies and procedures tailored to your organization.",
      },
    ],
    features: [
      {
        title: "Risk Assessment",
        description:
          "Systematic identification and evaluation of cybersecurity risks across your organization, providing a clear picture of your risk landscape and prioritized remediation roadmap.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Compliance Management",
        description:
          "End-to-end compliance management from gap analysis through certification, ensuring your organization meets all applicable regulatory and industry standards.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Policy & Procedure Development",
        description:
          "Development of comprehensive security policies, standards, and procedures that establish clear guidelines for protecting organizational assets.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Audit Support",
        description:
          "Expert guidance and preparation support for security audits, helping your organization demonstrate compliance and address auditor findings effectively.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Assess",
        description:
          "Evaluate your current governance, risk, and compliance posture against industry frameworks.",
      },
      {
        title: "Design",
        description:
          "Develop tailored GRC strategies, policies, and control frameworks for your organization.",
      },
      {
        title: "Implement",
        description:
          "Deploy governance structures, risk registers, and compliance programs with ongoing support.",
      },
    ],
    relatedServices: [
      {
        slug: "vulnerability-assessment-and-penetration-testing",
        title: "Vulnerability Assessment & Penetration Testing",
        features: [
          "Network Testing",
          "Application Testing",
          "Cloud Testing",
        ],
      },
      {
        slug: "security-operations",
        title: "Security Operations",
        features: [
          "SOC Monitoring",
          "Threat Detection",
          "Incident Handling",
        ],
      },
    ],
  },
  {
    slug: "network-security",
    title: "Network Security",
    shortDescription:
      "End-to-end network security solutions to protect your infrastructure from unauthorized access, malware, and network-based attacks.",
    fullDescription:
      "Our network security services provide comprehensive protection for your network infrastructure. We design, implement, and monitor security controls that defend against unauthorized access, data exfiltration, and network-based attacks.",
    icon: "Cloud",
    marqueeBadges: [
      "Network Defense",
      "Firewall Management",
      "Traffic Monitoring",
    ],
    overview:
      "We protect your network infrastructure with layered security controls, continuous monitoring, and intelligent threat detection to prevent unauthorized access and data breaches.",
    benefits: [
      {
        title: "Perimeter Defense",
        description:
          "Deploy and manage firewalls, IDS/IPS systems, and network segmentation to protect your perimeter.",
      },
      {
        title: "Traffic Analysis",
        description:
          "Monitor network traffic patterns to detect anomalies, unauthorized access, and potential data exfiltration.",
      },
      {
        title: "Zero Trust Architecture",
        description:
          "Implement zero trust principles to verify every access request regardless of source location.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "24/7 network monitoring to detect and respond to threats in real time across all network segments.",
      },
    ],
    features: [
      {
        title: "Firewall & IDS/IPS Management",
        description:
          "Configuration, management, and optimization of firewalls, intrusion detection, and prevention systems to create robust perimeter defenses.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Network Segmentation",
        description:
          "Strategic network segmentation and micro-segmentation to contain threats and limit lateral movement within your infrastructure.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "VPN & Remote Access Security",
        description:
          "Secure remote access solutions with multi-factor authentication and encrypted tunnels for distributed workforces.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Network Monitoring & Alerting",
        description:
          "Real-time network visibility with automated alerting for suspicious traffic patterns, unauthorized devices, and potential security incidents.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Assess",
        description:
          "Evaluate your network architecture and identify security gaps and improvement opportunities.",
      },
      {
        title: "Harden",
        description:
          "Implement security controls, segmentation, and monitoring across your network infrastructure.",
      },
      {
        title: "Monitor",
        description:
          "Provide continuous monitoring and threat detection to maintain network security posture.",
      },
    ],
    relatedServices: [
      {
        slug: "vulnerability-assessment-and-penetration-testing",
        title: "Vulnerability Assessment & Penetration Testing",
        features: [
          "Network Testing",
          "Application Testing",
          "Cloud Testing",
        ],
      },
      {
        slug: "security-operations",
        title: "Security Operations",
        features: [
          "SOC Monitoring",
          "Threat Detection",
          "Incident Handling",
        ],
      },
    ],
  },
  {
    slug: "software-security",
    title: "Software Security",
    shortDescription:
      "Secure software development practices and application security testing to build resilience into your applications from design through deployment.",
    fullDescription:
      "Our software security services help organizations integrate security throughout the software development lifecycle. From secure code review to DevSecOps implementation, we help you build applications that are secure by design.",
    icon: "Brain",
    marqueeBadges: [
      "Secure Development",
      "Code Review",
      "DevSecOps",
    ],
    overview:
      "We embed security into your development process, from threat modeling and secure design to code review and automated security testing in your CI/CD pipeline.",
    benefits: [
      {
        title: "Shift-Left Security",
        description:
          "Integrate security early in the development lifecycle to reduce costs and catch vulnerabilities before production.",
      },
      {
        title: "Secure Code Review",
        description:
          "Expert manual and automated code review to identify security flaws in application source code.",
      },
      {
        title: "DevSecOps Integration",
        description:
          "Automate security testing within your CI/CD pipeline for continuous security validation.",
      },
      {
        title: "Developer Training",
        description:
          "Equip your development team with secure coding knowledge and best practices.",
      },
    ],
    features: [
      {
        title: "Secure Code Review",
        description:
          "Thorough manual and automated review of application source code to identify security vulnerabilities, logic flaws, and insecure coding patterns.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Threat Modeling",
        description:
          "Systematic identification of threats and attack vectors during the design phase to build security into applications from the start.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "DevSecOps Implementation",
        description:
          "Integration of security tools and practices into your CI/CD pipeline for automated security testing, dependency scanning, and container security.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "API Security Testing",
        description:
          "Comprehensive security testing of REST, GraphQL, and SOAP APIs covering authentication, authorization, data validation, and rate limiting.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Design",
        description:
          "Threat model your application architecture and define security requirements.",
      },
      {
        title: "Develop",
        description:
          "Implement secure coding practices with integrated code review and security testing.",
      },
      {
        title: "Deploy",
        description:
          "Validate security through penetration testing and establish ongoing monitoring.",
      },
    ],
    relatedServices: [
      {
        slug: "vulnerability-assessment-and-penetration-testing",
        title: "Vulnerability Assessment & Penetration Testing",
        features: [
          "Application Testing",
          "API Testing",
          "Cloud Testing",
        ],
      },
      {
        slug: "grc-advisory",
        title: "GRC Advisory",
        features: [
          "Risk Assessment",
          "Policy Development",
          "Compliance Management",
        ],
      },
    ],
  },
  {
    slug: "security-operations",
    title: "Security Operations",
    shortDescription:
      "Managed security operations with continuous monitoring, threat detection, and rapid response to protect your organization around the clock.",
    fullDescription:
      "Our security operations services provide continuous monitoring and threat detection capabilities that keep your organization protected 24/7. We combine advanced technology with expert analysts to identify and respond to threats before they cause damage.",
    icon: "Eye",
    marqueeBadges: [
      "SOC Operations",
      "Threat Monitoring",
      "Security Analytics",
    ],
    overview:
      "We provide managed security operations that combine 24/7 monitoring, threat intelligence, and expert analysis to detect and respond to security events across your environment.",
    benefits: [
      {
        title: "24/7 Monitoring",
        description:
          "Round-the-clock security monitoring across your infrastructure with rapid alerting on security events.",
      },
      {
        title: "Threat Detection",
        description:
          "Advanced threat detection using SIEM, behavioral analytics, and threat intelligence feeds.",
      },
      {
        title: "Alert Triage",
        description:
          "Expert analysis of security alerts to reduce false positives and focus on real threats.",
      },
      {
        title: "Reporting & Metrics",
        description:
          "Regular security reporting with key metrics to track your security posture over time.",
      },
    ],
    features: [
      {
        title: "SIEM Management",
        description:
          "Deployment and management of Security Information and Event Management platforms with custom detection rules and correlation logic.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Threat Intelligence",
        description:
          "Integration of threat intelligence feeds and feeds to enrich detection capabilities and provide context for security events.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Log Management",
        description:
          "Centralized log collection, parsing, and analysis across all security devices, servers, and applications.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Security Dashboards",
        description:
          "Real-time security dashboards and reporting that provide visibility into your security posture and key risk indicators.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Monitor",
        description:
          "Continuously collect and analyze logs and events from across your environment.",
      },
      {
        title: "Detect",
        description:
          "Identify security events using correlation rules, behavioral analysis, and threat intelligence.",
      },
      {
        title: "Respond",
        description:
          "Triage alerts, investigate incidents, and coordinate response activities with your team.",
      },
    ],
    relatedServices: [
      {
        slug: "incident-response",
        title: "Incident Response",
        features: [
          "Breach Investigation",
          "Forensic Analysis",
          "Recovery Planning",
        ],
      },
      {
        slug: "network-security",
        title: "Network Security",
        features: [
          "Network Defense",
          "Traffic Monitoring",
          "Zero Trust",
        ],
      },
    ],
  },
  {
    slug: "incident-response",
    title: "Incident Response",
    shortDescription:
      "Rapid incident response and digital forensics to contain breaches, investigate attacks, and restore operations quickly and effectively.",
    fullDescription:
      "Our incident response services ensure your organization can respond quickly and effectively to security incidents. From initial containment through forensic investigation and recovery, we help you minimize impact and restore operations.",
    icon: "Zap",
    marqueeBadges: [
      "Breach Response",
      "Digital Forensics",
      "Recovery Planning",
    ],
    overview:
      "We provide rapid incident response capabilities to contain threats, preserve evidence, investigate root causes, and restore your organization to a secure state.",
    benefits: [
      {
        title: "Rapid Containment",
        description:
          "Swiftly contain active threats to prevent further damage and limit the scope of security incidents.",
      },
      {
        title: "Digital Forensics",
        description:
          "Expert forensic investigation to determine the root cause, scope, and impact of security incidents.",
      },
      {
        title: "Evidence Preservation",
        description:
          "Chain-of-custody evidence handling to support legal proceedings and regulatory reporting.",
      },
      {
        title: "Recovery Support",
        description:
          "Guided recovery process to restore systems to a secure state and prevent recurrence.",
      },
    ],
    features: [
      {
        title: "Incident Triage",
        description:
          "Immediate assessment and classification of security incidents to determine severity, scope, and appropriate response actions.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Malware Analysis",
        description:
          "Static and dynamic analysis of malware samples to understand functionality, indicators of compromise, and development attribution.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Forensic Investigation",
        description:
          "Comprehensive forensic analysis of affected systems, networks, and logs to reconstruct attack timelines and identify all compromised assets.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Recovery & Hardening",
        description:
          "Systematic restoration of affected systems with additional hardening measures to prevent similar incidents in the future.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Contain",
        description:
          "Isolate affected systems and contain the threat to prevent further damage.",
      },
      {
        title: "Investigate",
        description:
          "Conduct forensic analysis to determine root cause, scope, and impact of the incident.",
      },
      {
        title: "Recover",
        description:
          "Restore systems to a secure state and implement measures to prevent recurrence.",
      },
    ],
    relatedServices: [
      {
        slug: "security-operations",
        title: "Security Operations",
        features: [
          "SOC Monitoring",
          "Threat Detection",
          "Incident Handling",
        ],
      },
      {
        slug: "grc-advisory",
        title: "GRC Advisory",
        features: [
          "Risk Assessment",
          "Policy Development",
          "Compliance Management",
        ],
      },
    ],
  },
];
