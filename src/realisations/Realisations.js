import React from "react";
import "./reslisaStyle.css";
import memoryPic from "../assets/memoryPic.png";
import fruits from "../assets/fruitslegumes.png";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player';



const Realisations = () => {
    return (
        <div className="realisations">
            <h2 className="mb-5"><strong>Réalisations</strong></h2>
           <p className="pRealisations">Ce futur portfolio est ma première réalisation totalement personnelle et sans aucun template, (développé sous REACT-JS/HTML5/CSS3/BOOTSTRAP et bientôt de PHP pour la partie back-end pour d'autres fonctionnalités, quand au formulaire il est fonctionnelle grâce à une API développée en NODEJS qui utilise le service d'une autre API de mailing (SENDGRID), la partie front est déployée sur NETLIFY et le back(API) sur HEROKU).<br/> Pendant la formation j'ai participé à la réalisations
               de certaines applications de gestion de tâches et de contacts, jeux et animations en Javascript, mini applications mobiles vitrines en Reacte-native mais c'etait en travail de groupe et TP donc pas des réalisations à 100% personnelles.<br/>
               cette partie sera allimenteé pendant et après la formation(prévue jusqu'à mars 2021.</p>
            <div className="row">
                <div className=" memory m-2">
                    <div className="card shadow-sm">
                        <h6>Memory-sim</h6>
                        <img id="imgMemo" src={memoryPic} alt="capture"/>
                        <p id="pMemory">Memory game en javascript <Link to={{pathname: "https://memory-sim.boudromar.com/"}} target="_blank"><FaIcons.FaExternalLinkAlt style={{color:"#daef0a"}}/></Link></p>
                    </div>
                </div>
                <div className=" memory m-2">
                    <div className="card shadow-sm">
                        <h6>Calendrier FRUITS & LÉGUMES</h6>
                        <img id="imgMemo" src={fruits} alt="calendrierfruits"/>
                        <p id="pMemory">Appli sous Symfony <Link to={{pathname: "https://fruits-calendar.herokuapp.com/"}} target="_blank"><FaIcons.FaExternalLinkAlt style={{color:"#daef0a"}}/></Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="seresa m-2">
                    <h6>Application mobile React Native/Redux/API REST WordPress</h6>
                    <div>
                        <p id="pMemory">Application réalisée lors de mon stage de formation pour un client de l'entreprise</p>
                    </div>
                    <div className="card1 shadow-sm">
                        <p className="text-white text-center">Démonstration de la partie patient</p>
                        <ReactPlayer style={{margin:'auto', padding:5}} controls={true}
                                     url='https://portfo-video.boudromar.com/screen-recor-seresa2-expo-go_yGHabUbh.mp4'
                                     width='300px'
                                     height='150px'
                        />
                    </div>
                    <div className="card1 shadow-sm">
                        <p className="text-white text-center">Démonstration de la partie kiné</p>
                        <ReactPlayer style={{margin:'auto', padding:5}} controls={true}
                                     url='https://portfo-video.boudromar.com/screen-record1-seresa1-035329-expo-go_ayIiXLfJ.mp4'
                                     width='300px'
                                     height='150px'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations;
