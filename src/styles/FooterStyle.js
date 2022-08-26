import styled from "styled-components";

export const FooterStyle = styled.section`
    width: 100%;
    padding: 1rem 1rem;
    background: var(--bg-input);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-size: clamp(1.5rem, 2vw, 3rem);
        font-family: var(--ff-title);
        letter-spacing: 5px;
        color: var(--clr-secondary);
    }

    div{
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    a{
        width: 4%;
    }

    img{
        width: 100%;
    }

    @media screen and (max-width:720px){
        padding: 1rem 0.5rem 0;
        flex-direction: column;
        gap: 1rem;

        h3{
            text-align: center;
        }

        div{
            width: 100%;
            justify-content: center;
            gap: 2rem;
        }

        a{
            width: 10%;
        }
    }
`;

export const Copyright = styled.div`
    width: 100%;
    padding: 0 1rem 1rem;
    background: var(--bg-input);
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    img{
        width: 2%;
    }

    p{
        font-size: clamp(0.625rem, .9vw, 1.1rem);
        font-family: var(--ff-txt);
        letter-spacing: 2px;
        color: var(--clr-secondary);
    }

    @media screen and (max-width:720px){
        padding: 1rem 0.5rem;

        img{
            width: 5%;
        }

        p{
            text-align: center;
        }
    }
`;