import styled from "styled-components";

export const Skill = styled.div`
    width: calc(33.333% - 10px);
    background-color: var(--cinzaMedio);
    border-radius: 5px;
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    img{
        width: 5em;
        height: 5em;
        background-color: purple;
    }
`