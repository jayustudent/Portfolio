import { 
  ProjectType, 
  SkillType, 
  ExperienceType, 
  CertificationType, 
  AchievementType, 
  EducationType 
} from './types';

export const PERSONAL_INFO = {
  name: 'Jaya Pandey',
  title: 'Future Software Developer | AI Enthusiast | Community Leader',
  bio: 'I am a Computer Science Engineering student passionate about software development, artificial intelligence, machine learning, and building impactful digital solutions. I enjoy solving real-world problems through technology while continuously learning and growing as a developer and leader.',
  extendedBio: 'I am a highly motivated Computer Science student with strong foundations in Python, C, and C++. I am passionate about Artificial Intelligence, Machine Learning, Web Development, and Software Engineering. Beyond coding, I actively contribute to student communities and leadership initiatives. Through my role at Nexus Tech Community, I help organize technical events, engage students, and promote collaborative learning. My goal is to become a skilled Software Engineer and AI Developer capable of creating innovative solutions that positively impact society.',
  email: 'jayupandey749@gmail.com',
  location: 'Lucknow, Uttar Pradesh, India',
  college: 'Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)',
  degree: 'Bachelor of Technology in Computer Science Engineering',
  cgpa: '8.71',
  gradYear: '2027',
  github: 'https://github.com/jayustudent',
  linkedin: 'https://www.linkedin.com/in/jaya-pandey-439204311',
};

export const PROJECTS_DATA: ProjectType[] = [
  {
    id: 'ai-health',
    title: 'AI Public Health Guide',
    description: 'Advanced AI-powered healthcare assistant designed to increase awareness about diseases, provide symptom guidance, and improve access to health-related information.',
    technologies: ['AI Chatbot', 'NLP', 'Twilio API', 'PostgreSQL', 'Google Cloud'],
    features: [
      'Symptom checker based on medical NLP algorithms',
      'Automated health awareness assistant notifications via SMS integration',
      'Conversational AI dialogue safety guards'
    ],
    githubUrl: 'https://github.com/jayustudent/ai-public-health-guide',
    liveUrl: '#',
    type: 'AI/Healthcare'
  },
  {
    id: 'uni-web',
    title: 'University Management System',
    description: 'Developed a dynamic university website for managing academics, departments, and student information efficiently.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Engine', 'Vanilla JS'],
    features: [
      'Adaptive glassmorphism user interface',
      'Interactive student profile and records panel',
      'Dynamic academic curriculum schedule planner'
    ],
    githubUrl: 'https://github.com/jayustudent/university-website',
    liveUrl: '#',
    type: 'Web'
  },
  {
    id: 'ml-predictive',
    title: 'Machine Learning Analytics',
    description: 'A mathematical modeling solution focusing on training clustering classifiers to automate dataset segmentation.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Jupyter Notebook'],
    features: [
      'Automated outlier filtration script',
      'High contrast distribution scatter plots generated with Matplotlib',
      'Hyperparameter tuning using GridSearchCV'
    ],
    type: 'Coming Soon'
  },
  {
    id: 'ai-assistant',
    title: 'Cognitive Smart Agent',
    description: 'Autonomous execution workflow system responding to task listings using natural language processing commands.',
    technologies: ['Python', 'Gemini API', 'LangChain', 'SQLite'],
    features: [
      'Multi-turn context tracking',
      'Dynamic command parsing engine',
      'Low lag vector embeddings classification'
    ],
    type: 'Coming Soon'
  },
  {
    id: 'portfolio-gen',
    title: 'Stellar Portfolio Generator',
    description: 'A customizable drag-and-drop landing platform designed to build resume structures for college students.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    features: [
      'Real-time design layout previewer',
      'Automated resume format exporter',
      'Responsive design guidelines validation'
    ],
    type: 'Coming Soon'
  },
  {
    id: 'fullstack-agile',
    title: 'Collaborative Agile Console',
    description: 'Full-stack collaborative portal mapping active assignments with secure role permissions.',
    technologies: ['Django', 'Python', 'React', 'MySQL', 'JWT Auth'],
    features: [
      'Encrypted tokens for administrative layers',
      'Interactive boards with real-time state sync',
      'Full database schema migrations'
    ],
    type: 'Coming Soon'
  }
];

