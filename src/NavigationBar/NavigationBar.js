import React from "react";
// import bgImg from "../../assets/navBarBrPic.png";
// import "popper.js/dist/popper";
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import "./navBarStyle.css";


// class NavigationBar extends React.Component{
//     render() {
//         return (
//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                     <Navbar.Brand href="/"><strong className="titreBrand">Développeur web junior</strong></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link href="/apropos">Apropos</Nav.Link>
//                             <Nav.Link href="/parcours">Parcours</Nav.Link>
//                             <Nav.Link href="/competences">Compétences</Nav.Link>
//                             <Nav.Link href="/realisations">Réalisations</Nav.Link>
//                             <Nav.Link href="/contact">Contact</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//         );
//     }
// }
const MyNavbar = props => {
    const { location } = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><strong className="titreBrand">Développeur web junior</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" activeKey={location.pathname}>
                    <NavLink className="nav-link" exact to="/apropos">À propos</NavLink>
                    <NavLink className="nav-link" exact to="/parcours">Parcours</NavLink>
                    <NavLink className="nav-link" exact to="/competences">Compétences</NavLink>
                    <NavLink className="nav-link" exact to="/realisations">Réalisations</NavLink>
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
const NavigationBar = withRouter(MyNavbar);
export default NavigationBar;

// export default NavigationBar;
