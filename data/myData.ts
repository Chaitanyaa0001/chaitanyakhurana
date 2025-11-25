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
    email: 'geeteshdalal.work@gmail.com',
    linkedin: 'geeteshdalal',
    resume: 'https://drive.google.com/file/d/1y-7ZK_SeygvUpaZXBzxTNVAvPh8-cq1K/view?usp=sharing',
    github: 'Geeteshgit',
    leetcode: 'Geetesh_Dalal',  
    CGPA: 9.04
}

export const projects: Projects[] = [
    {
        image: 'genpalette.png',
        caption: 'An AI-powered tool to generate, preview, explore, and save cohesive color palettes with real-time visuals.',
        name: 'GenPalette',
        link: 'https://genpalette-virid.vercel.app/',
        github: 'https://github.com/Geeteshgit/genpalette',
        description: 'GenPalette is an AI-powered color palette generation and visualization tool built for developers and designers. It enables users to effortlessly create, preview, explore and save cohesive color themes using Gemini AI.',
        features: [
            'AI-powered tool to generate cohesive and random color palettes using Gemini API.',
            'Live preview and explore section with AI-generated palettes.',
            'User dashboard to save and manage favorite palettes and colors.',
            'Dynamic imports and custom React hooks for optimized performance and clean code.',
            'Secure authentication with Auth.js and smooth UI animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'Framer Motion']
    },
    {
        image: 'readmeeasy.png',
        caption: 'Instantly generate professional README.md files with AI.',
        name: 'ReadmeEasy',
        link: 'https://readmeeasy.vercel.app/',
        github: 'https://github.com/Geeteshgit/readme-easy',
        description: 'ReadmeEasy is an AI-powered tool that helps developers create clean, structured, and professional README.md files by simply entering their project details. It uses Gemini AI to intelligently generate missing content and follows best open-source documentation practices.',
        features: [
            'AI-generated README.md files with intelligent content filling.',
            'Supports all major README sections like features, usage, tech stack, screenshots, license, etc.',
            'GitHub-style markdown preview',
            'Live markdown editor powered by Monaco Editor.',
            'Form-based project input with real-time preview.',
            'Responsive and accessible design.',
            'Download generated README as a .md file.',
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
    },
    {
        image: 'campushive.png',
        caption: 'A student-driven platform solving daily campus challenges through seamless communication and collaboration.',
        name: 'CampusHive',
        link: 'https://campushive-snowy.vercel.app/',
        github: 'https://github.com/Geeteshgit/CampusHive',
        description: 'CampusHive is a platform aimed at solving common campus challenges, enhancing communication, and connecting students for various needs like collaboration, carpooling, and social interactions.',
        features: [
            'Real-time public chat and private DMs using Socket.IO.'
            , 
            'Secure login with JWT and Google OAuth.'
            ,
            'Carpool posts to reduce travel costs.'
            ,
            'Lost & Found with searchable listings.'
            ,
            'Project posts to connect for collaborations.'
            ,
            'Peer-to-peer car rental listings.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Socket.IO']
    },
    {
        image: 'codev.png',
        caption: 'A powerful platform for developers to showcase their coding profiles, projects, and skills.',
        name: 'Codev',
        link: 'https://codev-ten.vercel.app/',
        github: 'https://github.com/Geeteshgit/Codev',
        description: 'Codev is a developer portfolio and discovery platform where users showcase their skills, projects, and coding profiles (like GitHub, LeetCode, etc.). It features personalized profiles and project highlights to help developers stand out and get discovered.',
        features: [
            'Personalized portfolios to showcase coding profiles like LeetCode, Codeforces, GitHub, and more.',
            'Project section with descriptions, live links, and technologies used.',
            'Explore and discover developers or get discovered by recruiters based on skills.',
            'JWT-based authentication for secure login and session management.',
            'Image uploads handled via Cloudinary.',
            'State management using Redux for smooth user experience.'
        ],
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'Framer Motion']
    },
    {
        image: 'portfolio.png',
        caption: 'A sleek full stack developer portfolio to showcase skills, projects, and coding profiles.',
        name: 'Personal Portfolio',
        link: 'https://geeteshdalal.vercel.app/',
        github: 'https://github.com/Geeteshgit/geeteshportfolio',
        description: 'A fully responsive web developer portfolio designed to highlight personal projects, technical stack, and online presence across coding platforms. It features project cards with visuals, direct links to GitHub, LinkedIn, and LeetCode, and a downloadable resume—built for professional presentation and easy sharing.',
        features: [
            'Built with Next.js and TypeScript for fast performance.'
            , 
            'Styled using Tailwind CSS for full responsiveness across devices.'
            ,
            'Enhanced with smooth animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        image: 'weather-wiz.png',
        caption: 'A clean and responsive weather app that provides real-time forecasts using the AccuWeather API.',
        name: 'Weather Wiz',
        link: 'https://weather-wiz-ruby.vercel.app/',
        github: 'https://github.com/Geeteshgit/weather-wiz', 
        description: 'Weather Wiz is a simple and user-friendly weather application that allows users to search and view current weather conditions and forecasts for cities around the world. It leverages the AccuWeather API to deliver weather updates with a sleek, responsive design built using HTML, CSS, and JavaScript.',
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
        link: 'https://bust-that-bubble-game.vercel.app/',
        github: 'https://github.com/Geeteshgit/Bust-That-Bubble-Game',
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
        image: 'dripshop.png',
        caption: 'E-Commerce frontend-only practice project with cart functionality.',
        name: 'DripShop',
        link: 'https://dripshop-project.vercel.app/',
        github: 'https://github.com/Geeteshgit/Dripshop-project', 
        description: 'DripShop is a beginner-friendly e-commerce frontend-only practice project built using HTML, CSS, and JavaScript. It allows users to browse products, add them to a cart, and perform basic CRUD operations such as updating quantities or removing items in addition to being fully responsive.',
        features: [
            'Pure frontend project built with HTML, CSS, and vanilla JavaScript.',
            'Includes a functional cart system with Create, Read, Update, Delete operations.',
            'Products dynamically rendered with local storage support for persistent cart data.'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
]

export const featuredProjects: Projects[] = [
    {
        image: 'genpalette.png',
        caption: 'An AI-powered tool to generate, preview, explore, and save cohesive color palettes with real-time visuals.',
        name: 'GenPalette',
        link: 'https://genpalette-virid.vercel.app/',
        github: 'https://github.com/Geeteshgit/genpalette',
        description: 'GenPalette is an AI-powered color palette generation and visualization tool built for developers and designers. It enables users to effortlessly create, preview, explore and save cohesive color themes using Gemini AI.',
        features: [
            'AI-powered tool to generate cohesive and random color palettes using Gemini API.',
            'Live preview and explore section with AI-generated palettes.',
            'User dashboard to save and manage favorite palettes and colors.',
            'Dynamic imports and custom React hooks for optimized performance and clean code.',
            'Secure authentication with Auth.js and smooth UI animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'Framer Motion']
    },
    {
        image: 'readmeeasy.png',
        caption: 'Instantly generate professional README.md files with AI.',
        name: 'ReadmeEasy',
        link: 'https://readmeeasy.vercel.app/',
        github: 'https://github.com/Geeteshgit/readme-easy',
        description: 'ReadmeEasy is an AI-powered tool that helps developers create clean, structured, and professional README.md files by simply entering their project details. It uses Gemini AI to intelligently generate missing content and follows best open-source documentation practices.',
        features: [
            'AI-generated README.md files with intelligent content filling.',
            'Supports all major README sections like features, usage, tech stack, screenshots, license, etc.',
            'GitHub-style markdown preview',
            'Live markdown editor powered by Monaco Editor.',
            'Form-based project input with real-time preview.',
            'Responsive and accessible design.',
            'Download generated README as a .md file.',
        ],
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
    },
    {
        image: 'campushive.png',
        caption: 'A student-driven platform solving daily campus challenges through seamless communication and collaboration.',
        name: 'CampusHive',
        link: 'https://campushive-snowy.vercel.app/',
        github: 'https://github.com/Geeteshgit/CampusHive',
        description: 'CampusHive is a platform aimed at solving common campus challenges, enhancing communication, and connecting students for various needs like collaboration, carpooling, and social interactions.',
        features: [
            'Real-time public chat and private DMs using Socket.IO.'
            , 
            'Secure login with JWT and Google OAuth.'
            ,
            'Carpool posts to reduce travel costs.'
            ,
            'Lost & Found with searchable listings.'
            ,
            'Project posts to connect for collaborations.'
            ,
            'Peer-to-peer car rental listings.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Socket.IO']
    },
];