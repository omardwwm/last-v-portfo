import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import validator from "validator";
import axios from "axios";
import {Redirect} from "react-router-dom";


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            redirect: false,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target);
        // let myEmailContact = this.state.email;
        // console.log(myEmailContact);

        this.setState({
            disabled: true
        });
        // let isEmailValid = validator.myEmailContact;
        // return isEmailValid;
        // console.log(isEmailValid);
        // axios.post('http://localhost:4040/api/email', this.state)

        axios.post('https://portfoapp.herokuapp.com/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true,
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .then(() => setTimeout(() => this.setState({ redirect: true }), 4000))
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }
    render() {
        if(this.state.redirect){
                return (<Redirect to={'/'}/>);
        }
        return (
            <div className="container-fluid p-4 text-white">
                <h3 className="text-center p-2">Formulaire de contact</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{width:"70%"}}>
                        <Form.Label htmlFor="full-name">Nom et prénom</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required={true}/>
                    </Form.Group>


                    <Form.Group style={{width:"70%"}}>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required={true}/>
                    </Form.Group>


                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} required={true}/>
                    </Form.Group>


                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Envoyer
                    </Button>


                    {this.state.emailSent === true && <p className="d-inline success-msg" style={{backgroundColor:"#67675f", color:"#f1ecec", marginLeft:"2rem", padding:"5px"}}>Message envoyé! Vous allez être rediriger vers l'accueil </p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Une erreur s'est produite</p>}
                </Form>
            </div>
        );
    }
}


export default Contact;