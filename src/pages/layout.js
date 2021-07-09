import './layout.css';
import React,{useState, useEffect} from 'react'
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
import ProductPage from '../components/productPage';
import axios from 'axios'

function App() {

  const [jwt, setJwt] = useState(false)
  const [myCategories, setMyCategories] = useState()
  
  useEffect(() => {
      axios.get(`http://localhost:1337/categories`)
      .then(res => {
        setMyCategories(res.data);
        // console.log(res.data[1]['under_categories'][0].id)
      })
      .catch((error) => console.log(error.message));
  }, []);





  return (
    <>
    <Router>
      
      {jwt ?  
        <>
          <Navbar menuCategories={myCategories}/>
          <Breadcumps />
        </>
      : <Redirect to="/signup" />}

      <Switch>
          <Route path="/signup">
            <Signup setMyJwt={(val) => setJwt(val)}/>
          </Route>
          <Route  path="/signin">
            <Signin setMyJwt={(val) => setJwt(val)}/>
          </Route>
          <Route path="/home" >
            {jwt ?  <Home myJwt={jwt}/> : <Redirect to="/signup" />}
          </Route>
            {jwt ?  
            myCategories.map((item, key) =>
              <Route key={key} path={`/${item.Name}`}>
                <ProductPage currentCategories={item['under_categories']} id={item['under_categories'][0].id}/>
              </Route>
            )
            : <Redirect to="/signup" />}
         
        </Switch>
    </Router>
    </>
  );
}

export default App;
