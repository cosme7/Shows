import React, {Component} from "react";
import styled from "styled-components";
import ErrorImg from "../components/Assets/error_01.jpg"

export const ImgError = styled.img`
    width: 35%;
    margin: 1rem 30%;
`;

export default class Error extends Component{
    render(){
        return(
            <ImgError src={ErrorImg} />
        )
    }
}