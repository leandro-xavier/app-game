import React, { useEffect, useState } from 'react';
import './homepage.css'
import { Card,Button } from 'react-bootstrap';

const HomePage = () => {

  return (
    <>
      <div>
        <h1>Bienvenidos a GAME PTY</h1>
        <hr />
        <p>Inscribete para ver nuestros torneos</p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
    
                  <Card.Title>nombre</Card.Title>
               
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>
              <Button variant="dark">Ver Torneo</Button>
            </Card.Body>
          </Card>
      </div> 
    </>
  )
}

export default HomePage