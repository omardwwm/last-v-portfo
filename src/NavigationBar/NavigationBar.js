import React, {useState} from "react";
// import bgImg from "../../assets/navBarBrPic.png";
// import "popper.js/dist/popper";
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from "react-router-dom";
// import {Nav, Navbar, Collapse} from "react-bootstrap";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
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
    const [isOpen, setIsOpen] =useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeNavBar =(e)=>{
        if(isOpen && ! e.target.classList.contains('navbar-toggler')){
          setIsOpen(false);
        console.log('testCloseNavBar')
        }
        
      }
    return (
        <Navbar expand="lg" dark color="dark">
            <NavbarBrand href="/"><strong className="titreBrand">Développeur web junior</strong></NavbarBrand>
            <NavbarToggler aria-controls="responsive-navbar-nav" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar activeKey={location.pathname}>
                    <NavLink className="nav-link" exact to="/apropos" onClick={closeNavBar}>À propos</NavLink>
                    <NavLink className="nav-link" exact to="/parcours" onClick={closeNavBar}>Parcours</NavLink>
                    <NavLink className="nav-link" exact to="/competences" onClick={closeNavBar}>Compétences</NavLink>
                    <NavLink className="nav-link" exact to="/realisations" onClick={closeNavBar}>Réalisations</NavLink>
                    <NavLink className="nav-link" exact to="/contact" onClick={closeNavBar}>Contact</NavLink>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
const NavigationBar = withRouter(MyNavbar);
export default NavigationBar;

// export default NavigationBar;
