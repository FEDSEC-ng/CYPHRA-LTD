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
    slug: "advanced-cloud-security-protection",
    title: "Advanced cloud security protection",
    shortDescription:
      "Comprehensive cloud infrastructure protection with AI-powered threat detection and continuous monitoring.",
    fullDescription:
      "NexaBank partnered with our cybersecurity team to strengthen its digital infrastructure and improve protection across critical banking systems. The organization faced increasing risks from evolving cyber threats, unauthorized access attempts, and network vulnerabilities affecting operational security and customer trust. Our goal was to implement a scalable cybersecurity strategy powered by AI-driven threat detection, continuous monitoring, and rapid incident response systems.",
    icon: "Cloud",
    marqueeBadges: [
      "Rapid Cyber Incident Recovery",
      "Advanced System Damage Control",
      "Secure Business Continuity Support",
    ],
    overview:
      "NexaBank partnered with our cybersecurity team to strengthen its digital infrastructure and improve protection across critical banking systems. The organization faced increasing risks from evolving cyber threats, unauthorized access attempts, and network vulnerabilities affecting operational security and customer trust. Our goal was to implement a scalable cybersecurity strategy powered by AI-driven threat detection, continuous monitoring, and rapid incident response systems.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks. Using advanced machine learning algorithms and intelligent behavioral analysis, the system detects unusual network activity, unauthorized access attempts, and evolving cyber threats in real time. This proactive monitoring approach helps businesses reduce vulnerabilities, improve visibility across critical systems, and strengthen overall cybersecurity performance.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems. Intelligent threat detection engines analyze network patterns, user activity, and system performance to uncover hidden risks and potential security breaches in real time. This proactive approach reduces the chances of unauthorized access, malware infections, ransomware attacks, and operational downtime.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies. Through real-time monitoring, automated analysis, and predictive threat identification, organizations gain deeper visibility into network activity and potential security vulnerabilities across critical infrastructure.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring. The solution is designed to identify suspicious activities, unusual behavior patterns, and hidden vulnerabilities before they develop into serious security incidents.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "end-to-end-data-encryption-service",
        title: "End-to-end data encryption service",
        features: [
          "Secure End-to-End Data Encryption",
          "Protected User Access Control",
          "Advanced End-to-End Security",
        ],
      },
      {
        slug: "intelligent-network-firewall-protection",
        title: "Intelligent network firewall protection",
        features: [
          "Intelligent Network Firewall Protection",
          "Real-Time Network Traffic Monitoring",
          "Advanced Digital Firewall Defense",
        ],
      },
    ],
  },
  {
    slug: "ai-powered-threat-detection-system",
    title: "AI-powered threat detection system",
    shortDescription:
      "Advanced AI-driven threat detection with real-time monitoring and automated response capabilities.",
    fullDescription:
      "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks. Using advanced machine learning algorithms and intelligent behavioral analysis, the system detects unusual network activity, unauthorized access attempts, and evolving cyber threats in real time.",
    icon: "Brain",
    marqueeBadges: [
      "Real-Time Threat Monitoring",
      "Smart Cyber Threat Alerts",
      "AI-Powered Security Analysis",
    ],
    overview:
      "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks. Using advanced machine learning algorithms and intelligent behavioral analysis, the system detects unusual network activity, unauthorized access attempts, and evolving cyber threats in real time.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "intelligent-network-firewall-protection",
        title: "Intelligent network firewall protection",
        features: [
          "Intelligent Network Firewall Protection",
          "Real-Time Network Traffic Monitoring",
          "Advanced Digital Firewall Defense",
        ],
      },
      {
        slug: "end-to-end-data-encryption-service",
        title: "End-to-end data encryption service",
        features: [
          "Secure End-to-End Data Encryption",
          "Protected User Access Control",
          "Advanced End-to-End Security",
        ],
      },
    ],
  },
  {
    slug: "end-to-end-data-encryption-service",
    title: "End-to-end data encryption service",
    shortDescription:
      "Secure end-to-end data encryption with protected user access control and advanced security.",
    fullDescription:
      "End-to-end data encryption ensures that sensitive information remains protected throughout its entire lifecycle — from creation to storage to transmission. Our encryption services implement industry-leading algorithms and key management practices to safeguard your critical data assets.",
    icon: "Lock",
    marqueeBadges: [
      "Secure Data Encryption",
      "Protected Access Control",
      "Advanced Security Systems",
    ],
    overview:
      "End-to-end data encryption ensures that sensitive information remains protected throughout its entire lifecycle. Our encryption services implement industry-leading algorithms and key management practices to safeguard your critical data assets.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "advanced-cloud-security-protection",
        title: "Advanced cloud security protection",
        features: [
          "Advanced Cloud Security Protection",
          "Secure Business Continuity",
          "Rapid Incident Recovery",
        ],
      },
      {
        slug: "intelligent-network-firewall-protection",
        title: "Intelligent network firewall protection",
        features: [
          "Intelligent Network Firewall Protection",
          "Real-Time Network Traffic Monitoring",
          "Advanced Digital Firewall Defense",
        ],
      },
    ],
  },
  {
    slug: "intelligent-network-firewall-protection",
    title: "Intelligent network firewall protection",
    shortDescription:
      "Advanced network firewall protection with real-time traffic monitoring and intelligent defense.",
    fullDescription:
      "Intelligent network firewall protection provides comprehensive defense against unauthorized access, malware propagation, and network-based attacks. Our solutions combine traditional firewall capabilities with AI-driven analysis for superior threat detection.",
    icon: "Shield",
    marqueeBadges: [
      "Network Security Defense",
      "Real-Time Traffic Analysis",
      "Intelligent Firewall Protection",
    ],
    overview:
      "Intelligent network firewall protection provides comprehensive defense against unauthorized access, malware propagation, and network-based attacks. Our solutions combine traditional firewall capabilities with AI-driven analysis for superior threat detection.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "advanced-cloud-security-protection",
        title: "Advanced cloud security protection",
        features: [
          "Advanced Cloud Security Protection",
          "Secure Business Continuity",
          "Rapid Incident Recovery",
        ],
      },
      {
        slug: "end-to-end-data-encryption-service",
        title: "End-to-end data encryption service",
        features: [
          "Secure End-to-End Data Encryption",
          "Protected User Access Control",
          "Advanced End-to-End Security",
        ],
      },
    ],
  },
  {
    slug: "intelligent-threat-monitoring",
    title: "Intelligent threat monitoring",
    shortDescription:
      "Continuous intelligent threat monitoring with AI-powered analysis and real-time alerting.",
    fullDescription:
      "Intelligent threat monitoring provides continuous surveillance of your digital infrastructure, using AI and machine learning to identify threats in real time. Our monitoring solutions reduce alert fatigue while improving detection accuracy.",
    icon: "Eye",
    marqueeBadges: [
      "Continuous Threat Surveillance",
      "AI-Powered Alert Analysis",
      "Real-Time Security Monitoring",
    ],
    overview:
      "Intelligent threat monitoring provides continuous surveillance of your digital infrastructure, using AI and machine learning to identify threats in real time. Our monitoring solutions reduce alert fatigue while improving detection accuracy.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "ai-powered-threat-detection-system",
        title: "AI-powered threat detection system",
        features: [
          "AI-Powered Threat Detection",
          "Real-Time Monitoring",
          "Automated Response",
        ],
      },
      {
        slug: "rapid-incident-response-management",
        title: "Rapid incident response management",
        features: [
          "Rapid Incident Response",
          "Automated Threat Containment",
          "Business Continuity Support",
        ],
      },
    ],
  },
  {
    slug: "rapid-incident-response-management",
    title: "Rapid incident response management",
    shortDescription:
      "Rapid incident response and management with automated containment and recovery capabilities.",
    fullDescription:
      "Rapid incident response management ensures that when security incidents occur, your organization can respond quickly and effectively to minimize damage, preserve evidence, and restore normal operations.",
    icon: "Zap",
    marqueeBadges: [
      "Rapid Incident Response",
      "Automated Threat Containment",
      "Business Continuity Recovery",
    ],
    overview:
      "Rapid incident response management ensures that when security incidents occur, your organization can respond quickly and effectively to minimize damage, preserve evidence, and restore normal operations.",
    benefits: [
      {
        title: "Advanced Threat Protection",
        description:
          "Detect and prevent cyber threats through intelligent monitoring and AI-powered security systems.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Monitor networks and digital infrastructure continuously to identify suspicious activities instantly.",
      },
      {
        title: "Secure Data Protection",
        description:
          "Protect sensitive business and customer information with advanced encryption and access control systems.",
      },
      {
        title: "Rapid Incident Response",
        description:
          "Respond quickly to security incidents and minimize operational risks through automated defense strategies.",
      },
    ],
    features: [
      {
        title: "Threat Monitoring",
        description:
          "Our AI-powered threat detection system continuously monitors digital environments to identify suspicious activities before they become major security risks.",
        image: "/images/protexy/services/feature1.png",
      },
      {
        title: "Risk Prevention",
        description:
          "Our AI-powered security technology helps organizations prevent cyber attacks by identifying vulnerabilities and suspicious behaviors before they impact critical systems.",
        image: "/images/protexy/services/feature2.png",
      },
      {
        title: "Security Intelligence",
        description:
          "AI-powered threat detection systems provide businesses with intelligent cybersecurity insights that improve decision-making and strengthen digital defense strategies.",
        image: "/images/protexy/services/feature3.png",
      },
      {
        title: "Intelligent Defense",
        description:
          "Our AI-powered threat detection system strengthens cybersecurity operations through intelligent automation, predictive analysis, and continuous infrastructure monitoring.",
        image: "/images/protexy/services/feature4.png",
      },
    ],
    processSteps: [
      {
        title: "Predict Threats",
        description:
          "Use AI-driven intelligence to identify risks before they escalate.",
      },
      {
        title: "Detect Anomalies",
        description:
          "Monitor activity continuously to uncover unusual behavior and threats",
      },
      {
        title: "Automate Defense",
        description:
          "Respond instantly with intelligent protection and rapid threat containment",
      },
    ],
    relatedServices: [
      {
        slug: "intelligent-threat-monitoring",
        title: "Intelligent threat monitoring",
        features: [
          "Continuous Threat Surveillance",
          "AI-Powered Alert Analysis",
          "Real-Time Security Monitoring",
        ],
      },
      {
        slug: "ai-powered-threat-detection-system",
        title: "AI-powered threat detection system",
        features: [
          "AI-Powered Threat Detection",
          "Real-Time Monitoring",
          "Automated Response",
        ],
      },
    ],
  },
];
