export interface ServiceDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  overview: {
    title: string;
    content: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  pricing: {
    model: string; // "Fixed" | "Hourly" | "Retainer" | "Custom"
    startingPrice?: string;
    description: string;
    inclusions: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  technologies: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning Solutions",
    tagline: "Transform Data into Intelligent Decisions",
    description:
      "Leverage the power of artificial intelligence and machine learning to automate processes, predict outcomes, and unlock insights from your data.",
    icon: "brain",
    overview: {
      title: "Harness the Power of AI",
      content:
        "Our AI and machine learning services help businesses automate complex tasks, make data-driven predictions, and discover hidden patterns in their data. From natural language processing to computer vision, we build custom AI solutions that deliver measurable ROI.",
    },
    features: [
      {
        title: "Predictive Analytics",
        description:
          "Forecast trends, customer behavior, and business outcomes using advanced machine learning models.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Extract insights from text, automate customer support, and enable conversational AI interfaces.",
      },
      {
        title: "Computer Vision",
        description:
          "Analyze images and videos for quality control, object detection, facial recognition, and more.",
      },
      {
        title: "Recommendation Systems",
        description:
          "Build personalized recommendation engines that increase engagement and drive conversions.",
      },
      {
        title: "AI Model Development",
        description:
          "Custom deep learning and machine learning models tailored to your specific business needs.",
      },
      {
        title: "Model Deployment & MLOps",
        description:
          "Production-ready AI deployment with monitoring, versioning, and continuous improvement.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Data Assessment",
        description:
          "We analyze your business objectives, data sources, and feasibility for AI implementation.",
        deliverables: [
          "AI readiness assessment",
          "Data quality audit",
          "Use case prioritization",
          "Project roadmap",
        ],
      },
      {
        step: 2,
        title: "Data Preparation & Feature Engineering",
        description:
          "Clean, transform, and prepare your data for machine learning model training.",
        deliverables: [
          "Data cleaning pipelines",
          "Feature engineering",
          "Data validation frameworks",
          "Training/test datasets",
        ],
      },
      {
        step: 3,
        title: "Model Development & Training",
        description:
          "Build, train, and fine-tune machine learning models using state-of-the-art algorithms.",
        deliverables: [
          "Trained ML models",
          "Model performance metrics",
          "Comparison reports",
          "Documentation",
        ],
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description:
          "Deploy models to production with continuous monitoring and improvement systems.",
        deliverables: [
          "Production deployment",
          "API endpoints",
          "Monitoring dashboards",
          "Maintenance plan",
        ],
      },
    ],
    pricing: [
      {
        model: "Fixed",
        startingPrice: "$25,000",
        description: "For well-defined AI projects with clear scope",
        inclusions: [
          "Complete project delivery",
          "Model training & deployment",
          "3 months post-launch support",
          "Performance monitoring setup",
          "Documentation & training",
        ],
      },
      {
        model: "Retainer",
        startingPrice: "$8,000/month",
        description: "Ongoing AI development and optimization",
        inclusions: [
          "Dedicated AI team",
          "Continuous model improvement",
          "Regular performance reviews",
          "Priority support",
          "Quarterly strategy sessions",
        ],
      },
      {
        model: "Custom",
        description: "Enterprise AI transformation programs",
        inclusions: [
          "Customized pricing based on scope",
          "Multi-project discounts",
          "Dedicated AI consultants",
          "Executive reporting",
          "Long-term partnership benefits",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to build an AI solution?",
        answer:
          "Typical AI projects take 3-6 months from discovery to deployment, depending on complexity and data availability. Simple predictive models can be delivered in 6-8 weeks, while complex deep learning systems may take 6-12 months.",
      },
      {
        question: "Do I need a lot of data for AI to work?",
        answer:
          "It depends on the use case. Some AI models can work with thousands of data points, while others need millions. We assess your data during discovery and recommend the best approach, which may include data augmentation, transfer learning, or synthetic data generation.",
      },
      {
        question: "Can you work with our existing data infrastructure?",
        answer:
          "Yes! We integrate with all major data platforms including AWS, Azure, GCP, Snowflake, Databricks, and on-premise systems. We can also help modernize your data infrastructure if needed.",
      },
      {
        question: "How do you ensure AI model accuracy?",
        answer:
          "We use rigorous validation techniques including cross-validation, A/B testing, and continuous monitoring. All models come with detailed performance metrics and regular retraining schedules to maintain accuracy over time.",
      },
      {
        question: "What happens after the AI model is deployed?",
        answer:
          "We provide ongoing monitoring, maintenance, and optimization. This includes model performance tracking, drift detection, regular retraining, and continuous improvement based on new data and business feedback.",
      },
    ],
    caseStudy: {
      client: "E-commerce Retailer",
      industry: "Retail",
      challenge:
        "High cart abandonment rates (68%) and ineffective product recommendations leading to low conversion rates.",
      solution:
        "Implemented AI-powered recommendation engine using collaborative filtering and deep learning to personalize product suggestions. Added predictive analytics to identify users at risk of churning.",
      results: [
        "45% reduction in cart abandonment",
        "3.2x increase in average order value",
        "28% improvement in conversion rate",
        "ROI achieved in 4 months",
      ],
    },
    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Keras",
      "Python",
      "R",
      "Apache Spark",
      "MLflow",
      "Kubeflow",
      "AWS SageMaker",
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation Consulting",
    tagline: "Modernize Your Business for the Digital Age",
    description:
      "Strategic consulting and implementation services to digitize your operations, modernize legacy systems, and build digital-first capabilities.",
    icon: "trending-up",
    overview: {
      title: "Navigate Digital Change Successfully",
      content:
        "Digital transformation isn't just about technology—it's about reimagining your business for the digital age. We help organizations assess their current state, develop transformation roadmaps, and execute strategic initiatives that drive real business value.",
    },
    features: [
      {
        title: "Digital Strategy & Roadmap",
        description:
          "Develop comprehensive digital transformation strategies aligned with business objectives.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Migrate from outdated systems to modern, cloud-native architectures without disruption.",
      },
      {
        title: "Process Automation",
        description:
          "Identify and automate manual processes using RPA, workflow automation, and AI.",
      },
      {
        title: "Cloud Migration",
        description:
          "Strategic migration to AWS, Azure, or GCP with optimized costs and performance.",
      },
      {
        title: "Digital Workplace",
        description:
          "Enable remote work and collaboration with modern tools and secure infrastructure.",
      },
      {
        title: "Change Management",
        description:
          "Ensure successful adoption through training, communication, and organizational support.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Current State Assessment",
        description:
          "Comprehensive analysis of existing systems, processes, and digital maturity.",
        deliverables: [
          "Digital maturity assessment",
          "Technology audit",
          "Process mapping",
          "Gap analysis report",
        ],
      },
      {
        step: 2,
        title: "Strategy & Roadmap Development",
        description:
          "Create a phased transformation roadmap with clear milestones and KPIs.",
        deliverables: [
          "Digital transformation strategy",
          "3-year roadmap",
          "Business case & ROI analysis",
          "Technology recommendations",
        ],
      },
      {
        step: 3,
        title: "Implementation & Execution",
        description:
          "Execute transformation initiatives with agile methodology and continuous feedback.",
        deliverables: [
          "New system implementations",
          "Process automation",
          "Data migration",
          "Integration delivery",
        ],
      },
      {
        step: 4,
        title: "Optimization & Scale",
        description:
          "Continuous improvement, user adoption, and scaling successful pilots.",
        deliverables: [
          "Performance optimization",
          "User training programs",
          "Change management support",
          "Success metrics reporting",
        ],
      },
    ],
    pricing: [
      {
        model: "Fixed",
        startingPrice: "$50,000",
        description: "For specific transformation initiatives",
        inclusions: [
          "Dedicated project team",
          "Complete implementation",
          "Change management support",
          "6 months post-launch support",
          "Executive reporting",
        ],
      },
      {
        model: "Retainer",
        startingPrice: "$15,000/month",
        description: "Ongoing transformation partnership",
        inclusions: [
          "Strategic consulting hours",
          "Continuous improvement",
          "Technology advisory",
          "Vendor management",
          "Quarterly strategic reviews",
        ],
      },
      {
        model: "Custom",
        description: "Enterprise-wide transformation programs",
        inclusions: [
          "Multi-year engagement",
          "Dedicated transformation office",
          "Executive sponsorship",
          "Custom pricing structure",
          "Volume discounts",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does digital transformation take?",
        answer:
          "Digital transformation is a journey, not a destination. Initial strategic initiatives typically take 6-18 months, but organizations should expect ongoing transformation as technology evolves. We focus on delivering quick wins within 3-6 months while working toward longer-term goals.",
      },
      {
        question: "What's the ROI of digital transformation?",
        answer:
          "ROI varies by industry and initiative, but our clients typically see 20-40% reduction in operational costs, 30-50% improvement in process efficiency, and 15-25% revenue growth within 18 months. We establish clear KPIs upfront and track ROI throughout the engagement.",
      },
      {
        question: "Can we do this without disrupting our operations?",
        answer:
          "Absolutely. We use proven change management methodologies and phased rollout approaches to minimize disruption. We typically start with pilot programs, gather feedback, and scale gradually to ensure business continuity.",
      },
      {
        question: "Do we need to replace all our systems?",
        answer:
          "Not necessarily. We evaluate each system and recommend modernization strategies that may include replacement, integration, or enhancement. Often, we can extend the life of existing systems while gradually introducing modern components.",
      },
    ],
    caseStudy: {
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge:
        "Paper-based processes, disconnected systems, and lack of real-time visibility across 5 facilities.",
      solution:
        "Implemented cloud-based ERP, IoT sensors for equipment monitoring, mobile apps for floor workers, and automated workflows. Conducted comprehensive change management program.",
      results: [
        "60% reduction in manual data entry",
        "35% improvement in operational efficiency",
        "25% decrease in equipment downtime",
        "90% user adoption rate within 6 months",
      ],
    },
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Salesforce",
      "Microsoft 365",
      "SAP",
      "Oracle",
      "PowerBI",
      "Tableau",
      "UiPath",
    ],
  },
  {
    slug: "web-development",
    name: "Web Application Development",
    tagline: "Build Scalable, High-Performance Web Applications",
    description:
      "Custom web applications built with modern frameworks and best practices. From simple websites to complex enterprise platforms, we deliver solutions that scale.",
    icon: "code",
    overview: {
      title: "Modern Web Development Excellence",
      content:
        "We build web applications that are fast, secure, and scalable using cutting-edge technologies. Whether you need a customer-facing portal, internal business application, or e-commerce platform, our team delivers production-ready solutions with clean code and comprehensive testing.",
    },
    features: [
      {
        title: "Custom Web Applications",
        description:
          "Tailored solutions built with React, Next.js, Vue.js, or Angular based on your requirements.",
      },
      {
        title: "E-Commerce Platforms",
        description:
          "Full-featured online stores with payment integration, inventory management, and analytics.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description:
          "App-like experiences that work offline and can be installed on any device.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs with comprehensive documentation and third-party integrations.",
      },
      {
        title: "Performance Optimization",
        description:
          "Lightning-fast load times through code splitting, caching, and CDN optimization.",
      },
      {
        title: "Security & Compliance",
        description:
          "OWASP Top 10 security measures, HTTPS, data encryption, and compliance with industry standards.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements & Planning",
        description:
          "Detailed discovery to understand your business needs, target users, and technical requirements.",
        deliverables: [
          "Requirements document",
          "User stories & personas",
          "Technical architecture",
          "Project timeline & milestones",
        ],
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Create wireframes, mockups, and interactive prototypes for validation.",
        deliverables: [
          "Wireframes",
          "UI/UX designs",
          "Interactive prototype",
          "Design system documentation",
        ],
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Agile development sprints with continuous testing and client feedback.",
        deliverables: [
          "Working application",
          "Unit & integration tests",
          "Code documentation",
          "Sprint demos",
        ],
      },
      {
        step: 4,
        title: "Launch & Support",
        description:
          "Deployment to production with monitoring, analytics, and ongoing maintenance.",
        deliverables: [
          "Production deployment",
          "Performance monitoring",
          "User training",
          "Maintenance plan",
        ],
      },
    ],
    pricing: [
      {
        model: "Fixed",
        startingPrice: "$15,000",
        description: "For projects with defined scope and requirements",
        inclusions: [
          "Complete web application",
          "Responsive design",
          "Basic SEO optimization",
          "3 months support",
          "Source code & documentation",
        ],
      },
      {
        model: "Hourly",
        startingPrice: "$100-150/hour",
        description: "Flexible engagement for evolving projects",
        inclusions: [
          "Dedicated development team",
          "Bi-weekly sprints",
          "Regular progress updates",
          "Flexible scope adjustments",
          "Priority support",
        ],
      },
      {
        model: "Retainer",
        startingPrice: "$8,000/month",
        description: "Ongoing development and maintenance",
        inclusions: [
          "Continuous feature development",
          "Bug fixes & updates",
          "Performance optimization",
          "Security patches",
          "Monthly reports",
        ],
      },
    ],
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern frameworks including React, Next.js, Vue.js, Angular for frontend, and Node.js, Python (Django/Flask), or .NET for backend. We choose technologies based on your specific requirements, team capabilities, and long-term maintenance needs.",
      },
      {
        question: "How long does it take to build a web application?",
        answer:
          "Simple websites can be built in 4-8 weeks, while complex web applications typically take 3-6 months. The timeline depends on features, integrations, and design complexity. We provide detailed timelines during the planning phase.",
      },
      {
        question: "Do you provide hosting and maintenance?",
        answer:
          "Yes! We offer fully managed hosting on AWS, Azure, or Google Cloud, along with ongoing maintenance packages that include updates, security patches, performance monitoring, and technical support.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. All our web applications are built with responsive design principles, ensuring they work seamlessly across desktop, tablet, and mobile devices. We test on real devices to guarantee quality.",
      },
    ],
    caseStudy: {
      client: "SaaS Startup",
      industry: "Technology",
      challenge:
        "Needed to launch MVP quickly with limited budget while ensuring scalability for future growth.",
      solution:
        "Built modern SaaS platform using Next.js, Node.js, and PostgreSQL with automated deployment pipeline. Implemented freemium model with Stripe integration.",
      results: [
        "Launched in 8 weeks under budget",
        "500+ users in first month",
        "99.9% uptime since launch",
        "Platform scaled to 5,000+ users without architecture changes",
      ],
    },
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline: "Native & Cross-Platform Mobile Solutions",
    description:
      "Create engaging mobile experiences for iOS and Android with native performance and modern UI/UX. From concept to App Store launch and beyond.",
    icon: "smartphone",
    overview: {
      title: "Build Apps Users Love",
      content:
        "We develop high-quality mobile applications for iOS and Android using native and cross-platform approaches. Our apps deliver smooth performance, intuitive interfaces, and seamless integration with device features and backend systems.",
    },
    features: [
      {
        title: "Native iOS & Android Apps",
        description:
          "Platform-specific apps built with Swift/SwiftUI and Kotlin for optimal performance.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Cost-effective apps using React Native or Flutter that work on both platforms.",
      },
      {
        title: "Backend Integration",
        description:
          "Seamless connection to APIs, databases, and cloud services for real-time data sync.",
      },
      {
        title: "Push Notifications",
        description:
          "Engage users with targeted push notifications and in-app messaging.",
      },
      {
        title: "Offline Functionality",
        description:
          "Apps that work without internet with smart caching and background sync.",
      },
      {
        title: "App Store Optimization",
        description:
          "Launch support including App Store/Play Store submission and ASO strategies.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy & UX Design",
        description:
          "Define app strategy, create user flows, and design intuitive interfaces.",
        deliverables: [
          "App strategy document",
          "User flow diagrams",
          "Wireframes & mockups",
          "Interactive prototype",
        ],
      },
      {
        step: 2,
        title: "Development & API Integration",
        description:
          "Build app features with regular demos and integrate with backend systems.",
        deliverables: [
          "Working app builds",
          "API integration",
          "Feature demos",
          "Test builds for feedback",
        ],
      },
      {
        step: 3,
        title: "Testing & QA",
        description:
          "Comprehensive testing on real devices across iOS and Android versions.",
        deliverables: [
          "QA test results",
          "Bug fixes",
          "Performance optimization",
          "Beta testing program",
        ],
      },
      {
        step: 4,
        title: "Launch & Growth",
        description:
          "App Store submission, launch marketing support, and post-launch optimization.",
        deliverables: [
          "App Store listings",
          "Launch plan execution",
          "Analytics integration",
          "User acquisition strategy",
        ],
      },
    ],
    pricing: [
      {
        model: "Fixed",
        startingPrice: "$30,000",
        description: "Single platform (iOS or Android) app",
        inclusions: [
          "Complete app development",
          "UI/UX design included",
          "App Store submission",
          "3 months post-launch support",
          "Source code ownership",
        ],
      },
      {
        model: "Fixed",
        startingPrice: "$45,000",
        description: "Cross-platform app (iOS + Android)",
        inclusions: [
          "React Native or Flutter app",
          "Both App Stores",
          "Backend API development",
          "6 months support",
          "Analytics integration",
        ],
      },
      {
        model: "Retainer",
        startingPrice: "$10,000/month",
        description: "Ongoing app development and updates",
        inclusions: [
          "Continuous feature development",
          "Regular app updates",
          "Bug fixes & optimization",
          "App Store maintenance",
          "Monthly analytics reports",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer:
          "Native (Swift/Kotlin) offers best performance and access to latest platform features, ideal for complex apps. Cross-platform (React Native/Flutter) is more cost-effective and faster to market, perfect for MVPs and most business apps. We help you choose based on your requirements and budget.",
      },
      {
        question: "How much does it cost to maintain an app?",
        answer:
          "Typical maintenance costs range from $2,000-5,000/month depending on complexity. This covers bug fixes, OS updates, security patches, and minor feature updates. We offer flexible maintenance packages tailored to your needs.",
      },
      {
        question: "How long does app development take?",
        answer:
          "Simple apps take 2-3 months, while complex apps with custom features take 4-9 months. This includes design, development, testing, and App Store approval (typically 1-2 weeks). We provide detailed timelines in the proposal.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "Yes! We manage the entire submission process including creating store listings, preparing screenshots, writing descriptions, and handling Apple/Google review process. We also help with App Store Optimization (ASO).",
      },
    ],
    caseStudy: {
      client: "HealthTech Company",
      industry: "Healthcare",
      challenge:
        "Needed HIPAA-compliant telemedicine app with video consultations and secure messaging.",
      solution:
        "Developed cross-platform app using React Native with end-to-end encryption, video integration via Twilio, and HIPAA-compliant cloud infrastructure on AWS.",
      results: [
        "Launched on both platforms in 5 months",
        "10,000+ downloads in first quarter",
        "4.8-star average rating",
        "Zero security incidents since launch",
      ],
    },
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS Amplify",
      "Node.js",
      "GraphQL",
      "Twilio",
      "Stripe",
    ],
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing Solutions",
    tagline: "Scalable, Secure Cloud Infrastructure",
    description:
      "Migrate to the cloud, optimize costs, and build cloud-native applications with AWS, Azure, and Google Cloud expertise.",
    icon: "cloud",
    overview: {
      title: "Harness the Power of Cloud",
      content:
        "Transform your infrastructure with cloud computing. We help businesses migrate to the cloud, build cloud-native applications, and optimize cloud spend while ensuring security, compliance, and high availability.",
    },
    features: [
      {
        title: "Cloud Migration Strategy",
        description:
          "Comprehensive migration planning from on-premise to AWS, Azure, or GCP with zero downtime.",
      },
      {
        title: "Cloud-Native Development",
        description:
          "Build applications using serverless, containers, and microservices architectures.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Automated infrastructure provisioning using Terraform, CloudFormation, or ARM templates.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reduce cloud costs by 30-50% through rightsizing, reserved instances, and architectural improvements.",
      },
      {
        title: "Security & Compliance",
        description:
          "Implement cloud security best practices and achieve compliance (SOC 2, HIPAA, PCI DSS).",
      },
      {
        title: "24/7 Monitoring & Support",
        description:
          "Proactive monitoring, alerting, and incident response for your cloud infrastructure.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Cloud Assessment",
        description:
          "Analyze current infrastructure, workloads, and cloud readiness.",
        deliverables: [
          "Infrastructure audit",
          "Cloud readiness assessment",
          "Migration strategy",
          "Cost-benefit analysis",
        ],
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Design cloud architecture optimized for performance, cost, and security.",
        deliverables: [
          "Architecture diagrams",
          "Security design",
          "Disaster recovery plan",
          "Cost estimates",
        ],
      },
      {
        step: 3,
        title: "Migration & Implementation",
        description:
          "Execute migration in phases with minimal disruption to business operations.",
        deliverables: [
          "Migrated infrastructure",
          "Testing & validation",
          "Performance benchmarks",
          "Documentation",
        ],
      },
      {
        step: 4,
        title: "Optimization & Management",
        description:
          "Continuous optimization of performance, costs, and security posture.",
        deliverables: [
          "Monitoring setup",
          "Cost optimization reports",
          "Security hardening",
          "Managed services",
        ],
      },
    ],
    pricing: [
      {
        model: "Fixed",
        startingPrice: "$35,000",
        description: "Cloud migration projects",
        inclusions: [
          "Complete migration service",
          "Architecture design",
          "Security implementation",
          "3 months post-migration support",
          "Cost optimization",
        ],
      },
      {
        model: "Retainer",
        startingPrice: "$6,000/month",
        description: "Managed cloud services",
        inclusions: [
          "24/7 monitoring & support",
          "Monthly cost optimization",
          "Security updates",
          "Performance tuning",
          "Quarterly architecture reviews",
        ],
      },
      {
        model: "Custom",
        description: "Enterprise cloud solutions",
        inclusions: [
          "Multi-cloud strategies",
          "Dedicated cloud architects",
          "Compliance programs",
          "Custom SLAs",
          "Volume discounts",
        ],
      },
    ],
    faqs: [
      {
        question: "Which cloud platform should I choose?",
        answer:
          "AWS is the most mature with broadest service offerings, Azure integrates best with Microsoft ecosystem, and GCP excels in data analytics and ML. We help you choose based on your specific requirements, existing technology stack, and team expertise.",
      },
      {
        question: "How much can I save by moving to the cloud?",
        answer:
          "Organizations typically save 20-40% on infrastructure costs within the first year through elimination of hardware, reduced energy costs, and improved resource utilization. We provide detailed ROI analysis during the assessment phase.",
      },
      {
        question: "Is cloud migration risky?",
        answer:
          "With proper planning, cloud migration is low-risk. We use proven methodologies, conduct thorough testing, and migrate in phases to ensure zero downtime. We also implement rollback procedures for additional safety.",
      },
      {
        question: "Can you manage our cloud infrastructure ongoing?",
        answer:
          "Yes! Our managed cloud services include 24/7 monitoring, security updates, cost optimization, performance tuning, and incident response. We act as your cloud operations team.",
      },
    ],
    caseStudy: {
      client: "Financial Services Firm",
      industry: "Finance",
      challenge:
        "Aging on-premise infrastructure with high maintenance costs and limited scalability.",
      solution:
        "Migrated to AWS using hybrid cloud approach. Implemented auto-scaling, disaster recovery, and achieved PCI DSS compliance.",
      results: [
        "40% reduction in infrastructure costs",
        "99.99% uptime achieved",
        "PCI DSS compliance certification",
        "Deployment time reduced from days to hours",
      ],
    },
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "CloudFormation",
      "Ansible",
      "Datadog",
    ],
  },
];

// Helper functions
export function getAllServices(): ServiceDetail[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}
