import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Welcome = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Welcome!    </h1>
                <p>
                    This is a wiki website for the new Megaman game!<br/>
                    8-bit graphics, megaman, techonology, pictures and words!
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Welcome;
