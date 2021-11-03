import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../styles/index.css";
import './App.css';
import NavigationBar from "./NavigationBar/NavigationBar";
import Parcours from "./parcours/Parcours";
import Apropos from "./apropos/Apropos";
import Competences from "./competences/Competences";
import Realisations from "./realisations/Realisations";
// import {Layout} from "./Layout";
import Jumbotron from "./jumbotron/Jumbotron";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Calendrier from "./calendar/Calendrier";
import Horloge from "./horloge/Horloge";


function App() {
  return (
      <React.Fragment>
          <Jumbotron/>

          <BrowserRouter>
              <NavigationBar/>
              <div className="mySwitch row">
                  <div className="col-9">
                      <Switch>
                          <Route exact path="/" component={Apropos} />
                          <Route path="/apropos" component={Apropos} />
                          <Route path="/parcours" component={Parcours} />
                          <Route path="/competences" component={Competences} />
                          <Route path="/realisations" component={Realisations}/>
                          <Route path="/contact" component={Contact}/>
                      </Switch>
                  </div>
                  <div className="divCalendrier col-3 pt-3">
                      <Calendrier/>
                      <Horloge/>
                  </div>
              </div>
              {/*<Layout>*/}


              {/*</Layout>*/}
              <Footer/>
          </BrowserRouter>

      </React.Fragment>

  );
}

export default App;
