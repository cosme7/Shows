import React, { Component } from "react";
import { FooterStyle, Copyright } from "../styles/FooterStyle";
import LinkeDin from "../components/Assets/footer_01.png"
import GitHub from "../components/Assets/footer_02.png"
import Discord from "../components/Assets/footer_03.png"
import Facebook from "../components/Assets/footer_04.png"
import Copy from "../components/Assets/footer_05.svg"

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <FooterStyle>
                    <h3>FlopFlix™</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/cosme-da-silva-leite-08baa3219/" target="_blank" rel="noreferrer">
                            <img src={LinkeDin} alt="Linkedin" title="Linkedin" />
                        </a>
                        <a href="https://github.com/cosme7" target="_blank" rel="noreferrer">
                            <img src={GitHub} alt="GitHub" title="GitHub" />
                        </a>
                        <a href="https://www.facebook.com/cosmewr" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="Facebook" title="Facebook" />
                        </a>
                        <a href="Sr.Cosme#4761" target="_blank" rel="noreferrer">
                            <img src={Discord} alt="Whatsapp" title="Whatsapp" />
                        </a>
                    </div>
                </FooterStyle>
                <Copyright>
                    <img src={Copy} alt="copyright" />
                    <p>All Rights Reserved for Cosme da S. Leite</p>
                </Copyright>
            </footer>
        )
    }
}