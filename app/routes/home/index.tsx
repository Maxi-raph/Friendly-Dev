import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development" },
  ];
}

const projectsUrl = import.meta.env.VITE_PROJECTS_API

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[]}>{
  const res = await fetch(`${projectsUrl}/projects`)
  const data = await res.json()
    return {projects:data}
}

const HomePage = ({loaderData}:Route.ComponentProps) =>{
  const {projects} = loaderData
  return <>
  <FeaturedProjects  projects={projects} count={2}/>
  </>
}

export default HomePage
