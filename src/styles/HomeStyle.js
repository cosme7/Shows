import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    z-index: 1;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }

    h2{
        font-size: clamp(3.5rem, 5vw, 8rem);
        font-family: var(--ff-title);
        letter-spacing: 5px;
        color: var(--clr-secondary);
    }

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    input{
        width: clamp(250px, 25%, 30%);
        height: clamp(25px, 2vw, 2.5rem);
        border-radius: 5px;
        font-size: clamp(1rem, 2vw, 8rem);
        outline: none;
        border: none;
    }

    input[type="number"]::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }

    label{
        font-size: clamp(1.25rem, 2vw, 8rem);
        font-family: var(--ff-title);
        font-weight: var(--wg-bolder);
        color: var(--clr-primary);
    }

    button{
        padding: .2em 2em;
        border-radius: 5px;
        font-size: clamp(1rem, 2vw, 8rem);
        font-family: var(--ff-title);
        background: var(--bg-input);
        color: var(--clr-secondary);
        border: none;
    }

    button:hover{
        background: var(--bg-white);
        color: var(--clr-primary);
    }
`;