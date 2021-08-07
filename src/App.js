/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Services from './component/Services';
import Navbar from './component/Navbar';
import Error from './component/Error';
import Post from "./component/Post";
import Dashboard from "./component/Dashboard";

function App() {
  const isLogin = true
  return (
    <>
             
        <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/posts/:category" component={Post}/>

                <Route exact path="/dashboard" component={Dashboard}/>

                <Route exact path="/login">
                  {isLogin ? <Redirect to="/dashboard" /> : <Home />}
                </Route>
                 {/* error page  */}
                <Route  component={Error}/> 
            </Switch>
        </Router>
        
    </>
  );
}

export default App;
