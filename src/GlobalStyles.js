import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body{
    background: var(--bg-body);
  }

  :root{
    --bg-input: #d52834;
    --bg-white: #fff;
    --bg-body: black;
    //*
    --wg-bolder: bolder;
    --wg-bold: bold;
    --wg-normal: normal;
    --wg-light: lighter;
    //*
    --ff-title: 'Bebas Neue', cursive;
    --ff-txt: 'Inter', sans-serif;
    //*
    --clr-primary: #d52834;
    --clr-secondary: #fff;
    --clr-mobile: black;
  }

  //* SCROLLBAR 
  ::-webkit-scrollbar{
      width: .5em;
      height: 1em;
  }

  ::-webkit-scrollbar-track{
      background-color: var(--bg-input);
  }

  ::-webkit-scrollbar-thumb{
      background-color: var(--bg-body);
      border-radius: 5px;
      border: 5px solid var(--bg-body);
  }
`;