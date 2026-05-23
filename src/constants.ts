import { Project, NavItem, Skill } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Swarna Savor - Restaurant Management System (Advanced MERN)',
    desc: 'A full-featured MERN application with role-based access, table booking using React Leaflet, and Stripe payment integration.',
    features: ['Role-based Auth', 'Table Booking', 'Stripe Payments', 'Admin Analytics'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Recharts'],
    repo: 'https://github.com/RamParmar1/swarna-savor',
    demo: 'https://swarna-savor.vercel.app/',
  },
  {
    id: 2,
    title: 'SPYCE - Restaurant Management System (UI-Focused)',
    desc: 'A responsive MERN platform focused on modern UI/UX, featuring cart management, order tracking, and a smooth booking system.',
    features: ['Modern UI/UX', 'Cart & Orders', 'Booking System', 'Admin Panel'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/RamParmar1',
    demo: 'https://spyce-restaurant-frontend.vercel.app/',
  },
  {
    id: 3,
    title: 'Vision - Optical E-Commerce System (PHP + MySQL)',
    desc: 'An e-commerce platform for AI glasses and sunglasses with a comprehensive admin dashboard for managing products and analytics.',
    features: ['E-Commerce Flow', 'Product Filtering', 'Admin Dashboard', 'User Profiles'],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/RamParmar1',
    demo: 'https://vision.infinityfreeapp.com/login.php',
  },
  {
    id: 4,
    title: 'Python Mini Projects',
    desc: 'Collection: Tkinter GUI apps, FastAPI backends, automation scripts',
    features: ['GUI Apps', 'REST APIs', 'Automation', 'Chatbot agent'],
    tech: ['Python', 'FastAPI', 'Tkinter', 'OpenAI'],
    repo: 'https://github.com/RamParmar1/python/mini-project/'
  },
  {
    id: 5,
    title: 'Journey Junction - Travel Management System (PHP + MySQL)',
    desc: 'A full-stack travel booking system with secure authentication, tour browsing, and a dynamic admin management dashboard.',
    features: ['Secure Auth', 'Booking Workflow', 'Inquiry Support', 'Admin Dashboard'],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/RamParmar1/journey-junction-PHP',
    demo: 'https://journeyjunction.kesug.com/'
  },
  {
    id: 6,
    title: 'Journey Junction - Travel Management System (MERN)',
    desc: 'A travel booking platform featuring JWT authentication, protected routes, and admin-controlled dynamic tour packages.',
    features: ['MERN Stack', 'JWT Auth', 'Protected Routes', 'Admin Controls'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/RamParmar1/journey-junction-MERN',
    demo: 'https://journey-junction-tau.vercel.app/',
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'Java', iconClass: 'devicon-java-plain colored' },
  { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
  { name: 'C', iconClass: 'devicon-c-plain colored' },
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
  { name: 'Express', iconClass: 'devicon-express-original dark:text-white' },
  { name: 'Django', iconClass: 'devicon-django-plain colored' },
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'PHP', iconClass: 'devicon-php-plain colored' },
  { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'SQLite', iconClass: 'devicon-sqlite-plain colored' },
];

export const EMAIL = 'ramparmar.dev@gmail.com';
export const GITHUB_URL = 'https://github.com/RamParmar1';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ram-parmar-7b3664398';
export const LEETCODE_URL = 'https://leetcode.com/u/RamParmar/';
export const RESUME_PATH = '/resume/ram-parmar.pdf';
