import React from "react";
import { Grid, Row, Col } from "rsuite";
import Session from "../components/sessions/Session";
import blob from "../media/blob.svg";

const Home = () => {
  return (
    <div className="container">
      <img src={blob} alt="blob" className="blob-bg" />
      <div className="box">
        <Grid fluid>
          <Row className="row">
            <Col sm={24} md={12} className="col-1">
              <Session />
            </Col>
            <Col sm={24} md={12} className="col-2">
              <img
              
                src="https://img.freepik.com/free-vector/realistic-night-city-scape-with-skyscrapers-road-with-lights-from-cars-motion_212889-5370.jpg?size=626&ext=jpg"
                alt="city"
              />
              <div className="overlay-text">
                <div className="h1">
                  <i>Hoorrey</i>
                </div>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet vestibulum odio, vitae commodo turpis dapibus at.
                  Praesent pellentesque lorem in diam rhoncus, at scelerisque
                  ipsum ultricies.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
