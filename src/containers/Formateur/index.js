import React, {useState, useEffect}  from 'react'
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getFormateur} from '../../actions/index';
//import 'react-multi-carousel/lib/styles.css';

function Formateur() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormateur());
  }, []);
  const Formateur = useSelector((state) => state.Formateur.Formateur);
  const m = useSelector((state) => state.Formateur.message);

    return (
        <div>
          <IconContext.Provider value={{color: '#de8832'}}>
      <div className="container">
        <div className="row">
          {' '}
          <h1 id="justify-content-center">Formateur </h1>
        </div>
        <br />
        <div
          id="courses"
          className="row courses"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
            
        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100" >
        <div class="swiper-wrapper">
          {Formateur.length > 0
            ? Formateur.map((formateur) => (
              <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                
                <div
                  className="col-md-4 align-items-stretch"
                  style={{marginBottom: '30px'}}>
                  <div className="card" key={formateur._id} data-aos="fade-up">
                    <img
                      className="card-img-top"
                      variant="top"
                      src="./assets/img/classes/class-5.jpg"
                      alt="Photo ..."
                    />
                    <div className="card-body course-content">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4>{formateur.Prenom} {formateur.Nom} </h4>
                        <p class="price">{formateur.Etudes_effectuees}</p>
                      </div>
                      <h3>
                        <a href="#">
                          {formateur.Expériences}
                        </a>
                      </h3>
                      <div class="trainer d-flex justify-content-between align-items-center">
                        <div class="trainer-profile d-flex align-items-center">
                          <img
                            src="assets/img/trainers/trainer-1.jpg"
                            class="img-fluid"
                            alt=""
                          />
                          <p className="card-text">{formateur.Type} </p>
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
        </div>
    )
}
export default Formateur
