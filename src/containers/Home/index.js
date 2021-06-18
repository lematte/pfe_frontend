import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';
import Carousel from '../../components/Landing';
import MultiCarouselPage from '../../components/MultiCarouselFormation/index';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import Carousel2 from '../../components/Carousel2';
import Layout from '../../components/Layout';

function Home(props) {
  return (
    <>
      <Layout>
        <Carousel />
        <Container>
          <br />
          <div>
            <MultiCarouselPage />
            <Carousel2 />
            <br />
          </div>
        </Container>
      </Layout>
    </>
  );
}
export default Home;
