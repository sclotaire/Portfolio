import Link from "next/link"
import React, {useState} from "react"
import NavBar from '../components/navBar/page'
import BackgroundDesign from '../../images/pexels-neosiam-4498792.jpg'
import ProjectCard from "../components/projects/projectsCard"
import ProjectData from './projectsDatabase/page'



export default function Portfolio() {
    return (
        <main className="flex min-h-screen flex-col bg-[#EEEDEB] bg:items-center justify-between p-24 border-red mx-auto">

          <h1 className="text-black text-start">My Projects</h1>
           <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
           {/* {Projects.map({project, index} => {
            <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            />
           })} */}

           </div>
            <NavBar/>
        
        </main>
    )
}
// change container to column with image added for design