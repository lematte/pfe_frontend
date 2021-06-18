import './index.css';
import Navbar from '../../../components/sidebar_candidat/Navbar';

const Candidat = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="main__container1">
          <div className="main__title1">
            <img src={'hello'} alt="hello" />
            <div className="main__greeting1">
              <br />
              <h1>Hello Codersbite</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>

          <div className="main__cards1">
            <div className="card1">
              <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner1">
                <p className="text-primary-p1">Number of Subscribers</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="card1">
              <i
                className="fa fa-calendar fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div className="card_inner1">
                <p className="text-primary-p1">Times of Watching</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>

            <div className="card1">
              <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              ></i>
              <div className="card_inner1">
                <p className="text-primary-p1">Number of Videos</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>

            <div className="card1">
              <i
                className="fa fa-thumbs-up fa-2x text-green"
                aria-hidden="true"
              ></i>
              <div className="card_inner1">
                <p className="text-primary-p1">Number of Likes</p>
                <span className="font-bold text-title">645</span>
              </div>
            </div>
          </div>

          {/* <!-- CHARTS STARTS HERE --> */}
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card12">
                  <h1>Income</h1>
                  <p>$75,300</p>
                </div>

                <div className="card22">
                  <h1>Sales</h1>
                  <p>$124,200</p>
                </div>

                <div className="card32">
                  <h1>Users</h1>
                  <p>3900</p>
                </div>

                <div className="card42">
                  <h1>Orders</h1>
                  <p>1881</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Candidat;
