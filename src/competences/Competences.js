import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import "bootstrap/dist/css/bootstrap.min.css";
import "./competencesStyle.css";
// import competBgImg from "../assets/bodyBgImg.jpg"

class Competences extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            display:"",
            color:'#060606',
            pourcentage:"",
            titre:"Cliquer sur les logos",
            colorh6:"",
            durationHtml5:"", durationCss3:"", durationBoot:"",  durationJs:"", durationReact:"", durationNode:"",
            durationPhp:"", durationSymfony:"", durationWordpress:"", durationLaravel:"",
        }
    }
    showCompetence=(e)=>{
        e.preventDefault();
       let myIcone = (e.currentTarget.dataset.id);
       // console.log(myIcone);
       switch (myIcone) {
           case "html5":
               this.setState({
                   color:'orange',
                   pourcentage:"80%",
                   titre:"HTML5",
                   colorh6:"#ffffff",
                   durationHtml5:0
               });
               break;
           case "css3":
               this.setState({
                   color:"blue",
                   pourcentage:"75%",
                   titre:"CSS3",
                   colorh6:"#ffffff",
                   durationCss3:0
               });
               break;
           case "bootstrap":
               this.setState({
                   color:"purple",
                   pourcentage:"65%",
                   titre:"BOOTSTRAP",
                   durationBoot:0
               });
               break;
           case "js":
               this.setState({
                   color:"#F0DB4F",
                   pourcentage:"65%",
                   titre:"JAVASCRIPT",
                   colorh6:"#000000",
                   durationJs:0
               });
               break;
           case "react":
               this.setState({
                   color:"#61DBFB",
                   pourcentage:"65%",
                   titre:"REACT.JS/REACT NATIVE",
                   durationReact:0
               });
               break;
           case "node":
               this.setState({
                   color:"#68A063",
                   pourcentage:"60%",
                   titre:"NODE-JS",
                   durationNode:0
               });
               break;
           case "php":
               this.setState({
                   color:"#5a267e",
                   pourcentage:"50%",
                   titre:"PHP",
                   colorh6:"#ffffff",
                   durationPhp:0
               });
               break;
           case "symfony":
               this.setState({
                   color:"#615a61",
                   pourcentage:"55%",
                   titre:"SYMFONY",
                   colorh6:"#ffffff",
                   durationSymfony:0
               });
               break;
           case "laravel":
               this.setState({
                   color:"#ea7a25",
                   pourcentage:"40%",
                   titre:"LARAVEL",
                   colorh6:"#ffffff",
                   durationLaravel:0
               });
               break;
           case "wordpress":
               this.setState({
                   color:"#00749C",
                   pourcentage:"45%",
                   titre:"WORDPRESS",
                   colorh6:"#ffffff",
                   durationWordpress:0
               });
               break;
           default:
               this.setState({
                   pourcentage:"",
                   display:"block",
                   colorh6:"#a143e3",
                   durationPhp:5
               })
       }
        // this.setState({
        //     display:"block"
        // })
    }
    progressBar =()=>{
        return <div className="progressDiv" style={{display:this.state.display}}>
                    <div className="progress" style={{width:this.state.pourcentage, backgroundColor:this.state.color, display:this.state.display}}>
                        <h6 style={{color:this.state.colorh6}}>{this.state.titre} {this.state.pourcentage}</h6>
                    </div>
            </div>
    }
    render() {
        return (
            // <div className="container-fluid">
                <section className="resume-section"id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5"><strong>Compétences</strong></h2>
                        <div className="subheading mb-3 text-white"><strong>Langages de programmation, frameworks & librairies:</strong> </div>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="html5"><FaIcons.FaHtml5 className="iconHtml5" style={{animation:`rotation linear infinite ${this.state.durationHtml5}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="css3"><FaIcons.FaCss3 className="iconCss3" style={{animation:`rotation linear infinite ${this.state.durationCss3}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="bootstrap"><FaIcons.FaBootstrap className="iconBoot" style={{animation:`rotation linear infinite ${this.state.durationBoot}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="js"><FaIcons.FaJs className="iconJs" style={{animation:`rotation linear infinite ${this.state.durationJs}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="react"><FaIcons.FaReact className="iconReact" style={{animation:`rotation linear infinite ${this.state.durationReact}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="node"><FaIcons.FaNodeJs className="iconNode" style={{animation:`rotation linear infinite ${this.state.durationNode}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="php"><FaIcons.FaPhp className="iconPhp" style={{animation:`rotation linear infinite ${this.state.durationPhp}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="symfony"><FaIcons.FaSymfony className="iconSymfony" style={{animation:`rotation linear infinite ${this.state.durationSymfony}s`}}/></li>
                            {/* <li className="list-inline-item" onClick={this.showCompetence} data-id="laravel"><FaIcons.FaLaravel className="iconLaravel" style={{animation:`rotation linear infinite ${this.state.durationLaravel}s`}}/></li>
                            <li className="list-inline-item" onClick={this.showCompetence} data-id="wordpress"><FaIcons.FaWordpress className="iconWordpress" style={{animation:`rotation linear infinite ${this.state.durationWordpress}s`}}/></li> */}
                        </ul>
                        <div className="subheading mb-3 text-white">
                            <strong>Niveau de maitrise</strong>
                            {/*<p style={{color:"#ffffff", fontWeight:"bold"}}>Cliquer sur les logo de langages</p>*/}
                        </div>
                        <div className="allProgressBar">
                            {this.progressBar()}
                        </div>
                        <p className="pCompetences">En plus de ce que j'ai appris en formation, j'essaie de faire de la veille technologique pour rester à jour, améliorer mes compétences et apprendre d'autres technologies </p>
                        <ul className="listCopetences">
                        <div>
                            <h4 className="text-white" style={{}}>Compétences en cours d'acquisition</h4>
                            <ul>
                                <li ><FaIcons.FaJava className="javaIcon" style={{}}/></li>
                                <li><FaIcons.FaAndroid className="androideIcon" style={{}}/></li>
                                <li><SiIcons.SiCsharp className="csharpIcon" style={{}}/></li>
                                <li><DiIcons.DiDotnet className="dotnetIcon" style={{}}/></li>
                            </ul>

                        </div>
                        </ul>
                        <h4 className="text-white">Compétences linguistiques</h4>
                        <ul className="listCopetences">
                            <li>
                                <strong>Anglais</strong>: niveau intermidiaire, technique.
                            </li>
                            <li>
                                <strong>Arabe</strong>: Tres bonne maîtrise : lu, écrit et parlé.
                            </li>
                        </ul>
                    </div>
                </section>
            // </div>
        )
    }
}

export default Competences;
