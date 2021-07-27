import '../styles/layout.css';
import React,{ useEffect, lazy, Suspense, useState} from 'react'
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import axios from 'axios'
import '../styles/app.css'
import Loading from '../components/loading';
import { useSelector, useDispatch } from 'react-redux'
import { setMyCategories, setCart, setJwt, setTheme } from '../reducer/reducer'




const ConfirmationPage = lazy(() => import('../components/confirmationPage'))
const Signup = lazy(() => import('../components/signup'))
const Signin = lazy(() => import('../components/signin'))
const Home = lazy(() => import ('../components/HomeComponent'))
const NavbarPage = lazy(() => import('./NavbarPage'))
const Cart = lazy(() => import('../components/cart'))
const ProductsPage = lazy(() => import('../components/productsPage'))
// import i18next from "i18next";



function App() {
  const state = useSelector((state) => state.state)
  const [navbarUploaded, setNavbarUploaded] = useState(false) 
  const dispatch = useDispatch()
  const url = 'https://my-apple-store-server.herokuapp.com' 
  const history = useHistory()

  const addToCart = (val) => {
    const arr = state.cart.filter((item)=>item.id==val.id)
    if(arr.length == 0){
      dispatch(setCart([...state.cart, val]))
    }
  } 

  const delFromCart = (id) => {
    const arr = state.cart.map((item)=> item)
    // console.log('id',id)
    // console.log(arr)

    // console.log([...arr.splice(0,id),...arr.splice(1)])
    dispatch(setCart([...arr.splice(0,id),...arr.splice(1)]))
  }

  const logout = () => {
    console.log('logout')
    if(state.jwt){
      localStorage.removeItem('jwt');
      dispatch(setJwt(''))
      history.push('signin')
    } else {
      history.push('signin')

    }
    
  }

  const changeTheme = () => {
    console.log('here')
    if(state.theme == 'light'){
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }

  // useEffect(() => {
  //   i18next.changeLanguage(lng, (err, t) => {
  //     if (err) return console.log('something went wrong loading', err);
  //     t('key'); // -> same as i18next.t
  //   });
  // }, [lng])

  useEffect(() => {
      axios.get(url+`/categories`)
      .then(res => {
        // setMyCategories(res.data);
        setNavbarUploaded(true)
        console.log('here my data')
        dispatch(setMyCategories(res.data))
        // console.log(res.data[1]['under_categories'][0].id)
      })
      .catch((error) => console.log(error.message));
  }, [state.jwt]);


  return (
    <div className={state.theme == 'light' ? 'theme-light' : 'theme-dark'}>
      <div className='app'>
      </div>
        <Suspense fallback={<Loading/>}>
          <NavbarPage />

          <Switch>
              <Route exact path="/" >
                <Redirect to="/home"/> 
              </Route>
              <Route path="/home" >
                <Home theme={state.theme} myJwt={state.jwt}/>
              </Route>
              <Route path="/cart" >
                <Cart delFromCart={delFromCart} cart={state.cart}/> 
              </Route>
              {/* <Route path="/buy" >
                {state.jwt ?  <BuyPage /> : <Redirect to="/signup"/>}
              </Route> */}
              <Route path="/confirmed" >
                <ConfirmationPage/>
              </Route>
              <Route path="/signup" >
                <Signup url={url} setMyJwt={(val) => dispatch(setJwt(val))}/>
              </Route>
              <Route  path="/signin" >
                <Signin url={url} setMyJwt={(val) => dispatch(setJwt(val))}/>
              </Route>
              { 
                state.myCategories.map((item, key) =>
                  <Route key={key} path={`/${item.Name}`}>
                    <ProductsPage url={url} jwt={state.jwt} setCart={addToCart} cart={state.cart} currentCategories={item['under_categories']} id={item['under_categories'][0].id}/>
                  </Route>
                )
              }
            
            </Switch>
        </Suspense>
        
      
      {/*  onClick={() => dispatch(increment())} */}

    </div>
  );
}

export default App;