export const SKILLS_DATA: SkillType[] = [
  // Languages
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'C++', level: 85, category: 'languages' },
  { name: 'C', level: 80, category: 'languages' },
  { name: 'JavaScript', level: 75, category: 'languages' },
  { name: 'SQL', level: 80, category: 'languages' },
  
  // Web
  { name: 'HTML5', level: 90, category: 'web' },
  { name: 'CSS3 / Tailwind', level: 85, category: 'web' },
  { name: 'JavaScript ES6+', level: 75, category: 'web' },
  
  // Frameworks & Tools
  { name: 'Django', level: 70, category: 'tools' },
  { name: 'Git & GitHub', level: 85, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'Jupyter Notebook', level: 80, category: 'tools' },
  { name: 'Tableau', level: 65, category: 'tools' },
  { name: 'Excel / Sheets', level: 80, category: 'tools' },
  
  // Databases
  { name: 'MySQL', level: 80, category: 'databases' },
  
  // Soft Skills
  { name: 'Technical Leadership', level: 95, category: 'soft' },
  { name: 'Communication & Outreach', level: 90, category: 'soft' },
  { name: 'Teamwork & Coordination', level: 85, category: 'soft' },
  { name: 'Public Speaking', level: 80, category: 'soft' },
  { name: 'Complex Problem Solving', level: 85, category: 'soft' },
  { name: 'Project Management', level: 75, category: 'soft' },
];

export const EXPERIENCE_DATA: ExperienceType[] = [
  {
    role: 'Social Media Head',
    organization: 'Nexus Tech Community – SRMCEM',
    period: '2024 - Present',
    location: 'Lucknow, Uttar Pradesh',
    responsibilities: [
      'Managed digital community engagement and designed informative technical carousel infographics',
      'Coordinated core logistics for university-wide technical events, and panels on AI/ML applications',
      'Formulated high-impact social media coverage strategy, resulting in a measurable increase in student outreach',
      'Guided peer-led collaborative learning initiatives by hosting small-group technology study rooms'
    ]
  },
  {
    role: 'Python Full Stack Developer Intern',
    organization: 'SRDT Pvt. Ltd.',
    period: 'Summer 2024',
    location: 'Lucknow, Uttar Pradesh',
    responsibilities: [
      'Participated in Python Full Stack Summer Training program designing scalable backend components',
      'Learned production-ready web development workflows and database schema configurations',
      'Built practical implementation projects integrating HTML/CSS and Django backend routes'
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationType[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Forage - BCG & KPMG Partnerships',
    date: '2024',
    badge: 'BCG/KPMG Alumni',
    verifyUrl: 'https://theforage.com/'
  },
  {
    title: 'Gen AI Study Jam Specialist',
    issuer: 'Google Developer Groups (GDG)',
    date: '2024',
    badge: 'Google AI Cloud Expert',
    verifyUrl: 'https://developers.google.com/community/gdg'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia Partnership',
    date: '2024',
    badge: 'Deloitte Certified Student',
    verifyUrl: 'https://theforage.com/'
  }
];

export const ACHIEVEMENTS_DATA: AchievementType[] = [
  {
    stat: 'Smart India',
    title: 'Smart India Hackathon',
    description: 'Active National Participant working on solving designated Ministry statements.',
    metric: 1
  },
  {
    stat: 'GenAI Hack',
    title: 'GenAI Innovation Hackathon',
    description: 'Competed with custom AI model prototypes addressing health and accessibility domains.',
    metric: 1
  },
  {
    stat: 'Leader',
    title: 'Nexus Leadership Experience',
    description: 'Led a tech social outreach division, directing student group structures.',
    metric: 4 // chapters/campaigns
  },
  {
    stat: 'Volunteer',
    title: 'Volunteer & Event Lead',
    description: 'Coordinated 5+ academic coding competitions and panel assemblies.',
    metric: 5
  },
  {
    stat: 'Accreditations',
    title: 'Technical Certifications',
    description: 'Earned specialized credentials across data analysis and artificial intelligence fields.',
    metric: 12
  }
];

export const EDUCATION_DATA: EducationType[] = [
  {
    period: '2023 - 2027 (Expected)',
    degree: 'Bachelor of Technology (B.Tech)',
    major: 'Computer Science & Engineering',
    institution: 'Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)',
    score: 'CGPA: 8.71 / 10.0'
  },
  {
    period: '2023',
    degree: 'Class 12 Intermediate (CBSE)',
    institution: 'Rani Laxmi Bai Memorial School, Lucknow',
    score: 'Aggregate: 90.0%'
  },
  {
    period: '2021',
    degree: 'Class 10 Matriculation (CBSE)',
    institution: 'Rani Laxmi Bai Memorial School, Lucknow',
    score: 'Aggregate: 94.0%'
  }
];
