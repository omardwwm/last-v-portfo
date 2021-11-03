import React from 'react';
import "./parcoursStyle.css";
import * as FaIcons from "react-icons/fa";

class Parcours extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          opacityZero:"0", opacity1:"0", opacity2:"0", opacity3:"0", opacity4:"0", opacityPlus:"0",
            timeZero:"", time1:"", time2:"", time3:"", time4:"", timePlus:"",
            timeAnimZero:"", timeAnim1:"", timeAnim2:"", timeAnim3:"", timeAnim4:"", timeAnimPlus:"",
            countAnimZero:"infinite", countAnim1:"infinite", countAnim2:"infinite", countAnim3:"infinite", countAnim4:"infinite", countAnimPlus:"infinite",
            iconDisplay1:"", iconDisplay2:"", iconDisplay3:"", iconDisplay4:"", iconDisplay5:"", iconDisplayPlus:""
        }
    }
    showFormation = (e) => {
        let currentElement = (e.currentTarget.dataset.id);
        console.log(currentElement);
        switch (currentElement) {
            case "2021":
                this.setState({
                    opacityPlus:"1", timePlus:"0", timeAnimPlus:"5", countAnimPlus:1, iconDisplayPlus:"none"
                });
                break;
            case "2020":
                this.setState({
                    opacityZero:"1", timeZero:"0", timeAnimZero:"5", countAnimZero:1, iconDisplay1:"none"
                });
                break;
            case "2009-2011":
                this.setState({
                    opacity1:"1", time1:"0", timeAnim1:"5", countAnim1:2, iconDisplay2:"none"
                });
                break;
            case "2008-2009":
                this.setState({
                    opacity2:"1", time2:"0", timeAnim2:"5", countAnim2:3, iconDisplay3:"none"
                });
                break;
            case "2002-2007":
                this.setState({
                    opacity3:"1", time3:"0", timeAnim3:"5", countAnim3:4, iconDisplay4:"none"
                });
                break;
            case "2002":
                this.setState({
                    opacity4:"1", time4:"0", timeAnim4:"5", countAnim4:5, iconDisplay5:"none"
                })
        }
    }
    render() {
        return (
            <div className="container-fluid pageFormations">
                <div className="container p-2">
                        <h2>Mes formations</h2>
                    <div className="row">
                        <div className="container formations">
                            <h5 className="titreFormation" data-id="2021" onClick={this.showFormation} style={{ animation:`lighton ${this.state.timeZero}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplayPlus}}/>Depuis Août 2021</h5>
                            <p className="textFormation" style={{ opacity: `${this.state.opacityPlus}`, animation:` glissement ${this.state.countAnimPlus} ${this.state.timeAnimPlus}s`}}>
                                Concepteur Développeur d'applications (DORANCO Paris).
                            </p>
                        </div>
                        <div className="container formations">
                            <h5 className="titreFormation" data-id="2020" onClick={this.showFormation} style={{ animation:`lighton ${this.state.timeZero}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplay1}}/>Août 2020-mars 2021</h5>
                            <p className="textFormation" style={{ opacity: `${this.state.opacityZero}`, animation:` glissement ${this.state.countAnimZero} ${this.state.timeAnimZero}s`}}>
                                Développeur Web et Web Mobile (Nextformation Paris).
                            </p>
                        </div>
                       <div className="container formations">
                           <h5 className="titreFormation" data-id="2009-2011" onClick={this.showFormation} style={{ animation:`lighton ${this.state.time1}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplay2}}/>2009-2011</h5>
                           <p className="textFormation" style={{ opacity: `${this.state.opacity1}`, animation:` glissement ${this.state.countAnim1} ${this.state.timeAnim1}s`}} >
                               Niveau DU, diplôme d’université (valdation de la prtie théorique), ergonomie et analyse de travail (université Pierre et Marie Curie UPMC Paris 6).
                           </p>
                       </div>
                        <div className="container formations ">
                            <h5 className="titreFormation" data-id="2008-2009" onClick={this.showFormation} style={{ animation:`lighton ${this.state.time2}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplay3}}/>2008-2009</h5>
                            <p className="textFormation" style={{ opacity: `${this.state.opacity2}`, animation:` glissement ${this.state.countAnim2} ${this.state.timeAnim2}s`}} >
                                Niveau master ingénierie et management en sécurité globale appliquée (université de technologie de Troyes).
                            </p>
                        </div>
                        <div className="container formations ">
                            <h5 className="titreFormation" data-id="2002-2007" onClick={this.showFormation} style={{ animation:`lighton ${this.state.time3}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplay4}}/>2002-2007</h5>
                             <p className="textFormation" style={{ opacity: `${this.state.opacity3}`, animation:` glissement ${this.state.countAnim3} ${this.state.timeAnim3}s`}}>
                                 Ingénieur en hygiène et sécurité industrielle, (université de Batna, Algérie) (comparabilité ENIC-NARIC : Diplôme de
                                 niveau I de la nomenclature française et niveau 7 du cadre européen des certifications) .
                            </p>
                        </div>
                        <div className="container formations">
                            <h5 className="titreFormation" data-id="2002" onClick={this.showFormation} style={{ animation:`lighton ${this.state.time4}s`}}><FaIcons.FaRegHandPointDown style={{display:this.state.iconDisplay5}}/>2002</h5>
                             <p className="textFormation" style={{ opacity: `${this.state.opacity4}`, animation:` glissement ${this.state.countAnim4} ${this.state.timeAnim4}s`}}>
                                 BAC sciences exactes (Jijel, Algérie).
                             </p>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default Parcours;
