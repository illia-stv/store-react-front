import './layout.css';
import React,{useState} from 'react'
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


function App(props) {

  const [myState, setMyState] = useState(
    {
      Categories: {
        Mac : {
          MacBookAir: 'MacBook Air',
          MacBookPro13: 'MacBook Pro 13',
          MacBookPro16: 'MacBook Pro 16',
          iMac24: 'iMac 24',
          iMac27: 'iMac 27',
          MacPro: 'MacPro',
          MacMini: 'MacMini',
          ProDisplayXDR: 'Pro Display XDR'
        },
        Ipad : {
          iPadPro: 'iPad Pro',
          iPadAir: 'iPad Air',
          iPad: 'iPad',
          iPadMini: 'iPad Mini',
          ApplePencil: 'Apple Pencil',
          Keyboards: 'Keyboards',
        },
        iPhone: {
          iPhone12Pro: 'iPhone 12 Pro',
          iPhone12: 'iPhone 12',
          iPhoneSE: 'iPhone SE',
          iPhone11: 'iPhone 11',
          iPhoneXR: 'iPhone XR',
          AirTag: 'AirTag'
        },
        Watch: {
          AppleWatchSeries6: 'Apple Watch Series 6',
          AppleWatchSE: 'Apple Watch SE',
          AppleWatchSeries3: 'Apple Watch Series 3',
          AppleWatchNike: 'Apple Watch Nike',
          AppleWatchHermes: 'Apple Watch Hermes',
          AppleWatchStudio: 'Apple Watch Studio',
          Bands: 'Bands',
        },
        TV: {
          AppleTVPlus : 'Apple TV+',
          AppleTVapp: 'Apple TV app',
          AppleTV4K: 'Apple TV 4K',
          AppleTVHD: 'Apple TV HD',
          AirPlay: 'AirPlay'
        },
        Music: {
          AppleMusic: 'Apple Music',
          AirPods: 'AirPods',
          AirPodsPro: 'AirPods Pro',
          AirPodsMax: 'AirPods Max',
          HomePodMini: 'HomePod mini',
          HomePod: 'HomePod',
          iPodTouch: 'iPod touch',
          Beats: 'Beats'
        }
      }

    }
  )
  
  // console.log(Object.keys(myState.Categories))
  const [jwt, setJwt] = useState(false)



  return (
    <>
    <Router>
      <Navbar menuCategories={Object.keys(myState.Categories)}/>
      <Breadcumps/>
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
          <Route exact path="/" >
            {jwt ?  <Home myJwt={jwt}/> : <Redirect to="/home" />}
          </Route>
          {Object.keys(myState.Categories).map((item, key) =>
            <Route key={key} path={`/${item}`}>
              <ProductPage currentCategories={myState.Categories[item]}/>
            </Route>
          )}
        </Switch>
    </Router>
    </>
  );
}

export default App;
