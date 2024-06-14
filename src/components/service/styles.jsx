import styled from "styled-components"

export const Service = styled.div`
    background-color: var(--cinzaMedio);
    border-radius: 5px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    width: 100%;
    @media screen and (min-width: 768px) {
        max-width: calc(33.3% - 1.5rem);
    }

    img{
        position: absolute;
        top: -2em;
        right: 2em;
        height: 4em;
        width: 4em;
    }
    details{
        font-size: 1.2rem;
    }
    .title{
        font-size: 2rem;
    }
    .valueService{
        padding: 1rem;
        text-align: center;
        color: var(--azulEscuro);
        border: 1px solid var(--azulEscuro);
        border-radius: 5px;
    }

    
`