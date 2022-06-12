import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css'

export const Login = () => {
  return (
    <>
    <div className='container-form'>
      <h1 className='h1'>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
    </>
  )
}
