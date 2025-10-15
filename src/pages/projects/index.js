import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { meta, projectportfolio } from "../../content_option";


import React from "react";
import paper from "../../assets/project/paper.png";
import interview from "../../assets/project/interview.png";
import dcd from "../../assets/project/dcd.png";


const imgMap = {
  paper: paper,
  interview: interview,
  dcd: dcd,
};

const projectRoutes = {
  paper: "/projects/paper-review-assistant",
  interview: "/projects/interview-assistant",
  dcd: "/projects/dcd-ar-training",
};

export const Projects = () => {


  return (
    <HelmetProvider>
      <Container className="About-header" style={{maxWidth: '1100px'}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>👩‍💻 Software Tools & Projects </h3>{" "}
          </Col>
        </Row>
        <div className="">
                  {projectportfolio.map((data, i) => {
            return (
              <div key={i} className="researchBox">
                <div>
                  <Link to={projectRoutes[data.img]}>
                    <img className="img_research" src={imgMap[data.img]} alt={data.title}></img>
                  </Link>
                </div>
                <div className="description">
                  <h5>
                    <Link to={projectRoutes[data.img]} className="project-title-link">
                      {data.title}
                    </Link>
                  </h5>
                  <div>
                    <p>{data.description}</p>
                    {[
                      data.github && <a className="d" href={data.github}>github</a>,
                      data.website && <a className="d" href={data.website}>website</a>,
                      data.paper && <a className="d" href={data.paper}>paper</a>,
                      data.project && <a className="d" href={data.project}>Project</a>,
                      data.notes && <span className="d">{data.notes}</span>,
                      data.code && <span className="d">{data.code}</span>
                    ].filter(Boolean).map((item, index, array) => (
                      <React.Fragment key={index}>
                        {item}
                        {index < array.length - 1 && ' | '}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
