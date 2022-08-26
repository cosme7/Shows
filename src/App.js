import React, {Component} from "react";
import {GlobalStyle} from "./GlobalStyles";
import Routes from "./Routes";
import Footer from "./Pages/Footer";

export default class App extends Component{
  render(){
    return (
      <>
        <GlobalStyle />
        <Routes />
        <Footer /> 
      </>
    );
  }
}