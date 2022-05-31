import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";


function Join() {
    return (
        <>
        <section id='join'>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <div className="text-form">
                    <div className="text">
                        <h1 className="jointhe">Join the <span className="fun">fun.</span></h1>
                    </div>
                    <div className="formulario">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="name"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Button href="#join" className="button-join">Join Now</Button>
                        </Form>
                    </div>
                </div>
        </section>
        <footer>
            <Footer/>
        </footer>
        </>
        
    );
  }
  
  export default Join;