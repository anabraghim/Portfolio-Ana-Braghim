import React from "react";
import { Footer } from "./styles";

export function FooterComponent(){
    return(
        <>
        <Footer>
                <div className='container'>
                    <img src="src/assets/icons/email.svg" alt="ícone de email" />
                    <p>anajuliabraghim@gmail.com</p>
                </div>
                {/* <div className="container">
                    <a href=""><img src="src/assets/icons/phone.svg" alt="ícone de telefone" /></a>
                    <p>67 996485777</p>
                </div> */}
                <div className="container">
                    <a href=""><img src="src/assets/icons/copyright.svg" alt="ícone do copyright" /></a>
                    <p> 2024 Ana Braghim. Todos os direitos reservados.</p>
                </div>
                <div className="container">
                    <a href="https://www.instagram.com/anabraghim"><img src="/assets/icons/instagram.svg" alt="ícone do Instagram" /></a>
                    <a href="https://www.linkedin.com/in/anabraghim"><img src="/assets/icons/linkedin.svg" alt="ícone do Linkedin" /></a>
                    <a href="https://github.com/anabraghim"><img src="/assets/icons/github.svg" alt="ícone do GitHub" /></a>
                </div>
           </Footer>
        </>

    )
}