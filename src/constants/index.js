import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  c,
  python,
  pandas,
  tf,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "tensorflow",
    icon: tf,
  },
];

const experiences = [
  {
    title: "Computer science student",
    company_name: "University of Science and Technology Houari Boumediene",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85_%D9%88%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7_%D9%87%D9%88%D8%A7%D8%B1%D9%8A_%D8%A8%D9%88%D9%85%D8%AF%D9%8A%D9%86.png",
    iconBg: "#383E56",
    date: "December 2020",
    points: [
      "Acquired a solid foundation in computer science, including knowledge of computers, algorithms, and problem-solving, throughout the three years of my studies.",
      "have successfully completed my graduation project (June 2023) on text-to-image generative models.",
    ],
  },
  {
    title: "Micro Club Member",
    company_name: "Micro Club USTHB",
    icon: "data:image/png;base64,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",
    iconBg: "#E6DEDD",
    date: "December 2021",
    points: [
      "Member of IT, robotics and game dev sections",
      "Member of the Communication Department and Event Organizer",
      "Organisation serverals trainings in : Web Dev, Java, Python, Algorihms & Data Structures",
      "Contributed in devloppement of many projects such as : Qr Projects, MC Voting Website, AGC Three.js Website",
      "Organisation of Big Events such : Digital African Summit, NASA Space Apps Challenge, AGC Hackathon, Eductech fair",
      "Participated the first edition of MC Hackathon : Micro Hack",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: "https://www.keplearning.com/wp-content/uploads/2021/03/web-dev.jpg",
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using the MERN Stack (MongoDB, Express, React, Node.js) and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "JavaScript Instructor",
    company_name: "Horizon School",
    icon: "https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/305385235_483167487152121_1550750969817373707_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGuowMqFYETYD9cNwb9NA991rlMSQAmu9fWuUxJACa71xoubYJClpcKLtN4w0mnfRbDJfkzNAz-w4eZ2H0h7qPh&_nc_ohc=r8mcR3Ey62sAX-hSDH7&_nc_ht=scontent.falg6-2.fna&oh=00_AfDWDANIg5nZpSaQAKhIfGk52J1kU4f_olMAblFXeX93eQ&oe=64902EFA",
    iconBg: "#E6DEDD",
    date: "Mai 2023 - Juin 2023",
    points: [
      'Teaching JavaScript to students of the "Web Development" course.',
      'Teaching the basics of "Data Structures and Algorithms" using JavaScript.',
      "Helping students with their projects and assignments.",
      "Evaluating the performance and progress of students.",
      "Share knowledge and motivating students to learn and build projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = {
  web: [
    {
      image:
        "https://cdn.discordapp.com/attachments/804151950227537980/1118673173823639562/image.png",
      name: "SmartWeb",
      description:
        "SmartWeb is a collection of AI-powered tools designed to simplify various tasks including image content detection, face detection, sentiment analysis, language detection, BMI calculation, and text-to-speech conversion.",
      source_code_link: "https://github.com/ramzy1453/SmartWeb",
      demo_link: "http://smartwebai.netlify.app/",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
    },
    {
      image:
        "https://camo.githubusercontent.com/f554aac9ce7b563467d6898d08c42deed95f78a1337e50e58b8c598d2dadf524/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3832363138343730363537353034303538322f313039393339383537313032393138383637392f696d6167652e706e67",
      name: "Qalam AI",
      source_code_link: "https://github.com/ramzy1453/QalamAI-PFE",
      demo_link: "http://qalamai.netlify.app",
      description:
        "Qalam AI is an app for generating unique and customizable images using deep learning",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "red-text-gradient",
        },
      ],
    },
    {
      image:
        "https://scontent.falg7-1.fna.fbcdn.net/v/t1.15752-9/353247548_736110878199281_2211816513225517016_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG87D0yIxrWHKsQYF_sczJyAdmxtkRRhZoB2bG2RFGFmtPeJbqnbXbhtGetC6tYH3Slw5bSBEjnDNNV8b1cXTye&_nc_ohc=ZtUjACViWtUAX8qWDhn&_nc_ht=scontent.falg7-1.fna&oh=03_AdRTGg9wAE_l13-WvzZdv_0gYnfjGqGyAyU7c8GnJtE_OQ&oe=64B1AF30",
      name: "Job Hunter",
      source_code_link: "https://github.com/ramzy1453/eldian-job-hunter",
      demo_link: "https://eldian-job-hunter.netlify.app",
      description:
        "the goal of Eldian Job Hunter is connecting job seekers with the companies they want to work for. You may not know us, but we've been around awhile. giving them free access to search for jobs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "black-text-gradient",
        },
      ],
    },
    {
      image:
        "https://camo.githubusercontent.com/f56d2aa719d9f23d25a9efda92b3fbe6074d8bdfa5b1e063ea3e96069f323869/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313036353335363435303337343837373138342f313038363032363333393032303138313539342f696d6167652e706e673f77696474683d373738266865696768743d343038",
      name: "Quran Web Extension",
      source_code_link: "https://github.com/ramzy1453/Ayat-chrome-extension",
      description:
        "Chrome extension that displays new Quranic Verses (Ayats) everytime clicking button. The extension is designed to provide users with a quick and easy way to read and reflect on verses from the Quran throughout the day.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "yellow-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118670209767714836/149eb579-4617-476d-a2ed-79fa1e797e34.png?width=808&height=382",
      name: "Discover Algeria",
      source_code_link: "https://github.com/ramzy1453/discover-algeria-country",
      demo_link: "https://discover-algeria-country.netlify.app",
      description:
        "Discover Algeria Country is a website built for promoting the fabulous country of Algeria to tourists, of its beautiful places, rich culture and an honorable history. it shows how beautiful Algeria is.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
    },
    {
      image:
        "https://github.com/ramzy1453/malicious-url-detection/raw/main/demo/phishing.png",
      name: "Malicious URLs detector",
      source_code_link: "https://github.com/ramzy1453/malicious-url-detection",
      description:
        "This project classifies and detect malicious URLs using Machine Learning in a web application built with Flask and Next.js.",
      tags: [
        {
          name: "next.js",
          color: "black-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nlp",
          color: "blue-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118672372153733211/image.png?width=863&height=408",
      name: "Holy Quran",
      source_code_link: "https://github.com/ramzy1453/holy-quran-website",
      demo_link: "https://holy-quran-website.netlify.app",
      description:
        "Read, and listen The Noble Quran. this website is a Sadaqah Jariyah.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "white-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1119006796925915286/image.png?width=899&height=408",
      name: "Covid-19 Tracker",
      demo_link:
        "https://drive.google.com/file/d/1NA8G_1fEb2uBfK7eYCnhrEtY555CP0m-/view",
      description: "A web app that tracks the spread of the Covid-19 virus.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        { name: "chart.js", color: "blue-text-gradient" },
        { name: "maps", color: "green-text-gradient" },
        {
          name: "api",
          color: "white-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1119005498537168947/image.png?width=884&height=408",
      name: "Where in the world?",
      demo_link: "https://holy-quran-website.netlify.app",
      description:
        "A website that shows information about countries of the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "white-text-gradient",
        },
      ],
    },
  ],
  threejs: [
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118678912143200286/image.png?width=948&height=408",
      name: "Realistic Render",
      source_code_link: "https://github.com/ramzy1453/Three.js",
      demo_link:
        "https://drive.google.com/file/d/11zJfYxK1DWHUtZHP0svXqqmMX6YX_uXX/view?usp=sharing",
      description: "Realistic Render of a helmet using Three.js",
      tags: [
        { name: "html", color: "orange-text-gradient" },
        { name: "js", color: "blue-text-gradient" },
        {
          name: "three.js",
          color: "black-text-gradient",
        },
      ],
    },

    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118676420604989440/image.png?width=696&height=408",
      name: "3D Earth",
      source_code_link:
        "https://github.com/ramzy1453/Three.js/tree/main/earth-space-3js",
      demo_link:
        "https://drive.google.com/file/d/1159J_5Ll5f3id9Y5k66M3KfuX_9oXdj9/view?usp=sharing",
      description: "3D Earth rotation with stars background using Three.js.",
      tags: [
        { name: "html", color: "orange-text-gradient" },
        { name: "js", color: "blue-text-gradient" },
        {
          name: "three.js",
          color: "black-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118675857775542352/image.png?width=863&height=408",
      name: "Micro Club",
      source_code_link:
        "https://github.com/ramzy1453/Three.js/tree/main/micro-club-website",
      demo_link:
        "https://drive.google.com/file/d/1Ws0zmD44HUYIW7gClYK2RsgODmWDl4zh/view?usp=sharing",
      description:
        "A 3D website for Micro Club who represent four fields (Robotics, IT, Game Dev and Multimedia)",
      tags: [
        { name: "html", color: "orange-text-gradient" },
        { name: "js", color: "blue-text-gradient" },
        {
          name: "three.js",
          color: "black-text-gradient",
        },
      ],
    },
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1118679209750044692/image.png?width=725&height=408",
      name: "Haunted House",
      source_code_link: "https://github.com/ramzy1453/Three.js",
      demo_link:
        "https://drive.google.com/file/d/1ztzkJp2htUZbkFGKKPW1duBMBUqBKzl6/view?usp=sharing",
      description:
        "3D Haunted House from scratch using Three.js with lights, shadows, fog, and camera movement.",
      tags: [
        { name: "html", color: "orange-text-gradient" },
        { name: "js", color: "blue-text-gradient" },
        {
          name: "three.js",
          color: "black-text-gradient",
        },
      ],
    },
  ],
  ai: [
    {
      image:
        "https://media.discordapp.net/attachments/804151950227537980/1119002089117462649/image.png?width=818&height=382",
      name: "Country clustering",
      source_code_link:
        "https://github.com/ramzy1453/Machine-Learning-Projects/tree/main/country-clustering",
      description:
        "Clustering countries based on their GDP, population, and area. using K-means algorithm.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "sckit-learn", color: "red-text-gradient" },
        { name: "machine learning", color: "green-text-gradient" },
        { name: "k-means", color: "red-text-gradient" },
        { name: "data visualization", color: "orange-text-gradient" },
      ],
    },
    {
      image:
        "https://storage.googleapis.com/kaggle-datasets-images/1582403/2603715/fc66626bcce9dec0f401f3f69c2ab2d1/dataset-cover.jpg?t=2021-09-10-18-13-42",
      name: "Heart disease predicition",
      source_code_link:
        "https://github.com/ramzy1453/Machine-Learning-Projects/tree/main/heart-disease",
      description:
        "Predicting heart disease using Machine Learning algorithms.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "machine learning", color: "green-text-gradient" },
        { name: "sckit-learn", color: "red-text-gradient" },
        { name: "algorithms", color: "red-text-gradient" },
        { name: "data visualization", color: "orange-text-gradient" },
      ],
    },
    {
      image:
        "https://www.tibco.com/sites/tibco/files/media_entity/2021-05/neutral-network-diagram.svg",
      name: "Neural Networks from scratch",
      source_code_link:
        "https://github.com/ramzy1453/Machine-Learning-Projects/tree/main/models-python/models",
      description: "Implementing Neural Networks from scratch using Python.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "neural networks", color: "red-text-gradient" },
        { name: "deep learning", color: "orange-text-gradient" },
      ],
    },
    {
      image:
        "https://community.arm.com/resized-image/__size/2080x0/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Cat_5F00_not-cat.png",
      name: "Cat VS Dog deep learning from scratch",
      source_code_link: "https://github.com/ramzy1453/cat-dog-classifier-dl",
      description: "Cat VS Dog deep learning from scratch using Python.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "deep learning", color: "orange-text-gradient" },
        { name: "algorithms", color: "red-text-gradient" },
        { name: "neural networks", color: "red-text-gradient" },
      ],
    },
    {
      image:
        "https://img-0.journaldunet.com/ncnLdbj2tdRoYqV-c_Q6_b9SPA0=/1500x/smart/36216b4b04c2491090e62bc6cf1c8db5/ccmcms-jdn/34555171.jpg",
      name: "NLP Malicious URLs detection",
      source_code_link: "https://github.com/ramzy1453/malicious-url-detection",
      description: "NLP Malicious URLs detection using Python.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "sckit-learn", color: "red-text-gradient" },
        { name: "nlp", color: "orange-text-gradient" },
        { name: "machine learning", color: "red-text-gradient" },
      ],
    },
    {
      image: "https://roboticsbiz.com/wp-content/uploads/2020/11/brain.jpg",
      name: "Finding best estimator - stroke prediction",
      description: "Finding best estimator - stroke prediction using Python.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "machine learning", color: "green-text-gradient" },
        { name: "sckit-learn", color: "red-text-gradient" },
      ],
      source_code_link:
        "https://github.com/ramzy1453/Machine-Learning-Projects/tree/main/finding-bestEstimator-stroke-prediction",
    },
  ],
};
export { services, technologies, experiences, testimonials, projects };
