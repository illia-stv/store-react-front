import './layout.css';
import React,{ useEffect, lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import axios from 'axios'
import Loading from '../components/loading';
import { useSelector, useDispatch } from 'react-redux'
import { setMyCategories, setCart, setJwt } from '../features/reducer/reducer'



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
  const state = useSelector((state) => state.state) 
  console.log(state) 
  const dispatch = useDispatch()
  
  const addToCart = (val) => {
    const arr = state.cart.filter((item)=>item.id==val.id)
    if(arr.length == 0){
      dispatch(setCart([...state.cart, val]))
    }
  } 

  const delFromCart = (id) => {
    dispatch(setCart([...state.cart.splice(0,id),...state.cart.splice(1)]))
  }

  const logout = () => {
    // console.log()
    localStorage.removeItem('jwt');
    dispatch(setJwt(false))
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
        // setMyCategories(res.data);
        dispatch(setMyCategories(res.data))
        // console.log(res.data[1]['under_categories'][0].id)
      })
      .catch((error) => console.log(error.message));
  }, []);


  return (
    <>
    <Router>
      <Suspense fallback={<Loading/>}>
        {state.jwt ?  
          <>
            <Navbar logout={logout} menuCategories={state.myCategories}/>
            <Breadcumps />
          </>
        : <Redirect to="/signup" />}
        <Switch>
            <Route path="/signup">
              <Signup setMyJwt={(val) => dispatch(setJwt(val))}/>
            </Route>
            <Route  path="/signin">
              <Signin setMyJwt={(val) => dispatch(setJwt(val))}/>
            </Route>
            <Route exact path="/" >
              {state.jwt ?  <Redirect to="/home"/> : <Redirect to="/signup" />}
            </Route>
            <Route path="/home" >
              {state.jwt ?  <Home myJwt={state.jwt}/> : <Redirect to="/signup" />}
            </Route>
            <Route path="/cart" >
              {state.jwt ?  <Cart delFromCart={delFromCart} cart={state.cart}/> : <Redirect to="/signup"/>}
            </Route>
            <Route path="/buy" >
              {state.jwt ?  <BuyPage /> : <Redirect to="/signup"/>}
            </Route>
            <Route path="/confirmed" >
              <ConfirmationPage/>
            </Route>
              {state.jwt ?  
              state.myCategories.map((item, key) =>
                <Route key={key} path={`/${item.Name}`}>
                  <ProductPage jwt={state.jwt} setCart={addToCart} cart={state.cart} currentCategories={item['under_categories']} id={item['under_categories'][0].id}/>
                </Route>
              )
              : <Redirect to="/signup" />}
          
          </Switch>
      </Suspense>
      
    </Router>
    
    {/*  onClick={() => dispatch(increment())} */}

      
    </>
  );
}

export default App;
