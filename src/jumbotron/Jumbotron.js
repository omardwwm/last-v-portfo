import React from 'react';
import Mypic from "../assets/cv-omar.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./jumboStyle.css";
import * as FaIcons from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import cvPdf from "../assets/OMAR_BOUDRAA_DWWM_CV.pdf";
// import {faCalendar} from "@fortawesome/free-solid-svg-icons";


class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container containerJumbo">
                    <h1>En reconversion professionnelle développeur web et web mobile</h1>
                    <div className="row header">
                        <div className="divImg col-3">
                            <img className="myPic" src={Mypic} alt="photoDeOmar-cv"/>
                        </div>
                        <div className="mesInfo col-7">
                            <h5 className="nomPrenom"><strong>Omar BOUDRAA</strong><br/></h5>
                            <p>Adresse: xx rue xxxx xxxxx<br/></p>
                            <p>93400 Saint-Ouen-Sur-Seine<br/></p>
                            <p>Tel: 06 27 82 23 72<br/></p>
                            <a className="mail" href="mailto:boudraa.omar@gmail.com"><strong>boudraa.omar@gmail.com</strong></a><br/>
                            <a className="lienCv" href={cvPdf} download="../assets/OMAR_BOUDRAA-DWWM_CV.pdf"><FaIcons.FaFileDownload className="iconCv"/> CV en PDF</a>
                        </div>

                        <div className="social-icons col-1 ">
                            <a className="social-icon icon-linked"
                               href="https://www.linkedin.com/in/omar-boudraa-75818039/">
                                <FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a className="social-icon icon-git" href="https://github.com/omardwwm">
                               <FontAwesomeIcon icon={faGithub}/></a>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default Jumbotron;
