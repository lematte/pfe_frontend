import React from 'react';
import imagetest from '../../assets/img/hero-bg.jpg';
import imag from '../../assets/img/course-details.jpg'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const divStyle = {
  width: '100%',
  height: '80vh',
  backgroundSize: 'cover',
};
/*style={{ position: 'absolute',
    left: 0,
    rigth:0,
    }} */
const Landing = () => {
  return (
      <MDBCarousel  showControls showIndicators >
        <MDBCarouselInner  id="hero"  className="cover">
          <MDBCarouselItem itemId={0} className="cover">
            <MDBCarouselElement 
              src={imag}
              style={divStyle}
              style={{
                width: ' 100%',
                height: '80vh',
                //backgroundSize: 'cover',
                position: 'relative',
              }}
              alt="..."
            />

            <MDBCarouselCaption>
              <div
                className="cover"
                className="container position-relative"
                data-aos="zoom-in"
                data-aos-delay="100"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  right: 0,
                  backgroundSize: 'cover',
                  position: 'relative',
                }}
              >
                <h1 className="cover">
                  Learning Today,
                  <br />
                  Leading Tomorrow
                </h1>
                <a href="courses.html"  className="btn-get-started ">
                  Get Started
                </a>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement
              src={imagetest}
              style={{
                width: ' 100%',
                height: '80vh',
                backgroundSize: 'cover',
              }}
              alt="..."
            />

            <MDBCarouselCaption>
              <div
                className="container position-relative"
                data-aos="zoom-in"
                data-aos-delay="100"
                style={{position: 'absolute', left: 0, bottom: 0, right: 0}}
              >
                <h1>
                  Learning Today,
                  <br />
                  Leading Tomorrow
                </h1>
                <a href="courses.html" class="btn-get-started">
                  Get Started
                </a>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement
              src={imagetest}
              style={{
                width: ' 100%',
                height: '80vh',
              }}
              alt="..."
              id="hero"
            />
            <MDBCarouselCaption>
              <div
                className="position-relative"
                data-aos="zoom-in"
                data-aos-delay="100"
                style={{
                  position: 'absolute',
                  marginLeft: 5,
                  bottom: 0,
                  marginright: 0,
                  backgroundSize: 'cover',

                  position: 'relative',
                }}
              >
                <h3>
                  Third slide label
                  <br />
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </h3>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
};
export default Landing;
