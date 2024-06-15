import React, { useState } from "react";
import { HeaderComponent } from "./styles";

export function HeaderMobileComponent(){

    const [open, setOpen] = useState(false);

    return(
        <>
        <HeaderComponent>
                <div className={`mobileHeader ${open ? 'openHeader':'closeHeader'}`}>
                    <button onClick={()=> {setOpen(!open)}}>
                        <div className='line l1'></div>
                        <div className='line l2'></div>
                        <div className='line l3'></div> 
                    </button>
                    <a href="#home">
                        <p>Home</p>
                    </a>
                    <a href="#services">
                        <p>Serviços</p>
                    </a>
                    <a href="#projects">
                        <p>Projetos</p>
                    </a>
                </div>
            </HeaderComponent>
        </>
    )
}