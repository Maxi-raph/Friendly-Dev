import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development" },
  ];
}

const projectsUrl = import.meta.env.VITE_PROJECTS_API

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[], posts:PostMeta[]}>{
  const  url = new URL( request.url)

  const [projectRes, postRes] = await Promise.all([
    fetch(new URL('data/db.json', url)),
    fetch(new URL('/posts-meta.json', url)) 
  ])
  
  if(!projectRes.ok || !postRes.ok) throw new Error("Failed to fetch projects or posts")
    
    const [projects, posts] = await Promise.all([
      projectRes.json(),
      postRes.json()
    ])
    
    return {projects:projects.projects, posts:posts}
}

const HomePage = ({loaderData}:Route.ComponentProps) =>{
  const {projects, posts} = loaderData

  return <>
  <FeaturedProjects  projects={projects} count={2}/>
  <LatestPosts posts={posts} limit={3} />
  <AboutPreview />
  </>
}

export default HomePage
