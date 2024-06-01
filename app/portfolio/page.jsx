import Link from "next/link"
import React from "react"
import NavBar from '../navBar/page'
import BackgroundDesign from '../../images/pexels-neosiam-4498792.jpg'

export default function Portfolio() {
    return (
        <main className="flex min-h-screen flex-col bg-[#EEEDEB] bg:items-center justify-between p-24 container border-red mx-auto">
          <h1 className="text-black text-start">this is the portfolio page</h1>
            <NavBar/>
            
           <div className="columns-3">
            <img className="w-full" src={BackgroundDesign} alt/>

           </div>
        </main>
    )
}
// change container to column with image added for design