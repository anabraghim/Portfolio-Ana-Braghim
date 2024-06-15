import styled from "styled-components";

export const ContainerTitles = styled.section`
    margin-top: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    @media (min-width: 768px) {
        height: 40vh;
            .title2{
                font-size: 2rem;
            }        
        }
    .title2{
        font-size: 1.3rem;
    }
    
`

export const Title1 = styled.p`
    font-size: 3rem;
    @media (min-width: 768px) {
    font-size: 6rem;
        
    }
`

export const SpanTitle1 = styled.span`
    color: var(--rosaMedio);
    /* @media (min-width: 768px) {
        
    } */
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

export const Button = styled.button`
    width: 10em;
    height: 2.5em;
    border: 0;
    border-radius: 5px;
    background: ${(props) => (props.color? 'linear-gradient(to right, var(--rosaMedio), var(--azulEscuro));' : 'transparent')};
    border: ${(props)=> (props.$border ? '2px solid var(--branco)' : '0')};
`

export const AboutMeSkills = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    .AboutMeContainer{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        background-color: var(--cinzaMedio);
        border-radius: 5px;
        padding: 1rem;
        gap: 1rem;
        align-items: center;
        /* height: 500px; */
        
    }
    @media (min-width: 768px) {
        .AboutMeContainer{
            flex-direction: row-reverse;
            width: 70%;
        }
        .Skills{
            width: 40%;
        }
    }

    .AboutMeContainer img{
        width: 250px;
        height: 250px;
        background-color: white;
        border-radius: 5px;
    }

    .TextsAboutMe{
        display: flex;
        flex-direction: column;
        align-self: start;
        gap: 1rem;
    }

    .TextsAboutMe .name{
        font-size: 1.5rem;
    }

    .Skills{
        display: flex;
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }
    @media (min-width: 768px) {
        .Skills{
            width: 40%;
        }

        .AboutMeContainer img{
            min-width: 40%;
        }   
    }
`

export const ServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    .Services{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        
    }

    @media (min-width: 768px) {
        .Services{
            flex-direction: row;
            gap: 2rem;
            flex-wrap: wrap;
        }
    }
`

export const TitleSection = styled.p`
    font-size: 3rem;
    text-align: center;

    span{
        color: var(--rosaMedio)
    }
`

export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;

    .Projects{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        flex-wrap: wrap;
    }
    @media (min-width: 768px) {
        .Projects{
        flex-direction: row;
        
    }
    }
`