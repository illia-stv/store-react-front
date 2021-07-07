import './layout.css';
import {useState} from 'react'
import Signup from '../components/signup'
import Signin from '../components/signin'
import Home from '../components/home'
import Navbar from '../components/navbar'
import Breadcumps from '../components/breadcumps'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App(props) {

  // const [myState, setMyState] = useState()
  
  const [jwt, setJwt] = useState(false)


  // const setMyJwt = (val) => {
  //   setJwt(val)
  //   console.log(val)
  // }

  return (
    <Router>
      <Navbar/>
      <Breadcumps/>
      <Switch>
          <Route path="/signup">
            <Signup setMyJwt={(val) => setJwt(val)} myJwt={jwt}/>
          </Route>
          <Route  path="/signin">
            <Signin setMyJwt={(val) => setJwt(val)}/>
          </Route>
          <Route path="/home" >
            {jwt ?  <Home myJwt={jwt}/> : <Redirect to="/signup" />}
          </Route>
          <Route exact path="/" >
            {jwt ?  <Home myJwt={jwt}/> : <Redirect to="/home" />}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
