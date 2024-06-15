import React from "react";
import { Project } from "./styles";

export function ProjectComponent({project}){
    
    return(
        <>
        <Project className="project scale">
            <img src={project.urlImg} alt="" />
            <div className="container">
                <p>{project.title}</p>
                <a href={project.urlButton}><button>Ver site</button></a>
            </div>
        </Project>
        </>
    )
}