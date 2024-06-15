import styled from "styled-components";

export const HeaderComponent = styled.header`
    @media (max-width: 767px){
        .mobileHeader{
            z-index: 1000;
            position: fixed;
            top: 2rem;
            left: 2rem;
            background-color: var(--cinzaMedio);
            border-radius: 50%;
        }

        .closeHeader{
            width: 4rem;
            height: 4rem;
        }

        .mobileHeader button{
            width: 4rem;
            height: 4rem;
            background-color: transparent;
            border: 0;
            position: relative;
        }

        .mobileHeader button .line{
            background-color: var(--branco);
            width: 18px;
            height: 3px;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .mobileHeader button .l1{
            top: 35%;
        }

        .mobileHeader button .l3{
            top: 65%;
        }

        .closeHeader a {
            display:none;
        }

        .openHeader{
            width: calc(100% - 4rem);
            height: auto;
            border-radius: 5px;
            
        }
        .openHeader a{
            display: block;
            margin: 2rem;
            text-decoration: none;
        }

        .openHeader button .l1{
            top: 50%;
            left: 30%;
            transform: rotate(45deg);
        }

        .openHeader button .l2{
            display: none;
        }

        .openHeader button .l3{
            left: 30%;
            transform: rotate(-45deg);
            top: 52%;
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
    
`