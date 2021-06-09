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
                    Après cinq mois de formation suivis de deux mois de stage en entreprise (NUMERILIS, Paris) je viens de valider le titre professionnel de dévelopeur web et web mobile (niveau bac +2) au sein de centre de formation Nextformation Paris.<br/>
                    Vous découvrirez dans ce portfolio, mes compétences et mon parcours ainsi que les projets que j'ai réalisé pendant et après ma formation et stage, dont ce mini-site qui sera régulierement mis à jours.<br/>
                    Je suis à  la recherche d'une alternannce en entreprise ou d'un contrat de professionnalisation.
                    Si vous avez des questions, n'hésitez pas à me contacter.</p>
            </div>
        )
    }
}
export default Apropos;
