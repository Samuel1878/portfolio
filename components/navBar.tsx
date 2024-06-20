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
        <div className={`fixed right-0 top-0 left-0 h-30 bg-transaprent flex items-center justify-between p-8 md:p-12 lg:p-16`}>
             <div className="group cursor-pointer overflow-hidden flex flex-col items-center self-end z-10">
                <p className={`text-xl text-gray-200 transition-all duration-300 ease-in group-hover:-translate-y-full group-hover:opacity-10 lg:text-2xl ${open?"-translate-y-1":""}`}>Samuel <span className="text-gray-500">Chost</span></p>    
                <button className="text-xl text-gray-500 opacity-0 origin-bottom transition-all duration-300 ease-in group-hover:-translate-y-full group-hover:opacity-100" onClick={()=>route.push("/")}>Download <span className="text-gray-200">CV</span></button>
            </div>
            <button className="flex flex-col justify-between items-center self-start md:scale-150 lg:hidden z-10" onClick={openMenu}>
                <span className={`bg-gray-300 w-6 h-0.5 block transition-all duration-300 ease-out rounded-sm
                                    ${open?"rotate-45 translate-y-1":'-translate-y-0.5'}`}></span>
                <span className={`bg-gray-300 w-6 h-0.5 block my-1 transition-all duration-300 ease-out rounded-sm ${open?"opacity-0":"opacity-1"}`}></span>
                <span className={`bg-gray-300 w-6 h-0.5 block transition-all duration-300 ease-out rounded-sm
                                    ${open?'-rotate-45 -translate-y-2':'translate-y-0.5'}`}></span>
            </button>

            <ul className="flex justify-between items-center hidden lg:flex gap-10 z-10">
                <li className="text-gray-300 font-bold flex flex-col group">
                    <Link href="/" className="group-hover:opacity-0 transition-all duration-300 ease-in group-hover:-translate-y-full ">Home</Link>
                    <Link href="/" className="transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 text-primary group-hover:-translate-y-full">Home</Link>
                </li>
                 <li className="text-gray-300 font-bold flex flex-col group">
                    <Link href="/resume" className="group-hover:opacity-0 transition-all duration-300 ease-in group-hover:-translate-y-full ">Resume</Link>
                    <Link href="/resume" className="transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 text-primary group-hover:-translate-y-full">Resume</Link>
                </li>
                <li className="text-gray-300 font-bold flex flex-col group">
                    <Link href="/portfolio" className="group-hover:opacity-0 transition-all duration-300 ease-in group-hover:-translate-y-full ">Portfolio</Link>
                    <Link href="/portfolio" className="transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 text-primary group-hover:-translate-y-full">Portfolio</Link>
                </li>
                  <li className="text-gray-300 font-bold flex flex-col group">
                    <Link href="/contact" className="group-hover:opacity-0 transition-all duration-300 ease-in group-hover:-translate-y-full ">Contact</Link>
                    <Link href="/contact" className="transition-all duration-300 ease-in opacity-0 group-hover:opacity-100 text-primary group-hover:-translate-y-full">Contact</Link>
                </li>
            </ul>
            <div className={`absolute bottom-0 flex flex-col top-0 right-0 left-0 bg-bgPrimary py-32 transition-all duration-500 ease-in-out opacity-0${open?"block opacity-100":"hidden opacity-0"}`}>
                <ul className={`flex flex-1 flex-col items-center justify-around bg-black-300 h-full gap-10 pt-32 transition-all duration-500 ease-in-out  ${open?"-translate-y-10":""}`}>
                    <li className="text-l text-gray-300 hover:text-primary">
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li className="text-l text-gray-300 hover:text-primary">
                        <Link href="/resume" >
                            Resume
                        </Link>
                    </li>
                    <li className="text-l text-gray-300 hover:text-primary">
                        <Link href="/portfolio" >
                            Portfolio
                        </Link>
                    </li>
                    <li className="text-l text-gray-300 hover:text-primary">
                        <Link href="/contact" >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-1">
                    
                </div>
            </div>
        </div>
    )
}