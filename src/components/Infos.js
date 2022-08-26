import styled from "styled-components";

export const Img = styled.img`
    flex: .25;
    
    @media screen and (max-width:720px){
        width: 100%;
    }
`;

export const Rank = styled.h2`
    grid-area: 1 / 2 span;
    font-size: clamp(1.2rem, 4vw, 4rem);
    font-family: var(--ff-title);
    color: var(--clr-primary);

    @media screen and (max-width:720px){
        grid-area: 1 / 1; 
        align-self: center;
    }
`;

export const Title = styled.h2`
    font-size: clamp(1.5rem, 2.5vw, 3rem);
    font-family: var(--ff-title);
    letter-spacing: 2px;
    color: var(--clr-secondary);

    @media screen and (max-width:720px){
        grid-area: 2 / 2 span; 
        text-align: center;
        align-self: center;
        color: var(--clr-mobile);
    }
`;

export const Date = styled.h4`
    justify-self: end;
    font-size: clamp(0.75rem, 1.5vw, 3rem);
    font-family: var(--ff-title);
    color: var(--clr-secondary);

    span{
        color: var(--clr-primary);
    }

    @media screen and (max-width:720px){
        grid-area: 1 / 2; 
        align-self: center;
        color: var(--clr-mobile);
    }
`;

export const Overview = styled.p`
    grid-area: 3 / 2 span;
    align-self: center;
    font-size: clamp(0.625rem, 1.2vw, 2rem);
    font-family: var(--ff-txt);
    letter-spacing: 2px;
    line-height: 150%;
    color: var(--clr-secondary);

    @media screen and (max-width:720px){
        font-weight: var(--wg-bolder);
        color: var(--clr-mobile);
        text-align: center;
    }
`;

export const Score = styled.h4`
    align-self: center;
    font-size: clamp(0.75rem, 1.5vw, 3rem);
    font-family: var(--ff-title);
    color: var(--clr-secondary);

    span{
        color: var(--clr-primary);
    }

    @media screen and (max-width:720px){
        grid-area: 4 / 1;
        color: var(--clr-mobile);
    }
`;


export const Vote = styled.h4`
    align-self: center;
    justify-self: end;
    font-size: clamp(0.75rem, 1.5vw, 3rem);
    font-family: var(--ff-title);
    color: var(--clr-secondary);

    span{
        color: var(--clr-primary);
    }

    @media screen and (max-width:720px){
        grid-area: 4 / 2;
        color: var(--clr-mobile);
    }
`;    