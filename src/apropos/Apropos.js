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
                    Actuellement admis dans un parcours de formation en alternannce/contrat de professionnalisation au sein de l'école 3WA sur une durée de 12 mois pour dévelopeur fullstack JS ou 24 mois (c-a-d 12 mois supplémentaires) pour un CDA (concepteur dévelopeur d'applications), le tout pour valider un diplôme de niveau Bac +3/4, 
                    En mars dernier et après cinq mois de formation suivis de deux mois de stage en entreprise (NUMERILIS, Paris) j'ai' validé le titre professionnel de dévelopeur web et web mobile (niveau bac +2) au sein de centre de formation Nextformation Paris.<br/>
                    Vous découvrirez dans ce portfolio, mes compétences et mon parcours ainsi que les projets que j'ai réalisé pendant et après ma formation et stage, dont ce mini-site qui sera régulierement mis à jours.<br/>
                    Je suis donc a la recherche d'une entreprise pour accomplir mon projet professionnel.
                    Si vous avez des questions, n'hésitez pas à me contacter.
                </p>
            </div>
        )
    }
}
export default Apropos;
