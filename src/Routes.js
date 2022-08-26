import React, {Component} from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Shows from "./Pages/Shows";
import Error from "./Pages/Error"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class Rotas extends Component{
      
    render(){
      return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Movies' element={<Movies />} />
                <Route path='/Shows' element={<Shows />} />
                <Route path= '*' element={<Error />} />
            </Routes>
        </Router> 
      );
    }
  }