import Link from "next/link"
import React from "react"
// md:items-center md:justify-center 
export default function navBar() {
    return (
        <main>
            <nav className="fixed top-0 left-0 right-0 z-10 p-7 w-screentext-wrap bg-[#E0CCBE] bg-opacity-85 flex-1 flex-row flex-wrap md:flex ">
                    <div className="">
                    </div>
                    <ul className="flex text-left md:flex md:items-center md-justify-center">
                        <li>
                            <Link href='/' className="text-2xl text-left" >SC</Link>
                        </li>
                        <li>
                            <Link href='/' className=" p-9 text-1xl text-[#755545] space-x-3">Home</Link>
                        </li>
                        <li>
                            <Link href='/portfolio' className=" p-9 text-1xl text-[#755545] space-x-3" >Portfolio</Link>
                        </li>
                        <li>
                            <Link href='/about' className="p-9 text-1xl text-[#755545] space-x-3">About Me</Link>
                        </li>
                    </ul>
            </nav>




        </main>
    )
}
