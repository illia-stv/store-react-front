import './layout.css';
import React,{useState, useEffect, lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import axios from 'axios'
import Loading from '../components/loading';


const ConfirmationPage = lazy(() => import('../components/confirmationPage'))
const BuyPage = lazy(() => import('../components/buyPage'))
const Signup = lazy(() => import('../components/signup'))
const Signin = lazy(() => import('../components/signin'))
const Home = lazy(() => import ('../components/home'))
const Navbar = lazy(() => import('../components/navbar'))
const Breadcumps = lazy(() => import ('../components/breadcumps'))
const Cart = lazy(() => import('../components/cart'))
const ProductPage = lazy(() => import('../components/productPage'))
// import i18next from "i18next";


function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || false)
  const [myCategories, setMyCategories] = useState([])
  const [cart, setCart] = useState([])
  // const [lng, setLng] = useState('Rus')

  const addToCart = (val) => {
    const arr = cart.filter((item)=>item.id==val.id)
    if(arr.length == 0){
      setCart([...cart, val])
    }
  } 

  const delFromCart = (id) => {
    setCart([...cart.splice(0,id),...cart.splice(1)])
  }

  const logout = () => {
    // console.log()
    localStorage.removeItem('jwt');
    setJwt(false)
  }

  // useEffect(() => {
  //   i18next.changeLanguage(lng, (err, t) => {
  //     if (err) return console.log('something went wrong loading', err);
  //     t('key'); // -> same as i18next.t
  //   });
  // }, [lng])

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
      <Suspense fallback={<Loading/>}>
        {jwt ?  
          <>
            <Navbar logout={logout} menuCategories={myCategories}/>
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
            <Route path="/cart" >
              {jwt ?  <Cart delFromCart={delFromCart} cart={cart}/> : <Redirect to="/signup"/>}
            </Route>
            <Route path="/buy" >
              {jwt ?  <BuyPage /> : <Redirect to="/signup"/>}
            </Route>
            <Route path="/confirmed" >
              <ConfirmationPage/>
            </Route>
              {jwt ?  
              myCategories.map((item, key) =>
                <Route key={key} path={`/${item.Name}`}>
                  <ProductPage jwt={jwt} setCart={addToCart} cart={cart} currentCategories={item['under_categories']} id={item['under_categories'][0].id}/>
                </Route>
              )
              : <Redirect to="/signup" />}
          
          </Switch>
      </Suspense>
      
    </Router>
    </>
  );
}

export default App;
