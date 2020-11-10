import PropTypes from "prop-types"
import React from "react"
import {Container, Row, Col } from 'react-bootstrap';


const Footer = () => {

    return(

        <footer>
            <Container>
                <Row>
                    <Col md={6}> Column 1</Col>
                    <Col md={6}> Column 2</Col>
                </Row>
            </Container>  
        </footer>
    )

}


export default Footer