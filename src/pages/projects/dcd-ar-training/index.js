import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";

import React from "react";

export const DCDARTraining = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Plushie Brand Design{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Plushie Brand Design</h1>
            <h5>Branding Designer,    Diaper stork,    Jun.2025-Sep.2025</h5>
          </Col>
        </Row>
        <div className="project-content">
          <Row className="mb-5">
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/uwXqfI2rLhnB8FXU9x7j1nCdSw.png?scale-down-to=4096&width=4324&height=6072"
                alt="AR Training Interface"
                className="img-fluid rounded project-image"
              />
            </Col>
            <Col lg="6">
              <h3>Project Overview</h3>
              <p>
                As the branding and visual designer for Diaper Stork, I led the creation of the full brand identity from concept through implementation. My work involved building the visual system (logo, color, typography), enforcing WCAG accessibility standards, and driving the adoption of a modular design system across all touchpoints. This effort was validated by early user testing, which showed a 92% approval rate for the new brand direction.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h3>Design Process</h3>
              <Row>
                <Col lg="6">
                  <img
                    src="https://framerusercontent.com/images/oYoMFOnArOgSn0plDx3PIalfU.png?width=1600&height=1333"
                    alt="Motion tracking in AR"
                    className="img-fluid rounded project-image mb-3"
                  />
                </Col>
                <Col lg="6">
                  <h4>Market Research</h4>
                  <p>We started by mapping the competitive landscape and listening deeply to target users. Through competitor matrices and JTBD / empathy mapping, we discovered that users prioritize emotional reassurance and brand trust over feature lists. That insight anchored our direction: the visual identity must feel as comforting as it is credible.</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h4>Emotive Palette</h4>
              <p>My role was to distill the emotional tone of the brand into visuals. I curated moodboards around warmth, softness, and inclusivity, then led alignment sessions to converge on one unified visual mood: gentle gradients, rounded line work, clean structure. That emotional anchor guided all downstream design decisions.
              </p>
            </Col>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/Fe5ZGdmGeklD91w8fL8Ni6xqns.png?scale-down-to=2048&width=2332&height=754"
                alt="Real-time motion detection"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

          <Row>
            <Col lg="6">
               <img
                src="https://framerusercontent.com/images/oYoMFOnArOgSn0plDx3PIalfU.png?width=1600&height=1333"
                alt="Motion tracking in AR"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
              <Col lg="6">
                <h4>Brainstorming & Logo Sketching</h4>
                <p>From core brand words (like stork, connection, growth), I sketched dozens of logo ideas. We filtered with criteria—scalability, recognition, emotional fit—and evolved toward a balanced symbol: part wing / part abstract mark. This symbol felt meaningful without being overly literal.</p>
              </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h4>Logo & Graphic Asset Creation</h4>
              <Row>
                <Col lg="8">
                  <p>I refined the mark into multiple versions (full logo, icon, single-color) and created complementary graphic assets. The negative space, stroke weight, and spacing were tuned so the logo felt intentional and “breathe-able.” The supporting graphics drew from wing-inspired motifs, giving visual extension.
                  </p>
                </Col>
                <Col lg="4">
                  <img
                    src="https://framerusercontent.com/images/fojag5IXTWnkBzHAt7aKicSGIoo.png?width=1778&height=1526"
                    alt="Research findings"
                    className="img-fluid rounded project-image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
               <img
                src="https://framerusercontent.com/images/oYoMFOnArOgSn0plDx3PIalfU.png?width=1600&height=1333"
                alt="Motion tracking in AR"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
              <Col lg="6">
                <h4>Typography System</h4>
                <p>I selected a primary and secondary typeface that balance softness and legibility. Then I defined hierarchy rules—heading, body, caption—with spacing, alignment, and contrast in mind. The goal is to create a reading experience that feels calm yet clear, never crowded.</p>
              </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h4>Color Narrative</h4>
              <Row>
                <Col lg="8">
                  <p>From mood to usability, I distilled a palette with primary, accent, and neutral colors, then generated accessible variants. Using WCAG contrast checks, I refined until each combination remained readable in real-world conditions. The color system became a functional emotional scaffold.
                  </p>
                </Col>
                <Col lg="4">
                  <img
                    src="https://framerusercontent.com/images/qW9CbMSgIgAEDez8eYBlHpaBFM.png?width=1940&height=1150"
                    alt="Research findings"
                    className="img-fluid rounded project-image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
               <img
                src="https://framerusercontent.com/images/CTOOKsvddsnuRk4RbJg3JuWXUPA.png?width=1226&height=1498"
                alt="Motion tracking in AR"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
              <Col lg="6">
                <h4>Brand In Wild</h4>
                <p>I expanded the visual identity onto social, packaging, banners, and physical touchpoints. I created templates and mockups to test brand consistency across digital and print. The result: a cohesive presence that reads as one brand, whether on screen or in-hand.</p>
              </Col>
          </Row>
          

        </div>
      </Container>
    </HelmetProvider>
  );
};