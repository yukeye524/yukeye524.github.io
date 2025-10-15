import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import Picture1 from "../../../assets/images/Picture1.png"

import React, { useState } from "react";

export const PaperReviewAssistant = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Face-to-Face Plus | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Face-to-Face Plus</h1>
            <h5>Product Manager Intern, Aixuexi Tech, Apr. 2025-Aug. 2025</h5>
          </Col>
        </Row>
        <div className="project-content">
          <div className="project-section">
            <div className="project-overview-section">
              <Row className="mb-5">
                <Col lg="12">
                  <h3>Project Overview</h3>
                </Col>
              </Row>
              <div className="overview-image-container">
                <img
                  src="https://framerusercontent.com/images/jvcDfNmpIeWsRfZVod5Sa8YOIOc.png?scale-down-to=2048&width=2926&height=1367"
                  alt="Paper Review Assistant Screenshot"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/jvcDfNmpIeWsRfZVod5Sa8YOIOc.png?scale-down-to=2048&width=2926&height=1367", "Paper Review Assistant Screenshot")}
                />
              </div>
              <div className="overview-text-container">
                <p>
                  Face-to-Face Plus was reviving in-person teaching after COVID, but teacher quality varied greatly — especially among novices. I led the discovery and definition phase for the "lesson preparation" module, identifying that the real gap wasn't a lack of content but a lack of guided rehearsal and feedback. My work reframed the product direction from "content delivery" to "closing the preparation–performance gap" through standardized workflows and scalable feedback loops.
                </p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <Row className="mb-5">
              <Col lg="12">
                <h3>Design Process</h3>
              </Col>
            </Row>
            <div className="image-text-section">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/dx16ZAvCzcHEmWx57EgXXifCiE.png?width=1286&height=1174"
                  alt="Feature demonstration"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/dx16ZAvCzcHEmWx57EgXXifCiE.png?width=1286&height=1174", "Feature demonstration")}
                />
              </div>
              <div className="text-container">
                <h4>Stakeholder Mapping</h4>
                <p>I joined with a vague mandate—"work on lesson preparation for Face‑to‑Face Plus." Instead of waiting for clarity, I made my own. I scheduled 1:1s across product lines to map how content, pedagogy, ops, and engineering really worked together. Those chats cracked open the market reality: post‑COVID, in‑person learning is back, but veteran teachers exited, and quality is uneven. If tech can standardize prep and lighten teacher load, we could lift outcomes at scale. This wasn't small talk; it was my shortcut to institutional memory, decision makers, and the constraints I'd eventually have to design around.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section reverse">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/RWJg3ojviyTBLTx62TS7cpjjw.png?scale-down-to=2048&width=2392&height=1412"
                  alt="Technical architecture"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/RWJg3ojviyTBLTx62TS7cpjjw.png?scale-down-to=2048&width=2392&height=1412", "Technical architecture")}
                />
              </div>
              <div className="text-container">
                <h4>User Interview</h4>
                <p>
                  Based on interviews with 17 teachers, I identified that novices lack feedback, creating blind spots, while teaching effectiveness varies greatly. Two practices proved universally helpful: observing expert lessons and personal rehearsal. The current system's fragmented UX hinders preparation, leading me to reframe our problem from "providing more content" to "guiding practice, simulating lessons, and closing the feedback loop."
                </p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/1ag1PpyHjSbr3yJidHMUgvbAD9w.png?width=1716&height=1480"
                  alt="Contextual Observation"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/1ag1PpyHjSbr3yJidHMUgvbAD9w.png?width=1716&height=1480", "Contextual Observation")}
                />
              </div>
              <div className="text-container">
                <h4>Contextual Observation</h4>
                <p>I shadowed real classes and joined teacher rehearsals. In great lessons, timing, questioning, and concept builds were crisp; in weaker ones, the same concepts dragged or derailed. 串讲 was gold—peer critique refined pacing and explanations—but there was no system to capture, standardize, or scale that learning. That's when "simulate + feedback" became a must‑have, not a nice‑to‑have.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section reverse">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/cghCsIf59uSSIgfS2QWJnK1o3Cs.png?scale-down-to=2048&width=2288&height=1748"
                  alt="Pain Point Analysis"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/cghCsIf59uSSIgfS2QWJnK1o3Cs.png?scale-down-to=2048&width=2288&height=1748", "Pain Point Analysis")}
                />
              </div>
              <div className="text-container">
                <h4>Pain Point & HMW Analysis</h4>
                <p>Based on the insights I gained from interview and Observation, I used "How might we questions" to focus the team:</p>
                <p>- HMW help teachers rehearse and get feedback before class?</p>
                <p>- HMW standardize "what good looks like" without killing autonomy?</p>
                <p>- HMW connect materials ↔ personalization ↔ delivery ↔ review into one loop?</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/prmoBhYzc9TpTicGH3juNnPvFKw.png?width=1734&height=784"
                  alt="Concept Architecture"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/prmoBhYzc9TpTicGH3juNnPvFKw.png?width=1734&height=784", "Concept Architecture")}
                />
              </div>
              <div className="text-container">
                <h4>Concept Architecture</h4>
                <p>I proposed a three-part concept to directly address the drivers of teaching variance:</p>
                <p>- <span className="highlight-text">Dynamic Whiteboard</span>: Use guided animations to simplify complex explanations and reduce teachers' cognitive load.</p>
                <p>- <span className="highlight-text">Rehearsal Studio</span>: Allow teachers to practice, record, and receive pre-class feedback.</p>
                <p>- <span className="highlight-text">Data Feedback Loop</span>: Capture teaching signals like pacing and timing to shift improvement from content-based to behavior-based.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section reverse">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/4KwpBXdRV0Z43EGjVCIUkbW108.png?scale-down-to=2048&width=2290&height=1168"
                  alt="Journey Definition"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/4KwpBXdRV0Z43EGjVCIUkbW108.png?scale-down-to=2048&width=2290&height=1168", "Journey Definition")}
                />
              </div>
              <div className="text-container">
                <h4>Journey Definition</h4>
                <p>I framed the ideal teacher journey as Goal → Method → Evidence, creating a shared vision for scoping and identifying key product interventions at each stage:</p>
                <p>- <strong>Prep</strong>: Link courseware with personalization and establish clear goals upfront.</p>
                <p>- <strong>Rehearse</strong>: Simulate lesson delivery to capture performance data, like timing and question patterns, for feedback.</p>
                <p>- <strong>Teach</strong>: (Later phase) Visualize live pacing to guide in-class delivery.</p>
                <p>- <strong>Review</strong>: Summarize behavioral signals and provide recommendations for the next preparation cycle.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/loZwn2WpfbF1xStoLL9LIr5pDT0.png?scale-down-to=2048&width=2614&height=1270"
                  alt="RICE Prioritization"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://framerusercontent.com/images/loZwn2WpfbF1xStoLL9LIr5pDT0.png?scale-down-to=2048&width=2614&height=1270", "RICE Prioritization")}
                />
              </div>
              <div className="text-container">
                <h4>Prioritization with RICE</h4>
                <p>Using the RICE framework, I prioritized our initiatives into a sequenced roadmap designed for rapid learning:</p>
                <p>- <strong>Now</strong>: Fix the fragmented prep workflow and launch a Dynamic Whiteboard MVP, targeting high reach and impact with lower effort.</p>
                <p>- <strong>Next</strong>: Build the Simulation Studio, a medium-effort feature with high impact.</p>
                <p>- <strong>Later</strong>: Implement live in-class pacing visualization to connect our roadmap from preparation to delivery.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image-text-section reverse">
              <div className="image-container">
                <img
                  src={Picture1}
                  alt="Implementation Results"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal(Picture1, "Implementation Results")}
                />
              </div>
              <div className="text-container">
                <h4>Implementation & Results</h4>
                <p>The launch of the "Dynamic Blackboard" feature was successfully implemented in over 6,000 live classes. This initiative directly addressed key teacher pain points discovered through user research. The impact was significant, resulting in a <span className="highlight-text">25% reduction in lesson preparation time</span> and a <span className="highlight-text">doubling of the satisfaction rate among new teachers</span>.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <Row className="mb-5">
              <Col lg="12">
                <h3>Takeaway & Memorable Moments</h3>
              </Col>
            </Row>
            <div className="image-text-section">
              <div className="image-container">
                <img
                  src="https://picsum.photos/300/400?random=4"
                  alt="Project reflection"
                  className="img-fluid rounded project-image clickable-image"
                  onClick={() => openImageModal("https://picsum.photos/300/400?random=4", "Project reflection")}
                />
              </div>
              <div className="text-container">
                <p>In one observation, I saw two teachers teach the same topic with opposite results. Instead of jumping to "we need more content," I stopped and asked myself: What's the variable here? How can I prove it?
                </p>
                <p>I traced it back, tested my assumption with more observations and interviews, and confirmed it wasn't about the materials — it was about preparation habits and feedback loops.
                </p>
                <p>That moment reminded me why I thrive in product work: I don't just accept the first explanation. I break it down, validate it, and only then commit to a direction — even if it means challenging the initial consensus.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* 图片模态框 */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="image-modal-img"
            />
            <div className="image-modal-caption">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </HelmetProvider>
  );
};