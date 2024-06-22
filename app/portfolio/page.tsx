import Link from "next/link"
import React, {useState} from "react"
import NavBar from '../components/navBar/page'
import BackgroundDesign from '../../images/pexels-neosiam-4498792.jpg'
import ProjectCard from "../components/projects/projectsCard"



export default function Portfolio() {
    return (
        <main className="flex min-h-screen flex-col bg-[#EEEDEB] bg:items-center justify-between p-24 border-red mx-auto">

          <h1 className="text-black text-start">My Projects</h1>
           <div className="columns-3">
            <img className="w-full"/>
            

           </div>
            <NavBar/>
        
        </main>
    )
}
// change container to column with image added for design