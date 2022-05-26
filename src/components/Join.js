import React from "react";
import Form from 'react-bootstrap/Form';

function Join() {
    return (
          <section className="join">
                <div className="text">
                    <h1 className="jointhe">Join the <span className="fun">fun.</span></h1>
                </div>
                <div className="formulario">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button>Join Now</button>
                    </Form>
                </div>
            </section>
    );
  }
  
  export default Join;