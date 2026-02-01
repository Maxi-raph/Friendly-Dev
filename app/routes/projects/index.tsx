import { useEffect, useState } from 'react'
import type {Route} from './+types/index'
import type { Project } from '~/types'
import ProjectCard from '~/components/ProjectCard'
import Pagination from '~/components/Pagination'
import { AnimatePresence, motion } from 'framer-motion'

const projectsUrl = import.meta.env.VITE_PROJECTS_API

export async function loader({request}:Route.LoaderArgs):Promise<{projects: Project[]}> {
    const res = await fetch(`${projectsUrl}/projects`)
    const data = await res.json()
    return {projects: data}
}

const ProjectsPage = ({loaderData}:Route.ComponentProps) => {
    const {projects} = loaderData as {projects: Project[]}
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory,setSelectedCategory] = useState('All')
    const projectsPerPage = 2

    const categories = ['All', ...new Set(projects.map(project => project.category))]

    //Filter projects based on category
    const filteredProjects = projects.filter(project=> 
        selectedCategory == 'All' 
        ? project
        : project.category === selectedCategory)

    //Calculate total pages
    const totalPages = Math.ceil(filteredProjects.length/projectsPerPage)

    //Get Current Project Page
        const indexOfLast = projectsPerPage * currentPage
        const indexOfFirst = indexOfLast - projectsPerPage
        const currentProjects = filteredProjects.slice(indexOfFirst,indexOfLast)

    //Pagination buttons logic
  { /*   const handlePrev = ()=>{
        if( currentPage > 1)setCurrentPage(prev =>prev - 1)
    }

    const handleNext = ()=>{
        if(currentPage < totalPages)setCurrentPage(prev =>prev + 1)  
    }
        */}

function useWindowWidth() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return width
}

const width = useWindowWidth()

    return ( <section>
        <h2 className="text-3xl font-bold mb-8 text-white">🚀 Projects</h2>
        <div className='flex flex-wrap gap-2 mb-8'>
            {categories.map(cat=>
              <button key={cat} className={`px-4 py-1 rounded-md text-sm
               cursor-pointer hover:bg-blue-500 transition duration-700 ${cat == selectedCategory ?  'bg-blue-600' : 'bg-gray-700'}`}
               onClick={()=>{
                    setSelectedCategory(cat)
                    setCurrentPage(1)
               }}>
                {cat}
              </button>
             )}
        </div>
        <AnimatePresence mode='wait'>
            <motion.div layout className="grid gap-6 sm:grid-cols-2">
                {
                    width >= 768 
                    ? filteredProjects.map((project) =>
                    <motion.div key={project.id} layout>
                         <ProjectCard project={project}/>
                    </motion.div>
                    ) 
                    : currentProjects.map((project) =>
                    <motion.div key={project.id} layout>
                         <ProjectCard project={project}/>
                    </motion.div>
                    )
                }
            </motion.div>
        </AnimatePresence>
           {width < 768 && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            
    </section> );
}
 
export default ProjectsPage;