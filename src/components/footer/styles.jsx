import styled from "styled-components"

export const Footer = styled.footer`
    background-color: var(--cinzaMedio);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    gap: 3rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .container p{
        font-size: 1rem;
    }

    .container img{
        width: 20px;
        height: 20px;
    }

    
`