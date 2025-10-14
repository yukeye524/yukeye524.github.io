import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";

import React from "react";

export const PaperReviewAssistant = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Paper Review Assistant | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Paper Review Assistant</h1>
          </Col>
        </Row>
        <div className="project-content">
          <Row className="mb-5">
            <Col lg="6">
              <img
                src="https://picsum.photos/600/400?random=1"
                alt="Paper Review Assistant Screenshot"
                className="img-fluid rounded project-image"
              />
            </Col>
            <Col lg="6">
              <h3>Project Overview</h3>
              <p>
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
              <p>
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h3>Key Features</h3>
              <Row>
                <Col lg="6">
                  <img
                    src="https://picsum.photos/500/300?random=2"
                    alt="Feature demonstration"
                    className="img-fluid rounded project-image mb-3"
                  />
                </Col>
                <Col lg="6">
                  <ul className="feature-list">
                    <li>Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa</li>
                    <li>Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa</li>
                    <li>Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa</li>
                    <li>Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h3>Technical Implementation</h3>
              <p>
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
              <p>
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
            </Col>
            <Col lg="6">
              <img
                src="https://picsum.photos/500/350?random=3"
                alt="Technical architecture"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h3>Results and Impact</h3>
              <Row>
                <Col lg="8">
                  <p>
                    Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                    aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
                  </p>
                  <p>
                    Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa
                    aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
                  </p>
                </Col>
                <Col lg="4">
                  <img
                    src="https://picsum.photos/300/400?random=4"
                    alt="Project results"
                    className="img-fluid rounded project-image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

        </div>
      </Container>
    </HelmetProvider>
  );
};