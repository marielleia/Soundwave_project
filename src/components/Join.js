import React from "react";
import Form from 'react-bootstrap/Form';

function Join() {
    return (
        <>
                <div className="text">
                    <h1 className="jointhe">Join the <span className="fun">fun.</span></h1>
                </div>
                <div className="formulario">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <button className="button-join">Join Now</button>

                    </Form>
                </div>
                </>
    );
  }
  
  export default Join;