import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderPage = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: relative;

  h1 {
    font-size: clamp(1.5rem, 2.65vw, 3.2rem);
    font-family: var(--ff-title);
    letter-spacing: 5px;
    color: var(--clr-primary);
  }

  h1:hover {
    color: var(--clr-secondary);
  }

  label{
    cursor: pointer;
  }

  nav {
    grid-area: 1 / 2;
    flex: 1;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  li {
    width: 100px;
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-family: var(--ff-txt);
    font-weight: var(--wg-light);
    color: var(--clr-secondary);
    text-transform: uppercase;
  }

  li:hover {
    font-weight: var(--wg-bold);
    color: var(--clr-primary);
  }

  div {
    grid-area: 1 / 3;
    display: flex;
    align-items: center;
    justify-self: end;
    gap: 0.3rem;
    border-radius: 50px;
    background: var(--bg-input);
    border: 5px solid #d52834;
  }

  input{
    flex: .5;
    height: 30px;
    font-size: clamp(0.75rem, 1vw, 1.1rem);
    font-family: var(--ff-txt);
    border-radius: 50px;
    outline: 5px solid #d52834;
    border: none;
  }

  input::placeholder{
    padding-left: 0.5rem;
    font-size: 0.75rem;
    font-family: var(--ff-txt);
    font-weight: var(--wg-light);
    color: black;
  }

  button{
    flex: .5;
    border-radius: 0 50px 50px 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  img{
    width: 20px;
    height: 30px;
  }

  span,
  span::before,
  span::after{
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: var(--bg-input);
    position: relative;
    display: none;
  }

  span::before,
  span::after{
    content: '';
    position: absolute;
  }

  span::before{
    top: .45rem;
  }

  span::after{
    bottom: .4rem;
  }

  @media screen and (max-width:720px){
    border-radius: 100px 100px 0 0;
    background: var(--bg-body);
    
    div{
       display: none;  
    }

    nav{
      grid-area: 1 / 3;
      justify-self: flex-end;
    }

    ul{
        width: 100%;
        padding: 1rem;
        border-radius: 0 0 40px 40px;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
        background: var(--bg-body);
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 9999;
        transform: scale(1,0);
        transform-origin: top;
        transition: transform 250ms ease-in-out;
    }

    li{
      width: 100%;
    }

    li:hover{
      color: var(--clr-secondary);
    }

    span,
    span::before,
    span::after{
      display: block;
    }
  }
`;

export const InputMenu = styled.input`
  display: none;

  :checked ~ ul{
    transform: scale(1,1);
    transition: opacity 250ms ease-in-out 250ms;
  }
`;

export const LinkStyle = styled(Link)`
  @media screen and (max-width:720px){
    width: 100%;
    border-radius: 50px;
    padding: 0.2rem 0;
    text-align: right;

    :hover{
      background: var(--bg-input);
    }
  }
`;