export interface ProjectData {
  id: string;
  image: string;
  alt: string;
  title: string;
  techstack: string[];
  description: string;
  github: string;
  site: string;
  disabled: boolean;
  video?: string;
  overview?: string;
  learned?: string;
  technologies?: string;
  info?: string;
}

const projects: ProjectData[] = [
  {
    id: "neuronotes",
    image: "/neuronotes.jpg",
    alt: "neuronotes",
    title: "NEURONOTES",
    techstack: ["React", "Typescript", "ChakraUI", "Node.js", "MongoDB"],
    description:
      "NeuroNotes is an application based on the second brain methodology. Much like it sounds, building a “second brain” is about creating a system outside your physical skin-and-bone bodily boundaries for storing, organising, and eventually transforming information. ",
    github: "https://github.com/JvstRyan/NeuroNotes",
    site: "https://neuronote.vercel.app/",
    disabled: false,
    video: "/neuronotes.mp4",
    overview:
      "NeuroNotes is an application based on the second brain methodology. Much like its name suggests, building a “second brain” involves creating a system beyond your physical body for storing, organizing, and ultimately transforming information. I was inspired by my favorite notion templates to smoosh them together into one application.",
    learned:
      "NeuroNotes was my first full-stack project. I had just finished a course on using Node.js to build servers. After the course, I wanted to build something on my own to cement the knowledge I had gained. I got to use all the skills and technologies I had learned from the course, including Express.js, MongoDB, and JWT. I learned a lot about authentication with JWT and how cookies and headers worked. This project also opened my eyes to how databases worked and how you could store info and retrieve it. Before this project, I was mostly just using local storage to persist data, but this opened up a new world for me. Additionally, I had the opportunity to use React Query for the first time, and it made much more sense to me than using the useEffect hook to fetch data and update the components' data if something changed. It made the whole process easier for me, and performance-wise, it was a huge upgrade",
    technologies:
      "React, Typescript, ChakraUI, React Query, Axios, Vercel, Node.js, Express.js, MongoDB, Mongoose, Render, Bcrypt. JWT",
  },
  {
    id: "availi",
    image: "/availi.jpg",
    alt: "Availi",
    title: "AVAILI",
    techstack: [
      "Typescript",
      "Next.js",
      "MaterialUI",
      "ASP.NET Core",
      "MS SQL",
    ],
    description:
      "Availi arose from the hours I spent creating schedules for members of the organization I am apart of. It took hours trying to gather all the availabilites, typing all the information I needed to work with and then finally creating the schedule. With Availi, I now create a new survey and auto generate a schedule based on everyones availability.",
    github: "https://github.com/JvstRyan/Availi",
    site: "https://github.com/JvstRyan/Availi",
    disabled: false,
    video: "/availi.mp4",
    overview:
      "Every month, I create a schedule for many members in an organization that I'm a part of. They have different tasks related to ensuring the audio runs smoothly, displaying specific videos and media documents during presentations, and adjusting microphones for speakers. In total, there are four tasks that four people need to fill each week. Normally, I do this all manually, asking every member for their availability and checking other schedules to avoid double booking when they have other commitments. This process, of course, consumes a lot of time, which is why I wanted to create an application to handle most of the work.",
    learned:
      "I decided to learn C#/.NET at the start of 2024 because I saw how in-demand it was as a backend language. So, that's why I followed a few courses to get a better grasp of C# and the .NET ecosystem. After going through a few courses, I decided to build my own project with the newly learned technologies. This is where Availi arose because I wanted to automate some of my tasks that I had every month. It was the perfect chance to use C#/.NET and ASP.NET Core to create my web API. So far, I have learned how I can create a complete backend using ASP.NET Core, MS SQL Server as the database, Entity Framework Core for queries, Identity for authentication and authorization, plus JWT as well. In addition to that, I have learned more about the use of DTOs and repositories to keep the application loosely coupled, safe, and flexible. At the moment, I am still busy tweaking this application. I am still working on things like the algorithm behind the schedule builder. I want to evenly assign users to tasks, and it should keep track of who has done what. Next, I still need to implement the authorization part to the endpoints so that only certain roles can make requests to certain endpoints. I have three roles: admin, volunteer, and guest. Each role will have a different set of permissions. After finishing that, I will proceed to deploy this project using Vercel and Azure.",
    technologies:
      "Next.js v.14, Typescript, Tailwind CSS, MaterialUI, React Query, Zustand, React-day-picker, C# / .NET, ASP.NET Core, MS SQL Server, Entity Framework Core, Microsoft Identity, JWT, AutoMapper",
  },
  {
    id: "gamehub",
    image: "/gamehub.jpg",
    alt: "game-hub",
    title: "GAME HUB",
    techstack: ["React", "Typescript", "ChakraUI"],
    description:
      "Gamehub is a project I created while learning more about React and TypeScript. It's built upon the RAWG API and taught me a lot about how the frontend interacts with API requests.",
    github: "https://github.com/JvstRyan/game-hub",
    site: "https://game-hub-lyart-nine.vercel.app/",
    disabled: false,
    video: '/gamehub.mp4',
    overview: "Gamehub is a project I created while learning more about React and TypeScript. It's built upon the RAWG API and taught me a lot about how the frontend interacts with API requests.",
    learned: "Gamehub was created while I was initially learning React and TypeScript in a course. It taught me a lot about API requests and how to share that data with different components. Additionally, this was the first project where I used a component library, which showed me that creating components from scratch wasn't necessary. At the time, this project was quite advanced for me. I also utilized React Query in this project, but it was only later, while reading the documentation while working on one of my personal projects, that I truly understood how it should be used. This project served as an eye-opener to the possibilities of React and TypeScript.",
    technologies: 'Typescript, React, ChakraUI, React Query, RAWG API'
  },
];

export default projects;
