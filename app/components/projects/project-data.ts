
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
    
    id: Math.random().toString(36).substring(2, 15), image: "/neuro.svg", alt: "neuronotes", title: "NEURONOTES", techstack: ["React", "Typescript", "ChakraUI", "Node.js", "MongoDB"], 
    description: "NeuroNotes is an application based on the second brain methodology. Much like it sounds, building a “second brain” is about creating a system outside your physical skin-and-bone bodily boundaries for storing, organising, and eventually transforming information. ",
    github: "https://github.com/JvstRyan/NeuroNotes", 
    site: "https://neuronote.vercel.app/",
    disabled: false
    },
    {
    id: Math.random().toString(36).substring(2, 15), 
    image: "/planit.svg", 
    alt: "planit", 
    title: "PLANIT", 
    techstack: ["Typescript", "Next.js", "MaterialUI", "ASP.NET Core", "MS SQL"],
    description: "PlanIt arose from the hours I spent creating schedules for members of the organization I am apart of. It took hours trying to gather all the availabilites, typing all the information I needed to work with and then finally creating the schedule. With Planit I now create a new survey and auto generate a schedule based on everyones availability",
    github: "https://github.com/JvstRyan/planit", 
    site: "https://github.com/JvstRyan/planit",
    disabled: true
    },
    {
        id: Math.random().toString(36).substring(2, 15), image: "/portfolio.svg", alt: "portfolio showcase", title: "PORTFOLIO", techstack: ["Next.js", "Tailwind css", "DaisyUI", "EmailJs", "Figma"], 
        description: "I created this portfolio to showcase my skills that I have built up so far. I am looking forward to showcasing more of my projects.",
        github: "https://github.com/JvstRyan?tab=repositories", 
        site: "https://www.ryanhorrmann.me/",
        disabled: false
    }
]


export default projects
