import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiWordpress ,
  DiCss3 ,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5 ,
  SiBootstrap ,
  SiNextdotjs,
  SiTailwindcss ,
  SiPostgresql, SiExpress, SiMysql , SiSocketdotio 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress   />
      </Col>
    </Row>
  );
}

export default Techstack;
