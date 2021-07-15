import React from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import CategoryContent from "./CategoryContent";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <CategoryContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
