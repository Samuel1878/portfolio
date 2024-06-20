import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"


export default function NavBar () {
    const [open, setOpen] = useState<boolean>(false);
    const route = useRouter()
    const openMenu = ():void => {
        setOpen(!open)
    }
    return(
        <div className="container h-30 w-full bg-transparent flex items-center justify-between p-8">
     
             <div className="group cursor-pointer overflow-hidden flex flex-col items-center self-end">
                <p className="text-xl text-gray-200 transition-all duration-300 ease-in group-hover:-translate-y-full group-hover:opacity-10 lg:text-2xl">Samuel <span className="text-gray-500">Chost</span></p>    
                <button className="text-xl text-gray-500 opacity-0 origin-bottom transition-all duration-300 ease-in group-hover:-translate-y-full group-hover:opacity-100" onClick={()=>route.push("/")}>Download <span className="text-gray-200">CV</span></button>
            </div>
            <button className="flex flex-col justify-between items-center self-start lg:hidden" onClick={openMenu}>
                <span className={`bg-gray-300 w-6 h-0.5 block transition-all duration-300 ease-out rounded-sm
                                    ${open?"rotate-45 translate-y-1":'-translate-y-0.5'}`}></span>
                <span className={`bg-gray-300 w-6 h-0.5 block my-1 transition-all duration-300 ease-out rounded-sm ${open?"opacity-0":"opacity-1"}`}></span>
                <span className={`bg-gray-300 w-6 h-0.5 block transition-all duration-300 ease-out rounded-sm
                                    ${open?'-rotate-45 -translate-y-2':'translate-y-0.5'}`}></span>
            </button>

            <ul className="flex justify-between items-center hidden lg:flex gap-10">
                <li className="text-gray-300 font-bold">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-gray-300">
                    <Link href="/resume">Resume</Link>
                </li>
                <li className="text-gray-300">
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="text-gray-300">
                    <Link href="/conact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}