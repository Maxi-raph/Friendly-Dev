export type Project ={
    id: string
    title: string
    description: string    
    image: string
    url: string
    date: string
    category: string
    featured: boolean 
}

export type Paginate ={
    totalPages:number
    currentPage:number
    setCurrentPage:(page:number) => void
}

export type HeroProps ={
    name:string
    text:string
}