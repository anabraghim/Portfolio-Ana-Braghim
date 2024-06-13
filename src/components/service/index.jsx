import React from "react";
import { Service } from "./styles";

export function ServiceComponent(){
    return(
        <>
            <Service>
                <img src="src/assets/icons/service.svg" alt="ícone de serviço" />
                <p className='title'>Lading Page</p>
                <details>Frase rápida sobre lading page.</details>
                <p className='valueService'>Valor médio R$ 300,00</p>
            </Service>
        </>
    )
}