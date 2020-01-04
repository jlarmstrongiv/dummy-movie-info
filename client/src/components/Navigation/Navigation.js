import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Nav>
            <Nav.Item>
                <LinkContainer to="/movies">
                    <Nav.Link>Movies</Nav.Link>
                </LinkContainer>
            </Nav.Item>

            <Nav.Item>
                <LinkContainer to="/directors">
                    <Nav.Link>Directors</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/actors">
                    <Nav.Link>Actors</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="http://trailerstudy.herokuapp.com/3405">Trailer Studdy Example</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
};

export default Navigation;

    
/*{ <Nav>
  <Nav.Item>
    <LinkContainer to="/movies">
        <Nav.Link>Movies</Nav.Link>
    </LinkContainer>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>Something</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>Link</Nav.Link>
  </Nav.Item>
</Nav> }*/





