import styled from "styled-components";

export const Project = styled.div`
    background-color: var(--cinzaMedio);
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
        width: calc(50% - 1rem);
    }
    

    img{
        width: 100%;
        height: 200px;
        background-color: blue;
        border-radius: 5px;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button{
        background-color: transparent;
        border: 0;
        color: var(--rosaMedio);
    }
`