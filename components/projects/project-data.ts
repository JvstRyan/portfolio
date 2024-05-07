
export interface ProjectData  
{
    id: string
    image: string
    alt: string
    title: string
    techstack:  string[]
    description: string
    github: string
    site: string
    disabled: boolean
}


const projects: ProjectData[] = 
[
    {
    
    id: Math.random().toString(36).substring(2, 15), image: "/neuro.webp", alt: "neuronotes", title: "NEURONOTES", techstack: ["React", "Typescript", "ChakraUI", "Node.js", "MongoDB"], 
    description: "NeuroNotes is an application based on the second brain methodology. Much like it sounds, building a “second brain” is about creating a system outside your physical skin-and-bone bodily boundaries for storing, organising, and eventually transforming information. ",
    github: "https://github.com/JvstRyan/NeuroNotes", 
    site: "https://neuronote.vercel.app/",
    disabled: false
    },
    {
    id: Math.random().toString(36).substring(2, 15), 
    image: "/availi.webp", 
    alt: "Availi", 
    title: "AVAILI", 
    techstack: ["Typescript", "Next.js", "MaterialUI", "ASP.NET Core", "MS SQL"],
    description: "Availi arose from the hours I spent creating schedules for members of the organization I am apart of. It took hours trying to gather all the availabilites, typing all the information I needed to work with and then finally creating the schedule. With Availi, I now create a new survey and auto generate a schedule based on everyones availability.",
    github: "https://github.com/JvstRyan/Availi", 
    site: "https://github.com/JvstRyan/Availi",
    disabled: true
    },
    {
        id: Math.random().toString(36).substring(2, 15), image: "/gamehub.webp", alt: "game-hub", title: "GAME HUB", techstack: ["React", "Typescript", "ChakraUI"], 
        description: "Gamehub is a project I created while learning more about React and TypeScript. It's built upon the RAWG API and taught me a lot about how the frontend interacts with API requests.",
        github: "https://github.com/JvstRyan/game-hub", 
        site: "https://game-hub-lyart-nine.vercel.app/",
        disabled: false
    },
    {
        id: Math.random().toString(36).substring(2, 15), image: "/icc.webp", alt: "icc", title: "ICC-REALM", techstack: ["Next.js", "Typescript", "Mantine"], 
        description: "ICC is a startup incubated at Fontys. I had the opportunity to join their team and develop the admin panel for their cleaning platform.",
        github: "https://github.com/JvstRyan/", 
        site: "https://game-hub-lyart-nine.vercel.app/",
        disabled: true
    }
]


export default projects
