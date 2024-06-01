import Link from "next/link"
import React from "react"

export default function navBar() {
    return (
        <main>
            <body>
                <nav className="p-7 text-wrap bg-[#E0CCBE] flex-1 flex-row flex-wrap md:flex md:items-center md:justify-center">
                    <div className="">
                        {/* <Link href='/' className="text-2xl inline">SC</Link> */}
                        <ul className="text-center md:flex md:items-center">
                            <li>
                                <Link href='/' className=" p-9  text-1xl text-[#755545] space-x-3">Home</Link>
                            </li>
                            <li>
                                <Link href='/portfolio' className=" p-9 text-1xl text-[#755545] space-x-3" >Portfolio</Link>
                            </li>
                            <li>
                                <Link href='/about' className="p-9 text-1xl text-[#755545] space-x-3">About Me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </body>



        </main>
    )
}
