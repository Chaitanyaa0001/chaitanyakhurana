interface Data {
    email: string,
    linkedin: string,
    resume: string
    github: string,
    leetcode: string,
    CGPA: number
}

export interface Projects {
    image?: string,
    caption?: string,
    name?: string,
    link?: string,
    github?: string,
    description?: string,
    features?: string[],
    technologies?: string[],
}

export const myData: Data = {
    email: 'chaitanyakhurana.workk@gmail.com',
    linkedin: 'chaitanya-khurana-077b702a0',
    resume: 'https://drive.google.com/file/d/1x1A7fY5Bhgo98GRlyqSaXaSUp74cREhg/view?usp=drive_link',
    github: 'Chaitanyaa0001',
    leetcode: 'chaitanyaa001',  
    CGPA: 8.74
}

export const projects: Projects[] = [
     {
        image: 'UptimeIQ.png',
        caption: 'An AI-powered platform to monitor API reliability, latency, and system performance.',
        name: 'UptimeIQ',
        link: 'https://uptime-iq-eight.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/UptimeIQ',
        description:
            'UptimeIQ is an AI-powered API monitoring and analytics platform that tracks uptime, latency, and service reliability. It uses Gemini Flash 2.5 for intelligent anomaly detection and log analysis, helping developers debug faster and maintain stable systems.',
        features: [
            'Role Based Access Control and 2Factor Authentication i.e User and Admin ',
            'AI-powered anomaly detection using Google Gemini Flash 2.5.',
            'Real-time uptime, latency, and performance scoring.',
            'Secure authentication with OTP login, JWT Access and Refresh  tokens.',
            '40% faster API responses using Redis caching, MongoDB indexing, and OTP rate limiting.',
            'Optimized frontend using lazy loading and TanStack Query.'
        ],
        technologies: [
            'React.js',
            'Node.js',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'Redis',
            'Cloudinary',
            'Brevo',
            'Redux'
        ]
    },
      {
        image: 'MediMate.png',
        caption: 'AI-driven telemedicine platform for digital health assistance and appointments.',
        name: 'MediMate',
        link: 'https://medi-mate-delta.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/MediMate',
        description:
            'MediMate is an AI-powered telemedicine platform enabling secure doctor–patient appointments, AI medical assistance, and real-time health monitoring using Google Fit API.',
        features: [
            'Role Based Authentication enabling for Doctor and Patient ',
            'AI-driven medical assistance using Gemini Flash 2.5.',
            'Google Fit integration for heart rate, oxygen, and blood pressure data.',
            '20+ REST APIs with MVC architecture.',
            'Secure authentication via JWT, Google OAuth 2.0, and bcrypt hashing.',
            'Faster UI using Redux Toolkit and dynamic imports (12% reduced bundle size).'
        ],
        technologies: ['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','Google','Cloudinary','Redux']
    },
    {
        image: 'campusConnect.png',
        caption: 'A student-driven platform for communication, collaboration, and campus utilities.',
        name: 'CampusConnect',
        link: 'https://campus-connect-ten-psi.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/CampusConnect',
        description:
            'CampusConnect is a MERN-based social networking platform helping students with real-time chat, collaborations, carpooling, and lost & found.',
        features: [
            'Real-time chat & private DMs powered by Socket.IO.',
            'State Managment via Redux-Toolkit and Redux Persist',
            'JWT + Google OAuth-based secure authentication.',
            'Carpool and project collaboration features.',
            'Lost & Found system improving recovery by 80%.',
            'Optimized performance using Redux Toolkit & dynamic imports.'
        ],
        technologies: ['React.js','Node.js','Express.js','MongoDB','Redux','Socket.IO','Cloudinary']
    },
        {
        image: 'CartZen.png',
        caption: 'A Python NLP chatbot built with Flask and React.',
        name: 'CartZen Bot',
        link: 'https://cartzen-ai-chatbot.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/CartZen-Bot',
        description:
            'CartZen Bot is an NLP-powered chatbot built with Python & Flask. It responds to user queries using a predefined knowledge base and features a React frontend with secure authentication.',
        features: [
            'NLP-based intelligent response system with predefined dataset.',
            'Lightweight Python Flask backend for real-time chat.',
            'JWT-secured authentication for protected routes.',
            'Clean and responsive React UI for chatbot interactions.',
            'Extendable modular architecture for adding more training data.'
        ],
        technologies: ['Python','Flask','React.js','JWT',]
    },
    // {
    //     image: 'portfolio.png',
    //     caption: 'A sleek full stack developer portfolio to showcase skills, projects, and coding profiles.',
    //     name: 'Personal Portfolio',
    //     link: 'https://geeteshdalal.vercel.app/',
    //     github: 'https://github.com/Geeteshgit/geeteshportfolio',
    //     description: 'A fully responsive web developer portfolio designed to highlight personal projects, technical stack, and online presence across coding platforms. It features project cards with visuals, direct links to GitHub, LinkedIn, and LeetCode, and a downloadable resume—built for professional presentation and easy sharing.',
    //     features: [
    //         'Built with Next.js and TypeScript for fast performance.'
    //         , 
    //         'Styled using Tailwind CSS for full responsiveness across devices.'
    //         ,
    //         'Enhanced with smooth animations using Framer Motion.'
    //     ],
    //     technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    // },
    {
        image: 'Windy.png',
        caption: 'A clean and responsive weather app that provides real-time forecasts using the AccuWeather API.',
        name: 'Windy',
        link: 'https://windy-ecru.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/Windy-', 
        description: 'Windy is a simple and user-friendly weather application that allows users to search and view current weather conditions and forecasts for cities around the world. It leverages the AccuWeather API to deliver weather updates with a sleek, responsive design built using HTML, CSS, and JavaScript.',
        features: [
            'Real-time weather data and forecasts powered by AccuWeather API.',
            'Search any city to view current temperature, weather condition, and forecast.',
            'Responsive layout optimized for both mobile and desktop viewing.',
            'Dynamically updates the UI using JavaScript and API responses.'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: 'bust-that-bubble-game.png',
        caption: 'A fun and fast-paced browser game that tests your reflexes and accuracy under time pressure.',
        name: 'Bust That Bubble Game',
        link: 'https://bust-bubble-game.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/bust-bubble-game-',
        description: 'Bust That Bubble is a web-based reflex game where players must click the correct numbered bubble within a 60-second countdown. The game dynamically generates numbered bubbles, tracks user interactions, and updates scores in real time for improving DOM manipulation skills and mastering basic game logic.',
        features: [
            'Timed gameplay with a 60-second countdown for urgency.',
            'Interactive bubble system with changing targets and randomized numbers.',
            'Score increases for correct selections and decreases for wrong clicks.',
            'Fully responsive design playable on both desktop and mobile devices.'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: 'shopSphere.png',
        caption: 'E-Commerce frontend-only practice project with Search functionality.',
        name: 'DripShop',
        link: 'https://first-e-commerce-project-shopsphere.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/first-e-commerce-project-shopsphere-', 
        description: 'ShopSphere is a beginner-friendly e-commerce frontend-only practice project built using HTML, CSS, and JavaScript.',
        features: [
            'Pure frontend project built with HTML, CSS, and vanilla JavaScript.',
            'Includes a Search and filtering  system with help of JavaScript',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
]

export const featuredProjects: Projects[] = [
     {
        image: 'UptimeIQ.png',
        caption: 'An AI-powered platform to monitor API reliability, latency, and system performance.',
        name: 'UptimeIQ',
        link: 'https://uptime-iq-eight.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/UptimeIQ',
        description:
            'UptimeIQ is an AI-powered API monitoring and analytics platform that tracks uptime, latency, and service reliability. It uses Gemini Flash 2.5 for intelligent anomaly detection and log analysis, helping developers debug faster and maintain stable systems.',
        features: [
            'Role Based Access Control and 2Factor Authentication i.e User and Admin ',
            'AI-powered anomaly detection using Google Gemini Flash 2.5.',
            'Real-time uptime, latency, and performance scoring.',
            'Secure authentication with OTP login, JWT Access and Refresh  tokens.',
            '40% faster API responses using Redis caching, MongoDB indexing, and OTP rate limiting.',
            'Optimized frontend using lazy loading and TanStack Query.'
        ],
        technologies: [
            'React.js',
            'Node.js',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'Redis',
            'Cloudinary',
            'Brevo',
            'Redux'
        ]
    },
      {
        image: 'MediMate.png',
        caption: 'AI-driven telemedicine platform for digital health assistance and appointments.',
        name: 'MediMate',
        link: 'https://medi-mate-delta.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/MediMate',
        description:
            'MediMate is an AI-powered telemedicine platform enabling secure doctor–patient appointments, AI medical assistance, and real-time health monitoring using Google Fit API.',
        features: [
            'Role Based Authentication enabling for Doctor and Patient ',
            'AI-driven medical assistance using Gemini Flash 2.5.',
            'Google Fit integration for heart rate, oxygen, and blood pressure data.',
            '20+ REST APIs with MVC architecture.',
            'Secure authentication via JWT, Google OAuth 2.0, and bcrypt hashing.',
            'Faster UI using Redux Toolkit and dynamic imports (12% reduced bundle size).'
        ],
        technologies: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'Google',
            'Cloudinary',
            'Redux'
        ]
    },
    {
        image: 'campusConnect.png',
        caption: 'A student-driven platform for communication, collaboration, and campus utilities.',
        name: 'CampusConnect',
        link: 'https://campus-connect-ten-psi.vercel.app/',
        github: 'https://github.com/Chaitanyaa0001/CampusConnect',
        description:
            'CampusConnect is a MERN-based social networking platform helping students with real-time chat, collaborations, carpooling, and lost & found.',
        features: [
            'Real-time chat & private DMs powered by Socket.IO.',
            'State Managment via Redux-Toolkit and Redux Persist',
            'JWT + Google OAuth-based secure authentication.',
            'Carpool and project collaboration features.',
            'Lost & Found system improving recovery by 80%.',
            'Optimized performance using Redux Toolkit & dynamic imports.'
        ],
        technologies: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Redux',
            'Socket.IO',
            'Cloudinary'
        ]
    }
];