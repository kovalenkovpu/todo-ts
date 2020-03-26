import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Header.scss';

const Header: React.FC = () => (
  <Container
    className="themed-container header bg-dark text-center align-middle text-white p-1"
    fluid={true}
  >
    <Row>
      <Col md="12"><h2>Todo application on Typescript</h2></Col>
    </Row>
  </Container>
);

export default Header;
