import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development" },
  ];
}

const projectsUrl = import.meta.env.VITE_PROJECTS_API

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[]}>{
  const  url = new URL('data/db.json', request.url)
  const res = await fetch(url.href)
  const data = await res.json()
    return {projects:data.projects}
}

const HomePage = ({loaderData}:Route.ComponentProps) =>{
  const {projects} = loaderData

  return <>
  <FeaturedProjects  projects={projects} count={2}/>
  <AboutPreview />
  </>
}

export default HomePage
