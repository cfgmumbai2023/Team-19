import React from 'react'
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const check = () => {
    const src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  return (
    <div>
        <Row>
        <Col style={{alignItems:"left"}}>
         <Container/>
         <video controls width="100%">
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="">
        <div
          className="col d-flex justify-content-center "
          style={{ scrollBehavior: "smooth" }}
        >
          <Card className="text-center" style={{ width: "80rem" }}>
            <Card.Header>Transcript</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                ad alias impedit, quidem, earum distinctio quam nam culpa
                delectus quod facere architecto velit! Repellat obcaecati iure
                consequatur cum et, laudantium odio. Voluptates atque facilis
                dolores commodi non aliquid eligendi accusamus temporibus
                officiis possimus autem veniam illum, optio laborum esse, fugiat
                rem officia expedita consequatur? Iste ullam, laudantium ea
                laboriosam ratione eveniet similique enim, recusandae quasi
                maiores, quo eius omnis! Voluptate repudiandae fugiat
                consectetur neque unde exercitationem eligendi hic et ut!
                Voluptas consequatur rem laborum porro! Officia quis cumque
                sequi ex, repellat asperiores veritatis accusamus quia. Iste rem
                necessitatibus soluta vero architecto ut maxime doloremque
                ducimus laboriosam, veniam explicabo in, adipisci atque impedit?
                Magni ex vel, blanditiis culpa porro consequatur commodi modi
                mollitia debitis laborum dolor nihil? Quis fuga deserunt aliquam
                corporis fugit minima doloremque soluta quibusdam cupiditate
                distinctio, suscipit magnam a earum dolorem laborum voluptas
                eaque quia eius dicta repudiandae. Ratione, laborum
                reprehenderit. Id expedita, adipisci quia voluptatum nulla
                repellat totam commodi magni alias repudiandae nobis, in quo
                sapiente, ipsum asperiores veritatis quam dolores doloribus
                earum ut quos dignissimos vero accusantium praesentium. Porro
                alias voluptates cum ipsam quaerat blanditiis magnam ex
                obcaecati numquam, at error eveniet officiis, facilis, atque
                odio repudiandae esse? Facilis nemo labore esse tempora
                blanditiis impedit totam neque? Enim sunt reprehenderit
                repellat, facere rerum incidunt sed totam impedit illum nisi
                quae sint quam soluta distinctio ullam. Deserunt mollitia
                expedita omnis deleniti quam, blanditiis ex hic nisi, incidunt
                ipsa amet iure eveniet aliquid. Blanditiis iste ab aliquid
                magni!
              </Card.Text>
            </Card.Body>
            
          </Card>
        </div>
      </div>
        </Col>
        <Col md="auto ">
         
        </Col>
        
      </Row>
    </div>
  )
}

export default check