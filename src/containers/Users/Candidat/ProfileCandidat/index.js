import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Navbar from '../../../../components/sidebar_candidat/Navbar';
import * as FaIcons from 'react-icons/fa';
import './index.css';
import photo from '../../../../assets/img/course-details-tab-4.png';
import Inpt from '../../../../components/Input/index';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateCandidat, getCandidatByIdUser} from '../../../../actions/index';

const Index = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //const usr = JSON.parse(window.localStorage.getItem('user'));

    if (localStorage.getItem('Candidat') == undefined) {
      return <Redirect to="/login" />;
    } else {
      <Redirect to="/candidat/profile" />;
    }
    // dispatch(getCandidatByIdUser(usr._id));
    //dispatch(getUserById(usr._id));
  }, []);
  if (localStorage.getItem('Candidat') == undefined) {
     <Redirect to="/login" />;
  } else {
    <Redirect to="/candidat/profile" />;
  }
  //const AuthCandidat = useSelector((state) => state.candidat.candidat);
  //const getuser = useSelector((state) => state.getUser.getUser);
  // const m = useSelector((state) => state.getUser.message);
  const AuthCandidat = JSON.parse(localStorage.getItem('Candidat'));
  //console.log(AuthCandidat.Nom);
  //console.log(AuthCandidat);
  //console.log(getuser);
  //console.log(candidate.Nom);

  // const email = getuser.Email;
  // const prenom = getuser.Prenom;
  // const nom = getuser.Nom;
  // const téléphone = getuser.Téléphone;
  // const idcardnumber = getuser.IDcardnumber;
  // const ville = getuser.Ville;
  // const photo = getuser.Photo;
  // const genre = getuser.Genre;
  // const pays = getuser.Pays;

  const [show, setShow] = useState(false);
  const [prenom, setPrenom] = useState(AuthCandidat.Prenom);
  const [email, setEmail] = useState(AuthCandidat.User.Email);
  const [genre, setGenre] = useState(AuthCandidat.Genre);
  const [téléphone, setTéléphone] = useState(AuthCandidat.User.Téléphone);
  const [idcardnumber, setIDcardnumber] = useState(
    AuthCandidat.User.IDcardnumber
  );
  const [ville, setVille] = useState(AuthCandidat.User.Ville);
  const [nom, setNom] = useState(AuthCandidat.Nom);

  //const [Photo, setPhoto] = useState(getuser.Photo);
  const [pays, setPays] = useState(AuthCandidat.User.Pays);

  const [password, setPassword] = useState('');

  //console.log(email);
  //console.log(candidate);
  const handleClose = () => {
    setShow(false);
  };
  const handleModifier = () => {
    console.log(email);
    const candidat = {
      nom,
      prenom,
      email,
      genre,
      téléphone,
      idcardnumber,
      ville,
      password,
      pays,
    };
    console.log(candidat);
   // console.log(getuser._id);
    dispatch(updateCandidat(AuthCandidat._id, candidat));
    dispatch(getCandidatByIdUser(AuthCandidat.User._id))
    setShow(false);
  };

  //modifier local storage
  /*const AuthC = useSelector((state) => state.candidat.candidat);
   localStorage.setItem('candidat', JSON.stringify(AuthC));
*/

  const handleShow = () => {
    setShow(true);
  };

  // if (Updatecandidat.update) {
  //   return <Redirect to="/candidat/profile"/>;
  // }

  if (localStorage.getItem('user') == undefined) {
    return <Redirect to="/login" />;
  } else {
    <Redirect to="/candidat/profile" />;
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="a">
          <Row>
            <Col md={12}>
              <div className="line">
                <h5 style={{color: '#fff'}}>
                  {' '}
                  <FaIcons.FaUserAlt className="iu" />
                  <a> {'   '}</a> Profile
                </h5>
              </div>
            </Col>
          </Row>
          <br />

          <Row>
            <div className="col-md-4 mb-3 ">
              <div className="r">
                <div className="card-body1">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{nom}{' '}{prenom} Doe</h4>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="r mb-3">
                <div className="card-body1">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> {email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{téléphone}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">IDcardnumber</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {idcardnumber}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {ville}, {pays}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button className="b1" onClick={handleShow}>
                        <FaIcons.FaPen /> Modifier
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
              <a onClick={handleClose}>
                <FaIcons.FaTimes className="btnc" />
              </a>{' '}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}>
                  {' '}
                  firstName{' '}
                </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={nom}
                  className="inpt"
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}>
                  {' '}
                  lastName{' '}
                </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
            </Row>

            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}> email </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}>
                  {' '}
                  password{' '}
                </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}>
                  {' '}
                  Téléphone{' '}
                </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={téléphone}
                  onChange={(e) => setTéléphone(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}>
                  cardnumber
                </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={idcardnumber}
                  onChange={(e) => setIDcardnumber(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}> Ville </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                />
              </div>
            </Row>
            <Row>
              <div className="col-sm-3">
                <h6 style={{marginLeft: '10px', marginTop: '27px'}}> Pays </h6>
              </div>
              <div className="col-sm-9 in">
                <Inpt value={pays} onChange={(e) => setPays(e.target.value)} />
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer className="t">
            <Button className="b1" onClick={handleModifier}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Index;
