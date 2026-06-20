export const homeHeroSlides = [
  {
    id: 'real-estate',
    badge: 'Real Estate Management',
    title: "Pakistan's Leading Real-Estate Management Solutions",
    subtitle:
      'Complete property, tenant, billing, and society management for housing societies, builders, and property dealers.',
    image: '/sliderpms.jpg',
    ctaLabel: 'Explore Property Solutions',
    ctaPath: '/products/rems',
    secondaryCtaLabel: 'Request Demo',
    secondaryCtaPath: '/property-management-details',
    gradient: 'property',
  },
  {
    id: 'education',
    badge: 'Education Management',
    title: 'Education Management System',
    subtitle:
      'Streamline admissions, fees, attendance, exams, and parent communication for schools and colleges.',
    image: '/school.png',
    ctaLabel: 'Explore School Solutions',
    ctaPath: '/products/sms',
    secondaryCtaLabel: 'Request Demo',
    secondaryCtaPath: '/contact',
    gradient: 'school',
  },
];

export const heroBadges = [
  { emoji: '🏢', label: 'Property Management Experts' },
  { emoji: '🎓', label: 'School Management Specialists' },
  { emoji: '⭐', label: '25+ Years Experience' },
  { emoji: '🇵🇰', label: 'Trusted Across Pakistan' },
];

export const trustMetrics = [
  { value: '25+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: 'Dedicated', label: 'Team' },
  { value: 'Enterprise', label: 'Solutions' },
];

export const featuredSolutions = [
  {
    id: 'property',
    badge: 'Most Popular Solution',
    title: 'Real Estate & Property Management Solutions',
    gradient: 'property',
    path: '/products/rems',
    demoPath: '/property-management-details',
    image: '/sliderpms.jpg',
    features: [
      'Property Management Systems',
      'Housing Society Management',
      'Maintenance Billing',
      'Tenant Management',
      'Owner Portals',
      'Complaint Management',
      'Financial Reporting',
      'Mobile Applications',
    ],
  },
  {
    id: 'school',
    badge: 'Leading Education Solution',
    title: 'School Management Solutions',
    gradient: 'school',
    path: '/products/sms',
    demoPath: '/products/sms',
    image: '/school.png',
    features: [
      'Student Management',
      'Fee Management',
      'Attendance Tracking',
      'Examination Management',
      'Parent Portal',
      'Teacher Portal',
      'Mobile App Integration',
      'Reporting & Analytics',
    ],
  },
];

export const propertyShowcase = [
  { title: 'Housing Societies', icon: 'apartment' },
  { title: 'Builders & Developers', icon: 'construction' },
  { title: 'Property Dealers', icon: 'storefront' },
  { title: 'Rental Management', icon: 'home_work' },
  { title: 'Maintenance Billing', icon: 'receipt' },
  { title: 'Resident Portals', icon: 'people' },
  { title: 'Online Payments', icon: 'payments' },
  { title: 'Mobile Apps', icon: 'phone_android' },
];

export const schoolShowcase = [
  { title: 'Admissions', icon: 'how_to_reg' },
  { title: 'Attendance', icon: 'fact_check' },
  { title: 'Examinations', icon: 'quiz' },
  { title: 'Fee Management', icon: 'account_balance_wallet' },
  { title: 'Parent Portal', icon: 'family_restroom' },
  { title: 'Teacher Portal', icon: 'school' },
  { title: 'Transport Management', icon: 'directions_bus' },
  { title: 'Mobile Apps', icon: 'phone_android' },
];

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

/** 6×4 technology logo grid (matches reference layout) */
export const technologyLogoGrid = [
  { name: 'React', logo: devicon('react') },
  { name: 'Node.js', logo: devicon('nodejs') },
  { name: 'Vue.js', logo: devicon('vuejs') },
  { name: 'React Native', logo: devicon('reactnative') },
  { name: 'Flutter', logo: devicon('flutter') },
  { name: 'Android', logo: devicon('android') },
  { name: 'Python', logo: devicon('python') },
  { name: 'WordPress', logo: devicon('wordpress') },
  { name: 'PHP', logo: devicon('php') },
  { name: 'MySQL', logo: devicon('mysql') },
  { name: 'Firebase', logo: devicon('firebase') },
  { name: 'Oracle', logo: devicon('oracle') },
  { name: 'PostgreSQL', logo: devicon('postgresql') },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'MongoDB', logo: devicon('mongodb') },
  { name: 'Microsoft Azure', logo: devicon('azure') },
  { name: 'Stripe', logo: '/logos/stripe.svg' },
  { name: 'Twilio', logo: devicon('twilio') },
];

export const whyCompaniesChoose = [
  {
    title: 'Deep Domain Expertise',
    description:
      'We understand property management and education operations in Pakistan—from housing societies and billing to school admissions, fees, and parent portals—so we deliver software that fits how you actually work.',
  },
  {
    title: 'Experienced In-House Team',
    description:
      'Dedicated professionals in software development, UI/UX design, and client delivery—ready to build, integrate, and support your property or school management platform.',
  },
  {
    title: '25+ Years of Trusted Delivery',
    description:
      'A long track record across Pakistan helping real estate companies, societies, schools, and institutions modernize operations with reliable, scalable applications.',
  },
];

