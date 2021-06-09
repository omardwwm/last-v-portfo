import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import "./footerStyle.css";
import {NavLink} from "react-router-dom";


class Footer extends React.Component {


    render() {
        return (
            <footer className="container-fluid d-flex footer justify-content-center align-items-center bg-light py-2 text-white">
                {/*<div >*/}
                    <span>&copy; 2020 Omar BOUDRAA Portfolio.</span>
                    <span className="ml-2 mr-2">|</span>
                    <span>Tous droits réservés.</span>
                    <span className="ml-2 mr-2">|</span>
                    <NavLink style={{color:"#ffffff"}} to="/">Mentions légales.</NavLink>
                    <div className="social-icons2 d-flex ">
                        <a className="social-icon2 icon-linked2"
                           href="https://www.linkedin.com/in/omar-boudraa-75818039/">
                            <FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a className="social-icon2 icon-git2" href="https://github.com/omardwwm">
                            <FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                {/*</div>*/}
            </footer>
        );
    }
}


export default Footer;