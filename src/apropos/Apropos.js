import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./aproposStyle.css";

//
class Apropos extends React.Component{
    render() {
        return(
            <div className="presentationStyle">
                <h2>A Propos de moi</h2>
                <p style={{color:"#b09f63"}}>
                    Site en cours de développement...
                </p>
                <p className=" presentation p-2">
                    Actuellement (depuis le 27 août 2021) en formation à DORANCO Paris ou je prépare un titre professionnel CDA, concepteur dévelopeur d'applications de niveau Bac+3/4. 
                    En mars dernier et après cinq mois de formation suivis de deux mois de stage en entreprise (NUMERILIS, Paris) j'ai' validé le titre professionnel de dévelopeur web et web mobile (niveau bac +2) au sein de centre de formation Nextformation Paris.<br/>
                    Vous découvrirez dans ce portfolio, mes compétences et mon parcours ainsi que les projets que j'ai réalisé pendant et après ma formation et stage, dont ce mini-site qui sera régulierement mis à jours.<br/>
                    Je suis à la recherche d'un stage de minimum deux mois à partir du 5 mars 2022 pour avalider mon titre.
                    Si vous avez des questions, n'hésitez pas à me contacter.
                </p>
            </div>
        )
    }
}
export default Apropos;
