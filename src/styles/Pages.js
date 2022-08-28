import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto 2rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:720px){
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 95%;
        column-gap: 1.5rem;
        overflow-x: auto;
        overscroll-behavior-inline: contain;
    }
`;

export const PageTitle = styled.div`
    width: 20%;
    margin: 0 auto;
    border-left: 5px solid #d52834;
    border-bottom: 15px solid #d52834;


    h2{
        font-size: clamp(2rem, 4vw, 5rem);
        font-family:var(--ff-title);
        color: var(--clr-secondary);
        text-align: center;
    }

    @media screen and (max-width:720px){
        width: 50%;
        border-bottom: 10px solid #d52834;
    }
`;

export const Pages = styled.div`
    width: 100%;
    margin: 2rem auto 4rem;
    background: black;
    display: flex;
    box-shadow: 2px 2px 2px 4px silver;
    position: relative;


    div::after{
        content: '';
        position: absolute;
        inset: 0;
        background: rgb(255, 255, 255, .7);
        z-index: -1;
        display: none;
    }

    div{
        flex: .8;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: .2fr .2fr 2fr .2fr;
        row-gap: 0.5rem;
    }

    @media screen and (max-width:720px){
        margin: 2rem auto;
        grid-row-start: 2;
        flex-direction: column;
        align-items: center;
        box-shadow: none;
        overflow: hidden;

        div{
            width: 100%;
            height: 100%;
            padding: 0 0.5rem;
            position: absolute;
            z-index: 1;
            top: 93%
        }

        img:hover ~ div,
        img:focus ~ div{
            top: 0;
        }

        div::after{
            display: initial;
        }
    }
`;