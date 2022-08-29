import React, {Component} from "react";
import { HeaderPage, InputMenu} from "../styles/HeaderStyle"
import search from "../components/Assets/search_01.svg";
import { Link } from "react-router-dom";


export default class Header extends Component{

  state = {
      begin: "Home",
      movies: "Movies",
      shows: "Shows"
  }
    
  render(){
    return (
      <>
     <header>
        <HeaderPage>
          <Link to='/'><h1>FlopFlix™</h1></Link>
          <nav>
            <InputMenu type="checkbox" id="nav-toggle" />
            <label for="nav-toggle">
              <span></span>
            </label>
            <ul>
              <Link to='/'><li>{this.state.begin}</li></Link>
              <Link to='/Movies'><li>{this.state.movies}</li></Link>  
              <Link to='/Shows'><li>{this.state.shows}</li></Link>  
            </ul>
          </nav>  
          <div>
            <input type="text" placeholder="Search" />
            <button>
              <img src={search} alt="search" />
            </button>
          </div>
        </HeaderPage>
      </header> 

      </>
    );
  }
}