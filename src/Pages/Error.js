import React, {Component} from "react";
import styled from "styled-components";
import ErrorImg from "../components/Assets/error_01.jpg"

export const Div = styled.div`
    width: 100%;
    padding: 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;


    h2{
        font-size: clamp(2rem, 3vw, 4rem);
        font-family: var(--ff-title);
        color: var(--clr-secondary);
        text-align: center;
    }

    img{
        width: 35%;
    }

    @media screen and (max-width: 720px){
        img{
            width: 100%;
        }
    }
`;

export default class Error extends Component{
    render(){
        return(
            <Div>
                <h2>Error Page sorry for the inconvinience!</h2>
                <img src={ErrorImg} alt="XD"/>
            </Div>
        )
    }
}