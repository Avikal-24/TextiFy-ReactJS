import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// importing react router and all other necessary files
// This is extracted from : https://v5.reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar title="TextiFy" about="About TextiFy" />

        <div className="container my-3">

          {/* using 'exact' is veryyy imp, coz React does partial matching. */}
          <Switch>

            <Route exact path="/">
              <div className="in-center">
                <h1><u>Enter your text below:- </u></h1>
              </div>
              <TextForm />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

          </Switch>


        </div>
      </Router>
    </>
  );
}
export default App;

// ADD-ON'S
// alerts
// dark-light mode togging in navbar