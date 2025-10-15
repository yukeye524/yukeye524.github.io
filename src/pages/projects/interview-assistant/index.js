import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import features from "../../../assets/project/features.png"

import React from "react";

export const InterviewAssistant = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Investa - Confidence Investing | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Investa - Confidence Investing</h1>
            <h5>Passion Project</h5>
          </Col>
        </Row>
        <div className="project-content">
          <Row className="mb-5">
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/T87GD8rs2xXFGF42Us4znYAtj0.png?width=1772&height=1034"
                alt="Interview Assistant Interface"
                className="img-fluid rounded project-image"
              />
            </Col>
            <Col lg="6">
              <h3>Project Overview</h3>
              <p>I designed a gamified, emotionally intelligent fintech app for beginner investors — balancing AI-powered tutoring, social features, and bite-sized learning to reduce fear and build financial confidence.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h3>Features</h3>
              <Row>
                <Col lg="6">
                  <img
                    src="https://framerusercontent.com/images/mtqpYtb61OQlJtZJ37tlcZuk7g.png?width=1636&height=1232"
                    alt="Real-time speech processing"
                    className="img-fluid rounded project-image mb-3"
                  />
                </Col>
                <Col lg="6">
                  <h4>AI Tutor — A Calm Companion That Helps Me Think, Not Just Act</h4>
                  <p>I designed our AI tutor to be proactive and emotionally responsive, making it feel more like a friendly mentor than a machine. Instead of simply reacting with facts, it uses a kind and curious tone, asks clarifying questions, and engages users with a custom avatar and interactive prompts. The focus was on designing its personality and pacing, not just its logic.</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h4>Gamified Microlearning — Confidence, One Tiny Step at a Time</h4>
              <p>Inspired by Duolingo and motivational psychology, I integrated a gamified learning system into the AI tutor to foster a sense of mastery. The system provides visible feedback for micro-progress, uses quizzes to unlock badges and other rewards, and offers supportive, emotional feedback even on incorrect answers. This approach was designed not just for fun, but to give users a safe way to build confidence through small, incremental steps.
              </p>
            </Col>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/NSKwDS2neEmXdHSArXRTWLNoiI.png?width=1276&height=612"
                alt="Technology architecture"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/AgMa2voOkFh01kYx6H3Ci0lTbAc.png?width=1102&height=614"
                alt="Real-time speech processing"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
            <Col lg="6">
              <h4>Emotion-Centered Community — Designing for Deliberate Connection</h4>
              <p>To create a space that rewards thoughtfulness over speed, I focused on designing for decision-making comfort. To prevent information overload and encourage intentional participation, I organized the community into thematic spaces, used visual filters to reduce noise, and implemented a "flag for later" feature, allowing users to engage at their own pace.</p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h3>Design Process</h3>
              <Row>
                <Col lg="8">
                  <h4>Lean UX Canvas</h4>
                  <p>Inspired by my own intimidation with investing, I hypothesized that the primary barrier for beginners is not complexity, but a lack of emotional safety. I translated this personal insight into a lean UX canvas, mapping out different user realities to envision what a truly "friendly" and supportive investing experience might look like.
                  </p>
                </Col>
                <Col lg="4">
                  <img
                    src="https://framerusercontent.com/images/Fv6WbjjUzynw2L76eEGGYGP9QRU.png?scale-down-to=2048&width=2532&height=846"
                    alt="User interface design"
                    className="img-fluid rounded project-image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/Z9lBJnJNLNJuykMXeilwHb4ieM.png?width=1536&height=1024"
                alt="Real-time speech processing"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
            <Col lg="6">
              <h4>User Research - Interview</h4>
              <p>My interviews with 8 beginner investors revealed the core problem wasn't a lack of understanding, but a profound lack of self-trust. Overwhelmed by fragmented information and fear, they struggled to emotionally process their decisions. This insight reframed the issue from a UI problem to a fundamental "trust gap."</p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h4>User Insights & Feature Positioning</h4>
              <p>My interview data also revealed that beginner investors crave clarity, not advice, to organize their thoughts and build trust in their own judgment. This insight led to the concept of an AI tutor designed not as a calculator, but as a calming presence. Its purpose is to listen, explain, and help users reflect on their decisions rather than simply react.</p>
            </Col>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/PYZZVuDY6n4XmMx0m1T354YYke4.png?width=1058&height=896"
                alt="Technology architecture"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/JdlmUZpZOjJYL7W8An6ZgHAYgk.png?width=1898&height=946"
                alt="Real-time speech processing"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
            <Col lg="6">
              <h4>Competitor Landscape</h4>
              <p>My competitive audit of five popular investing apps revealed a common blind spot. While designed for younger users with educational features, they consistently overwhelmed them with jargon, noisy community features, and a confusing mix of education and trading. This made it clear the core issue wasn't a lack of features, but a failure in prioritization and emotional pacing.</p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h4>UX Audit</h4>
              <p>My heuristic audit of top investing apps, simulating key tasks like searching for stocks and reading charts, revealed a consistent failure to answer critical user questions. This demonstrated that the core opportunity was not to offer more content, but to guide users more effectively. The apps didn't need more information—they needed better scaffolding.</p>
            </Col>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/NqkRDt8Cx7WAyyjWBHWBkKUGYo.png?width=1262&height=1484"
                alt="Technology architecture"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/Uon34DhUxDXX4VJhvXeYALZtR4s.png?width=1430&height=1204"
                alt="Real-time speech processing"
                className="img-fluid rounded project-image mb-3"
              />
            </Col>
            <Col lg="6">
              <h4>System Design</h4>
              <p>To reduce friction between exploration and action, I mapped the user flow across the three key modules: AI Tutor, Investing, and Community. I designed "micro-bridges"—contextual prompts like “Ask AI about this” or “Add to Watchlist”—to connect these spaces. This allows users to seamlessly turn ideas into action with minimal disruption.</p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <h4>Visual & Emotional Design</h4>
              <p>Financial apps feel cold. I wanted mine to feel like a conversation.</p>
              <p>I designed a low-pressure visual experience using a soft color palette, rounded corners, and ample white space, complemented by micro-rewards to celebrate progress. Most importantly, the product’s tone is consistently warm, calm, and non-judgmental, ensuring users feel supported and safe to try again, even after making a mistake.</p>
            </Col>
            <Col lg="6">
              <img
                src="https://framerusercontent.com/images/kBFNiSa8NbJdYbbBekBLobwMIE.png?width=1302&height=1004"
                alt="Technology architecture"
                className="img-fluid rounded project-image"
              />
            </Col>
          </Row>

        </div>
      </Container>
    </HelmetProvider>
  );
};