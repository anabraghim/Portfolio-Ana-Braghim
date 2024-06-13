import { createGlobalStyle } from "styled-components";

export const MyGlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--standardFont);
        color: var(--branco);
    }

    p{
        font-size: 1.2rem;
    }

    button{
        font-size: 1.0rem;
    }

    section{
        padding: 0 2rem;
        min-width: 200px;
        max-width: 1000px;
        margin-top: 4rem;
        margin: 3em auto;
    }
`