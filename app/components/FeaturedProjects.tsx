import type { Project } from "~/types";
import ProjectCard from './ProjectCard'
type featuredProjects = {
    projects:Project[]
    count:number
}

const FeaturedProjects = ({projects, count = 4}:featuredProjects) => {
   
    const featured = projects.filter(p => p.featured).slice(0,count)

  return ( 
    <section>
        <h2 className="text-2xl text-start font-bold mb-6 text-gray-200">✨ Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {featured.map(feat =>(
                <ProjectCard  project={feat}/>
               ))}
        </div>

    </section>); 
}
 
export default FeaturedProjects;