export const whyChoose = [
  {
    title: '25+ Years Experience',
    description: 'A proven track record delivering software across Pakistan since the early days of enterprise IT.',
    icon: 'verified',
  },
  {
    title: 'Domain Knowledge in Real Estate',
    description: 'Deep expertise in housing societies, builders, billing cycles, and property operations.',
    icon: 'real_estate',
  },
  {
    title: 'Domain Knowledge in Education',
    description: 'Specialists in schools, colleges, and institutions—fees, exams, portals, and parent engagement.',
    icon: 'school',
  },
  {
    title: 'Dedicated Development Teams',
    description: 'Stable squads aligned to your roadmap, stack, and delivery expectations.',
    icon: 'groups',
  },
  {
    title: 'Modern Technologies',
    description: 'ASP.NET Core, ReactJS, React Native, SQL Server, and cloud platforms built for scale.',
    icon: 'memory',
  },
  {
    title: 'Long-Term Support',
    description: 'Ongoing enhancements, training, and support after go-live—your partner for the long run.',
    icon: 'support',
  },
];

export const services = [
  {
    title: 'Property Management Systems',
    description: 'End-to-end platforms for housing societies, developers, and property managers across Pakistan.',
    path: '/products/rems',
    featured: true,
  },
  {
    title: 'School Management Systems',
    description: 'Complete academic operations—from admissions and fees to parent and teacher portals.',
    path: '/products/sms',
    featured: true,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored applications engineered to match your business processes and growth roadmap.',
    path: '/services/software-development',
  },
  {
    title: 'Web Application Development',
    description: 'Scalable, secure web platforms built with React and ASP.NET Core.',
    path: '/services/web-design',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile experiences with React Native for iOS and Android.',
    path: '/services/mobile-app-development',
  },
  {
    title: 'Enterprise Solutions',
    description: 'ERP, CRM, HRM, and line-of-business systems at organizational scale.',
    path: '/products',
  },
  {
    title: 'Cloud Solutions',
    description: 'Azure and AWS migrations, DevOps pipelines, and performance optimization.',
    path: '/coditium-services',
  },
  {
    title: 'Dedicated Development Teams',
    description: 'Extend your capacity with vetted engineers aligned to your delivery cadence.',
    path: '/contact',
  },
];

export const technologyGroups = [
  { category: 'Frontend', items: ['ReactJS', 'Next.js', 'JavaScript', 'TypeScript'] },
  { category: 'Backend', items: ['ASP.NET Core', 'C#', 'Web API'] },
  { category: 'Mobile', items: ['React Native'] },
  { category: 'Database', items: ['SQL Server', 'PostgreSQL'] },
  { category: 'Cloud', items: ['Azure', 'AWS'] },
];

export const processSteps = [
  { step: 1, title: 'Discovery & Analysis', description: 'Stakeholder workshops, requirements, and feasibility assessment.' },
  { step: 2, title: 'Planning & Architecture', description: 'Technical design, milestones, and risk-managed delivery plan.' },
  { step: 3, title: 'Design & Development', description: 'Iterative sprints with transparent demos and measurable progress.' },
  { step: 4, title: 'Testing & Quality Assurance', description: 'Automated and manual QA aligned to enterprise acceptance criteria.' },
  { step: 5, title: 'Deployment', description: 'Controlled releases with DevOps pipelines and environment governance.' },
  { step: 6, title: 'Support & Maintenance', description: 'Ongoing optimization, security patches, and feature evolution.' },
];

export const portfolioProjects = [
  {
    title: 'Property Management System',
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'Azure'],
    description: 'Cloud-based platform for housing societies, builders, and property managers—billing, tenants, and owner portals.',
    image: '/sliderpms.jpg',
    path: '/property-management-details',
    featured: true,
  },
  {
    title: 'School Management System',
    stack: ['React', 'ASP.NET Core', 'SQL Server'],
    description: 'Admissions, fees, attendance, exams, and parent-teacher portals for schools and colleges.',
    image: '/school.png',
    path: '/products/sms',
    featured: true,
  },
  {
    title: 'Real Estate Management (REMS)',
    stack: ['ASP.NET Core', 'React', 'SQL Server'],
    description: 'Comprehensive real estate operations for dealers, societies, and developers.',
    image: '/portfolio/card01.png',
    path: '/products/rems',
  },
  {
    title: 'Enterprise Resource Planning',
    stack: ['React', 'Web API', 'PostgreSQL'],
    description: 'Integrated ERP modules for finance, inventory, and operations management.',
    image: '/hrms.png',
    path: '/products/erp',
  },
];

export const testimonials = [
  {
    quote:
      'Coditium implemented our housing society management system with billing and resident portals—exactly what we needed for day-to-day operations. Their team understood our workflows and delivered on time.',
    name: 'Society Administrator',
    company: 'Housing Society, Pakistan',
    role: 'Operations Manager',
  },
  {
    quote:
      'Their school management platform streamlined fees, attendance, and parent communication. Implementation was smooth and ongoing support has been excellent—we are very satisfied with the results.',
    name: 'School Principal',
    company: 'Educational Institution, Pakistan',
    role: 'Principal',
  },
  {
    quote:
      'We have partnered with Coditium for years and have never been disappointed. Property billing, tenant records, and reporting are handled professionally—our staff and residents are happier.',
    name: 'Property Manager',
    company: 'Real Estate Company, Pakistan',
    role: 'Senior Property Manager',
  },
  {
    quote:
      'Twenty-five years of experience shows in every decision—from requirements to deployment. A trusted technology partner for enterprise software across our organization.',
    name: 'IT Director',
    company: 'Enterprise Client, Pakistan',
    role: 'IT Director',
  },
  {
    quote:
      'Customer satisfaction matters to us, and Coditium delivered. Training, responsiveness, and system stability exceeded our expectations for our education management rollout.',
    name: 'Academic Coordinator',
    company: 'College, Pakistan',
    role: 'Academic Coordinator',
  },
];
