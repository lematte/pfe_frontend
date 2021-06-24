import React, {useState, useEffect} from 'react';
import 'react-multi-carousel/lib/styles.css';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {Carousel} from 'react-responsive-carousel';
import {useSelector, useDispatch} from 'react-redux';
import {getcentreFormation} from '../../actions';

const divStyle = {
  width: '100%',
  height: '80vh',
  backgroundSize: 'cover',
};

const MultiCarouselPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcentreFormation());
  }, []);
  const F = useSelector((state) => state.centre_formation.centre_formation);
 // const u = useSelector((state) => state.centre_formation.user);

  return (
    <div className="container">
      <div className="container" style={{backgroundColor: '#f9faf9'}}>
        <div class="section-title-choseus">
          <br />
          Les Centres de formations{ /*u.map((U) => (U.Email))
          */}
        </div>
        <br />
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              id="courses"
              className="row courses"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {F.length > 0
                ? F.map((centre_formation) => (
                    <div
                      className="col-md-4 align-items-stretch"
                      style={{marginBottom: '30px'}}
                    >
                      <div
                        className="card"
                        key={centre_formation._id}
                        data-aos="fade-up"
                      >
                        <img
                          className="card-img-top"
                          variant="top"
                          src={centre_formation.Photo}
                          alt="Photo ..."
                        />
                        <div className="card-body course-content">
                          <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4>{centre_formation.Nom_centre}</h4>
                            <p>Téléphone :  {centre_formation.User.Téléphone}</p>
                          </div>
                          <h3>
                            <a href="course-details.html">
                              {centre_formation.Code_postal}
                            </a>
                          </h3>
                          <div class="trainer d-flex justify-content-between align-items-center">
                            <div class="trainer-profile d-flex align-items-center">
                              <img
                                src="assets/img/trainers/trainer-1.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <p className="card-text">
                                {'   '}{centre_formation.Nom_centre}
                              </p>
                            </div>
                            <div class="trainer-rank d-flex align-items-center">
                              4.7 &nbsp; <FaStar />
                              &nbsp;&nbsp; &nbsp;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : 'Aucun Formation dans la base de donnes'}
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    /*
          <IconContext.Provider value={{color: '#de8832'}}>
 <div className="container">
        <div className="row">
          {' '}
          <div class="section-title-choseus">
            <span>Les Centres de formations</span>
          </div>
          <hr className="container" />
        </div>
        <br/>
        <div
          id="courses"
          className="row courses"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {F.length > 0
            ? F.map((centre_formation) => (
                <div
                  className="col-md-4 align-items-stretch"
                  style={{marginBottom: '30px'}}
                >
                  <div className="card" key={centre_formation._id} data-aos="fade-up">
                    <img
                      className="card-img-top"
                      variant="top"
                      src={centre_formation.Photo}
                      alt="Photo ..."
                    />
                    <div className="card-body course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>{centre_formation.Nom_centre}</h4>
                        <p>Téléphone : { }</p>
                      </div>
                      <h3>
                        <a href="course-details.html">
                          {centre_formation.Code_postal}
                        </a>
                      </h3>
                      <div class="trainer d-flex justify-content-between align-items-center">
                        <div class="trainer-profile d-flex align-items-center">
                          <img
                            src="assets/img/trainers/trainer-1.jpg"
                            class="img-fluid"
                            alt=""
                          />
                          <p className="card-text">{centre_formation.Type} </p>
                        </div>
                        <div class="trainer-rank d-flex align-items-center">
                          4.7 &nbsp; <FaStar />
                          &nbsp;&nbsp; &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              ))
            : 'Aucun Formation dans la base de donnes'}
        </div>
            </div>
           
                </IconContext.Provider>
               
*/
  );
};

export default MultiCarouselPage;
