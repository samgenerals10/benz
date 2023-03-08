import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import imageceo1 from "../images_benz/imageceo1.webp"
import "../../src/styles.css"
import image2 from "../images_benz/image2.avif"
import "./Section.css" 
import sec1 from "../images_benz/sec1.avif"
import sec from "../images_benz/mes1.webp"


function Section1() {
  return (
    <>
    <div className='section'>
      <Container>
         <Row>
    <Col className="sectionStyle1">
    <h6>Zeitgeist</h6>
    <h3>Neon Legacy.</h3>
    <img src={imageceo1} className="img-rounded shadow p-3 mb-5 bg-white rounded ceo" width="70%"/>
    </Col>
    <Col className="sectionStyle2">
    <div></div>
    <h6>Sustainability</h6>
    <h3>Mercedes-Benz Sustainability Prize.</h3>
    <img src={image2}  width="70%"  height="60%" className="ceo2 shadow p-3 mb-5 rounded"/>
    </Col>
   </Row>

   <Row>
    <Col className="sectionStyle1">
    <h6>Exclusive</h6>
    <h4>Haute Voiture.</h4>
    <img src={sec1} width="70%" className=""/>
    </Col>
    <Col className="sectionStyle2">
    <h6>Sustainibility</h6>
    <h4>An auction to fund a global fellowship.</h4>
    <img src={sec} width="85%" height="90%" className=""/>
    </Col>
   </Row>
      </Container>
  
  </div>

   
  
    
    </>
  )
}

export default Section1;