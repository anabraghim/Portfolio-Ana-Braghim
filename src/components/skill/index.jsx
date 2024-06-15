import React from "react";
import { Skill } from "./styles";

export function SkillComponent({skill}){
    return(
        <>
        <Skill  className='scale'>
            <img src={skill.srcImg} alt={`imagem de ${skill.title}`} />
            <p>{skill.title}</p>
        </Skill>
        </>
    )
}