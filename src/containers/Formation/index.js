import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getFormation} from '../../actions/index';
import 'react-multi-carousel/lib/styles.css';

function Formation(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormation());
  }, []);
  const F = useSelector((state) => state.Formation.Formation);
  const m = useSelector((state) => state.Formation.message);

  return (
    <IconContext.Provider value={{color: '#de8832'}}>
      <div className="container">
        <div className="row">
          {' '}
          <h1 id="justify-content-center"> formation </h1>
        </div>
        <br />
        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100" >
        <div class="swiper-wrapper">
        <div
          id="courses"

          className="row courses"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {F.length > 0
            ? F.map((formation) => (
              <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                
                <div
                  className="col-md-4 align-items-stretch"
                  style={{marginBottom: '30px'}}>
                  <div className="card" key={formation._id} data-aos="fade-up">
                    <img
                      className="card-img-top"
                      variant="top"
                      src="./assets/img/classes/class-5.jpg"
                      alt="Photo ..."
                    />
                    <div className="card-body course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>{formation.Libelle}</h4>
                        <p class="price">${formation.Prix}</p>
                      </div>
                      <h3>
                        <a href="/details_formation">
                          {formation.Description}
                        </a>
                      </h3>
                      <div class="trainer d-flex justify-content-between align-items-center">
                        <div class="trainer-profile d-flex align-items-center">
                          <img
                            src="assets/img/trainers/trainer-1.jpg"
                            class="img-fluid"
                            alt=""
                          />
                          <p className="card-text">{formation.Formateur.Nom}{'  '} {formation.Type} </p>
                        </div>
                        <div class="trainer-rank d-flex align-items-center">
                          4.7 &nbsp; <FaStar />
                          &nbsp;&nbsp; &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div></div></div>
              ))
            : 'Aucun Formation dans la base de donnes'}
        </div>
        </div> </div>
      </div>
    </IconContext.Provider>
  );
}

export default Formation;
