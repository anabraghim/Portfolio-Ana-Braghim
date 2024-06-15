import styled from "styled-components";

export const HeaderDesktop = styled.header`
    z-index: 1000;
    display: none;
    @media screen and (min-width: 768px) {
        position: fixed;
        top: 0;
        background-color: var(--cinzaMedio);
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 2em;
        a{
            text-decoration: none;
        } 
        .name{
            color: var(--rosaMedio);
        }
    }
    
`