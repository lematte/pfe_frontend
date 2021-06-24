import React from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Layout from '../../components/Layout';
function Centre_formation() {
  return (
    <Layout>
    <div>
      <section class="choseus-section spad">
        <div class="container">
          <div class="row">

            <div class="col-lg-12">
              <div class="section-title-choseus">
                <span>Les Centres</span>
                <h2>LES Centres </h2>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="./assets/img/classes/class-5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Nom : Centre </Card.Text>
                  <Card.Text>Some quick</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-4 col-md-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="./assets/img/classes/class-5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Nom : Centre </Card.Text>
                  <Card.Text>Some quick</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div class="col-lg-4 col-md-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="./assets/img/classes/class-5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Nom : Centre </Card.Text>
                  <Card.Text>Some quick</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="./assets/img/classes/class-5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Nom : Centre </Card.Text>
                  <Card.Text>Some quick</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div class="col-lg-6 col-md-6">
              <Card>
                <Card.Img
                  variant="top"
                  src="./assets/img/classes/class-5.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Nom : Centre </Card.Text>
                  <Card.Text>Some quick</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
export default Centre_formation;
