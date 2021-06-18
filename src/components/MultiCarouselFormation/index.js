import React, {useState, useEffect} from 'react';
import 'react-multi-carousel/lib/styles.css';
import imag from '../../assets/img/course-details.jpg';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';

import {useSelector, useDispatch} from 'react-redux';
import {getFormation} from '../../actions';

const divStyle = {
  width: '100%',
  height: '80vh',
  backgroundSize: 'cover',
};

const MultiCarouselPage = () => {
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
          <span id="justify-content-center"> formation </span>
        </div>
        <br />

        <div
          id="courses"
          className="row courses"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {F.length > 0
            ? F.map((formation) => (
                <div
                  className="col-md-4 align-items-stretch"
                  style={{marginBottom: '30px'}}
                >
                    <div
                      className="card"
                      key={formation._id}
                      data-aos="fade-up"
                    >
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
                          <a href="course-details.html">
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
                            <p className="card-text">{formation.Type} </p>
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

      {/* 
        <section id="courses" class="courses">
      <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="course-item">
              <img src={imag} class="img-fluid" alt="..."/>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Web Development</h4>
                  <p class="price">$169</p>
                </div>

                <h3><a href="course-details.html">Website Design</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
                    <span>Antonio</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                   4.7 &nbsp; <FaStar/>
                 
                    &nbsp;&nbsp;
                   &nbsp; 
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

</div>
</section> */}
    </IconContext.Provider>
  );
};

export default MultiCarouselPage;
