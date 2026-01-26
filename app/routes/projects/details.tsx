import type { Route } from './+types/details'
import type { Project } from '~/types'
import { Link } from 'react-router'
import { FaArrowLeft } from 'react-icons/fa'
  

export async function clientLoader({request, params}:Route.ClientLoaderArgs):Promise<Project> {

    const res = await fetch(`http://localhost:8000/projects/${params.id}`)

    if(!res.ok) throw new Response(`Project not found`, {status:404})

    const project:Project = await res.json()

    return project
    
}

export function HydrateFallback(){
    return <div>Loading...</div>
}

const ProductDetailsPage = ({loaderData}:Route.ComponentProps)=>{
      const {id, image, title, description, category, featured,date,url} = loaderData;

    return(
        <>
            <Link to={'/projects'} className='flex items-center text-blue-400 hover:text-blue-500 mb-6 transition'>
                <FaArrowLeft className='mr-2'/> Back To Projects
            </Link>

            <div className="grid gap-8 items-start md:grid-cols-2">
                <div>
                    <img src={image} alt={title} className='w-full rounded-lg shadow-md'/>                  
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-400 mb-4">{title}</h1>
                    <p className="text-sm mb-4">{new Date(date).toLocaleDateString()} . {category}</p>
                    <p className="text-gray-200 mb-6">{description}</p>
                    <a href={url} target='_blank' className='inline-block text-white bg-blue-600
                     hover:bg-blue-700 px-6 py-2 rounded transition'>View Live Site</a>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage



