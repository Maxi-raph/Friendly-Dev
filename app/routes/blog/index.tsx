import type { Route } from "./+types/index";
import { Link } from "react-router";

 type Blog= {
    id: string
    slug: string
    title: string
    excerpt: string
    date:string
}

export async function loader({request}:Route.LoaderArgs):Promise<{posts:Blog[]}>{
    const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if(!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()
   return{ posts:data }
}



const BlogPage = ({loaderData}:Route.ComponentProps) => {
    const { posts } = loaderData
    return ( <>
        <h2 className="text-3xl font-bold mb-8 text-white">📝 Blog</h2>
        
    </> );
}
 
export default BlogPage;