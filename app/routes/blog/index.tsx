import { article, span } from "framer-motion/client";
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({request}:Route.LoaderArgs):Promise<{posts:PostMeta[]}>{
  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if(!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()

  data.sort((a:PostMeta ,b:PostMeta) =>{
    return new Date(b.date).getTime() - new Date(a.date).getTime() 
  })
   return{ posts:data }
}



const BlogPage = ({loaderData}:Route.ComponentProps) => {
    const [currentPage,setCurrentPage] = useState(1)
    const [searchQuery,setSearchQuery] = useState('')
    const { posts } = loaderData
    const PostsPerPage = 2
    
    const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
   p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))

    const totalPages = Math.ceil(filteredPosts.length/PostsPerPage)
    const indexOfLast = PostsPerPage * currentPage
    const indexOfFirst = indexOfLast - PostsPerPage
    const currentPosts = totalPages > 1 ? filteredPosts.slice(indexOfFirst,indexOfLast) : filteredPosts

        return ( <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-white">📝 Blog</h2>
        <PostFilter searchQuery={searchQuery} onSearchChange={(query) =>{
          setSearchQuery(query)
          setCurrentPage(1)
        }} />
        {currentPosts.length < 1 
        ?
        <p className="text-gray-400 text-center">No posts found...</p>
        : 
        currentPosts.map(post =>(
            <PostCard key={post.slug}  post={post }/>
        ))}
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div> );
}
 
export default BlogPage;