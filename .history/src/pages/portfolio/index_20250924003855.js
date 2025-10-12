import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";
import BiFocalNet from "../../assets/research/BiFocalNet.png";
import bibm1 from "../../assets/research/bibm1.png";
import yolo5 from "../../assets/research/yolo5.png";
import newResearch from "../../assets/research/new_research.png"; // 替换为您的新图片文件名


export const Portfolio = () => {

  var imglist=[BiFocalNet, bibm1, yolo5]
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Research | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>📚 Selected Publications </h3>{" "}
            
          </Col>
        </Row>
        <div className="">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="researchBox">
                <div>
                  <img className="img_research" src={imglist[i]} alt="d"></img>
                </div>
                <div className="description">
                  <h5>{data.title}</h5>
                  <h6>
                    {Array.isArray(data.authors) 
                      ? data.authors.map((author, index) => (
                          <React.Fragment key={index}>
                            {author.bold ? <strong>{author.name}</strong> : author.name}
                            {index < data.authors.length - 1 && ", "}
                          </React.Fragment>
                        ))
                      : data.authors
                    }
                  </h6>
                  <h6>{data.conference}</h6>
                  <div>
                    <p>{data.description}</p>
                    {data.coming && <a className="d"> coming soon </a>}
                    {data.doi && (
                      <>
                        <a className="d" href={data.doi}>DOI</a>
                        {(data.video || data.project || data.code || data.notes) && ' | '}
                      </>
                    )}
                    {data.video && (
                      <>
                        <a className="d" href={data.video}>Video</a>
                        {(data.project || data.code || data.notes) && ' | '}
                      </>
                    )}
                    {data.project && <a className="d" href={data.project}>Project Code</a>}
                    {data.project && (data.notes || data.code) && ' | '}
                    {data.notes && <span className="d">{data.notes}</span>}
                    {data.notes && data.code && ' | '}
                    {data.code && <span className="d">{data.code}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <p style={{marginBottom: '40px'}}> .......etc.   For more publications, please visit my <a href="https://scholar.google.com/citations?user=POepUzkAAAAJ&hl=en"> Google Scholar </a></p> */}
      </Container>
    </HelmetProvider>
  );
};
