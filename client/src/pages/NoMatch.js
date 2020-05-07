// this file provides code for the response to a query that doesn't return any books
// import React for rendering, and the Col, Row and Container elements in 'Grid.js'
import React from "react";
import { Col, Row, Container } from "../components/Grid";
// import the Jumbotron component
import Jumbotron from "../components/Jumbotron";

// this function returns the JSX elements to be rendered
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
