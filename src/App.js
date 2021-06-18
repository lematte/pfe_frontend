import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//css Files

//import file
import Add_formation from './containers/Add-formation/index';
import Centre_formation from './containers/centre-formation/index';
import Formation from './containers/Formation/index';
import Formateur from './containers/Formateur/index'
import Liste_centre from './containers/Liste-centre/index';
import Home from './containers/Home/index';
import SignIn from './containers/SignIn/index';
import SignUp from './containers/SignUp/index';
import Admin from './containers/Users/Admin/index';
import Dashboard_Formateur from './containers/Users/Formateur/index';
import Candidat from './containers/Users/Candidat/index';
import Espace_centre from './containers/Users/Espace-centre/index';
import Details_formation from './containers/Details_formation/index';
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

          <Route path="/liste_centre" exact component={Liste_centre} />
          <Route path="/centre_formation" exact component={Centre_formation} />
          <Route path="/centre_formation/posts" exact component={Add_formation} />
          <Route path="/formation" exact component={Formation} />
          <Route path="/details_formation" exact component={Details_formation}/>
          <Route path="/formateur" exact component={Formateur} />

          <Route path="/contact" exact component={Contact} />
          <Route path="/About" exact component={About} />

          <Route path="/espace_centre/dashboard" exact component={Espace_centre} />
          <Route path="/admin/dashboard" exact component={Admin} />
          <Route path="/formateur/dashboard" exact component={Dashboard_Formateur} />
       
          <Route path="/candidat/dashboard" exact component={Candidat} />
          <Route path="/candidat/profile" exact component={ProfileCandidat} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
