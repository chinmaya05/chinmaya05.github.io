// All the content of the portfolio lives here. Edit this file to update the site.

export const PROFILE = {
  first: 'CHINMAYA',
  last: 'SAHU',
  badge: 'Full Stack Developer • Enterprise IoT & Smart City',
  // These roles are typed out, deleted and replaced one after another in the hero.
  roles: [
    'Associate Software Engineer',
    'Java Developer',
    'Spring Boot Developer',
    'Angular Developer',
    'Full Stack Developer',
    'Backend Engineer',
  ],
  intro:
    '10+ months of experience developing enterprise applications with Java, Spring Boot, Angular, and SQL Server. Specializing in high-throughput data processing, Kafka streams, and real-time dashboard interfaces.',
  email: 'schinmaya005@gmail.com',
  phone: '9337067504',
  linkedin: 'https://www.linkedin.com/in/chinmaya005',
  github: 'https://github.com/chinmaya05', // add your GitHub profile URL here, e.g. 'https://github.com/yourname'
  location: 'Bengaluru, India',
  // Put your picture at public/images/profile.jpg (see README).
  photo: 'images/profile.jpg',
  resume: 'Chinmaya_Software_Engineering.pdf',
};

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT = {
  paragraphs: [
    'A Full Stack Developer with 10+ months of experience developing and supporting enterprise applications using Java, Spring Boot, Angular and Microsoft SQL Server.',
    'I have hands-on experience in Emergency Management, Disaster Management, Smart Energy and IoT-based applications: building REST APIs, backend services, Angular components, SQL queries and stored procedures, third-party integrations and real-time communication over WebSocket.',
  ],
  domains: [
    { title: 'Emergency Management', text: 'Incident handling from creation to closure.' },
    { title: 'Disaster Management', text: 'Weather and forecast data integrations.' },
    { title: 'Smart Energy & IoT', text: 'Device events and real-time processing.' },
    { title: 'Smart City', text: 'Command-and-control dashboards at scale.' },
  ],
  stats: [
    { value: '10+', label: 'Months of experience' },
    { value: '3', label: 'Enterprise projects' },
    { value: '15+', label: 'Technologies used' },
    { value: '100%', label: 'Weather data accuracy' },
  ],
};

export const EXPERIENCE = [
  {
    role: 'Associate Software Engineer (Full Stack)',
    company: 'TRINITY MOBILITY',
    place: 'Bangalore, India',
    period: 'Nov 2025 – Present',
    points: [
      'Develop and maintain enterprise applications using Java, Spring Boot, Angular and SQL Server.',
      'Build REST APIs and backend services for IoTOps, disaster management and smart-city applications.',
      'Implement business logic, validations, exception handling and database operations.',
      'Write and optimize SQL queries and stored procedures for application workflows.',
      'Integrate third-party APIs and external services with backend applications.',
      'Work on IoT/device integrations and real-time data processing.',
      'Analyze logs and troubleshoot frontend, backend, database and integration issues.',
      'Take part in development, testing, deployment and production support.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'Kafka', 'Redis'],
  },
];

export interface Project {
  no: string;
  title: string;
  subtitle: string;
  domain: string;
  tech: string[];
  points: string[];
}

export const PROJECTS: Project[] = [
  {
    no: '01',
    title: 'TrinityEngageCEP',
    subtitle: 'Citizen Engagement Portal',
    domain: 'Citizen Engagement',
    tech: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'REST APIs', 'Microservices'],
    points: [
      'International citizen engagement platform, deployed and live in Cairo. Citizens raise requests through the portal, the workforce mobile app and third-party apps via the CEP endpoint.',
      'Incident validation logic that checks whether an incoming request is a genuine incident before processing.',
      'Routing of validated incidents to the right department and microservice.',
      'Complete incident lifecycle from creation to closure, with status tracking and a timeline of every status change.',
    ],
  },
  {
    no: '02',
    title: 'trinityICCC',
    subtitle: 'Integrated Control and Command Center',
    domain: 'Smart City',
    tech: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'Kafka', 'NiFi', 'Redis'],
    points: [
      'Enterprise web application that aggregates and monitors real-time smart city and infrastructure data.',
      'REST APIs for application workflows, data visualization and external system integrations.',
      'SQL Server queries and stored procedures with Spring Data JPA for complex relational data modeling.',
      'Real-time event and alarm management on an event-driven architecture using WebSockets, Apache Kafka and Redis for low-latency alerts and asset updates.',
      'CoCListener service that consumes processed device events from message queues and persists them to SQL Server.',
    ],
  },
  {
    no: '03',
    title: 'KaWaCHaM',
    subtitle: 'Kerala Warnings, Crisis & Hazard Management System',
    domain: 'Disaster Management',
    tech: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'Spring Security', 'JWT'],
    points: [
      'Built and deployed weather and forecast integrations (Fyllo Actual Weather Data, Experiq Forecast and CWC-related APIs). Live in production and matching the providers\' source data with 100% accuracy.',
      'Backend services and REST APIs in Java and Spring Boot for application workflows and external integrations.',
      'SQL Server queries and stored procedures for disaster-related data processing.',
      'Application security with Spring Security and JWT.',
    ],
  },
];

export const SKILL_GROUPS = [
  { title: 'Languages', icon: '{ }', items: ['Java', 'SQL', 'JavaScript', 'TypeScript'] },
  {
    title: 'Backend',
    icon: '⚙',
    items: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'Microservices', 'REST APIs'],
  },
  { title: 'Frontend', icon: '◧', items: ['Angular', 'HTML5', 'CSS'] },
  {
    title: 'Database',
    icon: '▤',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'Stored Procedures', 'SQL Query Optimization'],
  },
  {
    title: 'Real-Time & Integration',
    icon: '⚡',
    items: ['WebSocket', 'Apache Kafka', 'Apache NiFi', 'Redis', 'REST API Integration'],
  },
  { title: 'Tools', icon: '✦', items: ['Git', 'GitHub', 'Maven', 'Postman', 'JIRA', 'VS Code', 'Eclipse'] },
];

export const MARQUEE = [
  'Java', 'Spring Boot', 'Angular', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Kafka', 'NiFi',
  'Redis', 'WebSocket', 'REST APIs', 'Microservices', 'JWT', 'Git', 'Maven', 'Postman', 'JIRA',
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Radhakrishna Institute Of Technology And Engineering, Bhubaneswar',
    period: 'Nov 2021 – May 2025',
    score: 'CGPA 8.1',
  },
  {
    degree: 'Higher Secondary (XII)',
    school: 'Itamati College Of Education And Technology',
    period: 'Mar 2020 – Jul 2021',
    score: '74.4%',
  },
  {
    degree: 'Secondary Education (Class X)',
    school: 'Gadadhar Banchhanidhi Govt. High School',
    period: 'Mar 2018 – May 2019',
    score: '74.4%',
  },
];
