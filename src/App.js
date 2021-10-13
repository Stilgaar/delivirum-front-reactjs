//Importation du css et des dépendances
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importation des composants
import Navigation from './Navbar/Navbar'
import Login from './Login/Login'
import Signin from './Signin/Signin'
import Footer from './Footer/Footer'
import Splashscreen from './Splashscreen/Splashscreen';
import RGPD from './Rgpd/Rgpd'


function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Login />
            <Splashscreen />
          </Route>
          <Route path="/Signin">
            <Signin />
            <Splashscreen />
          </Route>
          <Route path="/RGPD">
          <RGPD />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
