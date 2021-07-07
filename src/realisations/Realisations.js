import React from "react";
import memoryPic from "../assets/memoryPic.png";
import fruits from "../assets/fruitslegumes.png";
import wecook from "../assets/wecook.png";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player';
import {Image} from "react-bootstrap";
import "./reslisaStyle.css";



const Realisations = () => {
    return (
        <div className="realisations">
            <h2 className="mb-5"><strong>Réalisations</strong></h2>
            <p className="pRealisations">
                Ce portfolio est ma première réalisation totalement personnelle et sans template, (développée avec REACT-JS/HTML5/CSS3/BOOTSTRAP, le formulaire est fonctionnelle grâce à une API développée en NODEJS qui utilise le service d'une autre API de mailing (SENDGRID), la partie front est déployée sur NETLIFY et le back(API) sur HEROKU).Les fichiers (images et vidéos) de certains projets (ceux qui ont une base de données) sont stockés sur le service AWS S3.<br/>
                Cette partie sera alimentée et à jour régulièrement.<br/>
                Ci-dessous quelque unes de mes réalisations avec des liens pour celles deployées et des illustrations (vidéos) pour celles que j'ai pas pu déployer parce que realisées pour un client de l'entreprise pendant mon stage.
            </p>
            <div className="col">
                <div className="row">
                    {/* <div className="col"> */}
                        <div className="d-inline-block col-md-6 p-0">
                            <div className="card shadow-sm">
                                <h6>Memory-sim</h6>
                                <Image src={memoryPic} style={{height:'260px'}} alt="capture" fluid /> 
                                <p className="pMemory">Memory game en javascript <Link to={{pathname: "https://memory-sim-omar.netlify.app/"}} target="_blank">&nbsp;&nbsp;&nbsp;<p className="pMemory">Visiter</p><FaIcons.FaExternalLinkAlt style={{color:"#daef0a"}}/></Link></p>
                            </div>
                        </div>
                        <div className="d-inline-block col-md-6 p-0"> 
                            <div className="card shadow-sm">
                                <h6>Calendrier FRUITS/LÉGUMES</h6>
                                <Image src={fruits} style={{height:'260px'}} alt="calendrierfruits" fluid />
                                <p className="pMemory">Appli sous Symfony <Link to={{pathname: "https://fruits-calendar.herokuapp.com/"}} target="_blank">&nbsp;&nbsp;&nbsp;<p className="pMemory">Visiter</p><FaIcons.FaExternalLinkAlt style={{color:"#daef0a"}}/></Link>
                            </p>
                            </div>
                        </div>
                    {/* </div>    */}
                </div>
            </div>

            <div className="d-inline-block col mt-3">
                        <div className="card shadow-sm">
                            <h6>wecook, creation et partage des recettes de cuisine</h6>
                            <Image src={wecook} alt="capture ecrans site" fluid />
                            <p className="pMemory">Appli MERN (ReactJs/Redux, Express, NodeJS, MongoDB ) <Link to={{pathname: "https://wecook.netlify.app/"}} target="_blank">&nbsp;&nbsp;&nbsp;<p className="pMemory">Visiter</p><FaIcons.FaExternalLinkAlt style={{color:"#daef0a"}}/></Link>
                            </p>
                            <p className="pMemory">Déployée avec Heroku pour le backend (l'API), Netlify pour le frontend, MongoDb Atlas pour la base de données, et AWS S3 pour le stockage physique des images.</p>
                        </div>
                    </div>
            
            <div className="seresa mt-2">
                <h6>Application mobile React Native/Redux/API REST WordPress</h6>
                <p className="pMemory ">Application réalisée lors de mon stage de formation pour un client l'entreprise</p>
                <div className="row">
                    <div className="col-6 ">
                        <div className="card1  ">
                            <p className="text-white text-center">Démonstration de la partie patient</p>
                            <ReactPlayer style={{margin:'auto', padding:5}} controls={true}
                                        url='https://portfoli-omar-data.s3.eu-west-3.amazonaws.com/screen-recor-seresa2-patient.mp4'
                                        width='100%'
                                        height='300px' 
                                        fluid={true}
                            />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="card1 ">
                            <p className="text-white text-center">Démonstration de la partie kiné</p>
                            <ReactPlayer style={{margin:'auto', padding:5}} controls={true}
                                        url='https://portfoli-omar-data.s3.eu-west-3.amazonaws.com/screen-record-kine.mp4'
                                        width='100%'
                                        height='300px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations;
