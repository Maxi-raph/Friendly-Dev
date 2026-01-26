import type { Paginate } from "~/types";

const Pagination:React.FC<Paginate> = ({totalPages, currentPage, setCurrentPage}) => {
    if(totalPages <= 1) return null
    
    const renderPagination = ()=>(
        <div className='flex justify-center gap-2 mt-8'>
            {/*  
            <span className=' text-blue-400 hover:text-blue-500 cursor-pointer' onClick={handlePrev}>{currentPage == 1 ? '' : 'Prev'}</span>
            <span className=' text-blue-400 hover:text-blue-500 cursor-pointer' onClick={handleNext}>{currentPage == totalPages ? '' : 'Next'}</span>      
            */}

            {Array.from({length: totalPages},(_,idx)=> 
               <button
               key={idx + 1}
               className={`px-4 py-2 rounded-md cursor-pointer flex justify-center items-center ${currentPage === idx + 1 ?'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200'}`}
               onClick={()=> setCurrentPage(idx + 1)}
               >
                {idx + 1}
               </button>
            )}
        </div>
    )
    return ( renderPagination() );
}
 
export default Pagination;