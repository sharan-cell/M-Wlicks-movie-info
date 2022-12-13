import requests from "../utils/requests"
import { useRouter } from "next/router"

function Nav() {
const router = useRouter();
  
  

  return (
    <nav className="relative" >


    <div  className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  snap-mandatory snap-x scroll-smooth hover:scroll-auto  "  >
    {Object.entries(requests).map(([key, {title, url}]) => 
       ( <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className={`font-body flex-none select-none text-base m-2 last:pr-24 cursor-pointer transition snap-centre duration-100 hover:scale-110 hover:text-white active:text-red-500 ${
                  router.asPath === title
                    ? "text-primary-500"
                    : "text-secondary-300"
                }`}>{title}
       
        </h2>
        ))}
    </div>
    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#252525] h-10 w-1/12" />
    </nav>
  )
}

export default Nav