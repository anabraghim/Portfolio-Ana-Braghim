import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
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
        gap: 0.5rem;
    }
    .container a{
        display: flex;
    }

    .container p{
        font-size: 0.8rem;
        width: max-content;
    }

    .container img{
        width: 20px;
        height: 20px;
    }

    
`