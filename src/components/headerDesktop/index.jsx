import React from "react";
import { HeaderDesktop } from "./styles";

export function HeaderDesktopComponent(){
    return(
        <>
        <HeaderDesktop>
                <a href="#home" className='scale'>
                    <p className="name">Ana Braghim</p>
                </a>
                <a href="#home" className='scale'>
                    <p>Home</p>
                </a>
                <a href="#services" className='scale'>
                    <p>Serviços</p>
                </a>
                <a href="#projects" className='scale'>
                    <p>Projetos</p>
                </a>
            </HeaderDesktop>
        </>
    )
}