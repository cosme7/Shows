import React, { Component } from "react";
import Background from "../components/Assets/movies-bg_01.jpg"
import { Section } from "../styles/HomeStyle"

export default class Home extends Component {
  render() {
    return (
      <>     
      <main>
        <Section>
          <h2>Welcome!</h2>
          <img src={Background} alt="" />
          <div>
            <label>Login: </label>
            <input type="text" name="name"/>
            <label>Password: </label>
            <input type="password" name="password"/>
          </div> 
          <button>Enter</button>
        </Section>
      </main>
      </>
    );
  }
}
