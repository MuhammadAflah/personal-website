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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Uni_of_cali,
    brototype_icon,
    socialmedia,
    ecommerce,
    olx,
    netflix,
    todo,
    weather,
    express,
    sql,
    aws,
    firebase,
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
      id: "Education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "Node JS Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
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
      name: "express",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "aws",
      icon: aws,
    },
    
  ];
  
  const experiences = [
    {
      title: "Junior MERN stack developer",
      company_name: "Brototype",
      icon: brototype_icon,
      iconBg: "#383E56",
      date: "July 2022 - March 2023",
      points: [
        "Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript, React ,MongoDB, Express and Node JS. ",
        "Worked with REST APIs to retrieve and display data from databases.",
        "Worked with MVC frameworks to develop robust and scalable backends.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];


  const education = [
    {
      title: "Bachelor Of Computer Application",
      company_name: "University Of Calicut",
      icon: Uni_of_cali,
      iconBg: "#383E56",
      date: "June 2018 - March 2021",
      points: [
        "3 year Degree programmes affiliated to the University of Calicut, Kerala.",
        "The programme aims to provide sound academic base from which an advanced career in Computer Application can be developed.",
        "Conceptual grounding in computer usage as well as its practical business application will be provided.",
        "Provide both practical and thearitical explanation of various computer technology.",
        "Deals with different programming languages."
    ],
    },

  ];
  
  
  const projects = [
    {
        name: "Social Media",
        description:
            "A React social media application which is used to people to interact with each other. Its frontend is build with react and backend is connect with Nodejs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongoose",
                color: "green-text-gradient",
            },
            {
                name: "Nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "ExpressJs",
                color: "red-text-gradient",
            },
            {
                name: "MUI",
                color: "blue-text-gradient",
            },
            {
                name: "SASS",
                color: "green-text-gradient",
            },
        ],
        image: socialmedia,
        source_code_link: "https://github.com/MuhammadAflah/Hashtag_SocialMedia_App.git",
        live_link: "https://master.d1nv9eb5rafclu.amplifyapp.com/",
    },
    {
        name: "E-Commerce",
        description:
            "An e-commerce bag store which consist of customized admin panel to manage products, orders, sales report, etc. All the users and products are managed by admin.",
        tags: [
            {
                name: "Nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "ExpressJs",
                color: "pink-text-gradient",
            },
            {
                name: "HBS",
                color: "red-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/MuhammadAflah/e-commerce.git",
        live_link: "https://master.d1nv9eb5rafclu.amplifyapp.com/",
    },
    {
        name: "Netflix Clone",
        description:
            "Use TMDB API for fetching movie details.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            
        ],
        image: netflix,
        source_code_link: "https://github.com/MuhammadAflah/Netflix-clone-react.git",
        live_link: "https://netflix-clone-react-teal.vercel.app/",
    },
    {
        name: "OLX Clone",
        description:
            "User and admin authentication using jwt and store user details and images in firebase.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
            
        ],
        image: olx,
        source_code_link: "https://github.com/MuhammadAflah/OLX-with-react-and-nodejs.git",
        live_link: "https://olx-clone-using-react.vercel.app/",
    },
    {
        name: "ToDo App",
        description:
            "User can list their daily tasks and it also shows the completed and pending tasks.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            
        ],
        image: todo,
        source_code_link: "https://github.com/MuhammadAflah/To-Do-using-react.git",
        live_link: "https://to-do-using-react-seven.vercel.app/",
    },
    {
        name: "Weather App",
        description:
            "Live weather forcast using Openweathermap API.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            
        ],
        image: weather,
        source_code_link: "https://github.com/MuhammadAflah/Weather_app.git",
        live_link: "https://weather-app-iota-mocha-29.vercel.app/",
    },
];
  
  export { services, technologies, experiences, projects ,education};