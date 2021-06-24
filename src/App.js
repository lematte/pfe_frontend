import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//css Files

//import file
import AddFormation from './containers/AddFormation/index';
import CentreFormation from './containers/CentreFormation/index';
import Formation from './containers/Formation/index';
import Formateur from './containers/Formateur/index'
import ListeCentre from './containers/ListeCentre/index';
import Home from './containers/Home/index';
import SignIn from './containers/SignIn/index';
import SignUp from './containers/SignUp/index';
import Admin from './containers/Users/Admin/index';
import Dashboard_Formateur from './containers/Users/Formateur/index';
import Candidat from './containers/Users/Candidat/index';
import EspaceCentre from './containers/Users/EspaceCentre/index';
import DetailsFormation from './containers/DetailsFormation/index';
import Contact from './containers/Contact/index';
import About from './containers/About/index';
import ProfileCandidat from './containers/Users/Candidat/ProfileCandidat/index'

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/registre" exact component={SignUp} />
          <Route path="/login" exact component={SignIn} />

          <Route path="/liste_centre" exact component={ListeCentre} />
          <Route path="/centre_formation" exact component={CentreFormation} />
          <Route path="/centre_formation/posts" exact component={AddFormation} />
          <Route path="/formation" exact component={Formation} />
          <Route path="/details_formation" exact component={DetailsFormation}/>
          <Route path="/formateur" exact component={Formateur} />

          <Route path="/contact" exact component={Contact} />
          <Route path="/About" exact component={About} />

          <Route path="/espace_centre/dashboard" exact component={EspaceCentre} />
          <Route path="/admin/dashboard" exact component={Admin} />
          <Route path="/formateur/dashboard" exact component={Dashboard_Formateur} />
       
          <Route path="/candidat/dashboard" exact component={Candidat} />
          <Route path="/candidat/profile/" exact component={ProfileCandidat} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
