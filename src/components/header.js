import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container, Row, Col } from 'react-bootstrap';
import Logo from "./logo"
import "../components/assets/css/header.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare,FaYoutubeSquare } from "react-icons/fa";

 

const Header = ({ siteTitle }) => (
  <header>
    <section id="header">
        <Container>
          <Row>
            <Col md={3}>
              <div className="logo">
                <Logo/>
              </div>
            </Col>
            <Col md={9}>
                <div className="menu">
                <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/">Category</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/">Page</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/">About</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/">contact</Link>
                        </li>
                        

                    </ul>
                </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
                <div className="bigHi text-center">
                    <h1>Hi</h1>
                </div>
                <div className="caption text-center">
                    <h2>I am Tariq Mushtaq I am Front end developer <br></br> base in Karachi, Pakistan</h2>
                </div>
                <div className="social-media">
                  <ul className="social-media-list list-inline">
                      <li className="list-inline-item">
                        <a href=""><FaFacebookSquare/></a>
                      </li>
                      <li className="list-inline-item">
                        <a href=""><FaInstagram/></a>
                      </li>
                      <li className="list-inline-item">
                        <a href=""><FaLinkedin/></a>
                      </li>
                      <li className="list-inline-item">
                        <a href=""><FaTwitterSquare/></a>
                      </li>
                      <li className="list-inline-item">
                        <a href=""><FaYoutubeSquare/></a>
                      </li>
                  </ul>
                </div>
            </Col>
          </Row>
        </Container>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
