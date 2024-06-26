import React from "react";
import { Service } from "./styles";

export function ServiceComponent({service}){
    return(
        <>
            <Service className='scale'>
                <img src="/assets/icons/service.svg" alt="ícone de serviço" />
                <p className='title'>{service.title}</p>
                <details>{service.details}</details>
                <p className='valueService'>Valor médio {service.value}</p>
            </Service>
        </>
    )
}