import React, {useState} from 'react'
import '../styles/navbar.css'
import {ReactComponent as AppleLogo} from '../assets/svg/apple.svg';
import {ReactComponent as LngLogo} from '../assets/svg/language.svg';
import {ReactComponent as ShoppingCart} from '../assets/svg/shopping-cart.svg';
import {ReactComponent as Logout} from '../assets/svg/logout.svg';
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types';
import i18n from "i18next";
import Loading from './loading';


const Navbar = (props) => {
  
    const history = useHistory()
    const [navbar, setNavbar] = useState(false)
  
    const linkClick = (val) => {
        history.push('/' + val)
    }



    return (
        <>
            <nav  className='navbar'>
              
                <div className='navbar-menu'>
                    <div onClick={() => linkClick('home')} className='AppleLogo'>
                        <AppleLogo width={'20px'} fill={'#ddd'} />
                    </div>
                    
                    <div onClick={() => linkClick('iPhone')} className='navbar_navbar-menu_title'>
                        iPhone
                    </div>  
                    <div onClick={() => linkClick('iMac')} className='navbar_navbar-menu_title'>
                        iMac
                    </div>  
                    <div onClick={() => linkClick('Watch')} className='navbar_navbar-menu_title'>
                        Watch
                    </div>  
                    <div onClick={() => linkClick('iPad')} className='navbar_navbar-menu_title'>
                        iPad
                    </div>  
                    <div onClick={() => linkClick('cart')} className='navbar_navbar-menu_title'>
                        <div className='cart_logo'>
                            <ShoppingCart width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <div  className='navbar_navbar-menu_dropdown'>
                        <div className="lng_logo">
                            <LngLogo width={'20px'} fill={'#ddd'}/>
                        </div>
                        
                        <div className="navbar_navbar-menu_dropdown-content">
                            <div onClick={() => i18n.changeLanguage('pl')}>Pl</div>
                            <div onClick={() => i18n.changeLanguage('en')}>Eng</div>
                            <div onClick={() => i18n.changeLanguage('ru')}>Rus</div>
                            <div onClick={() => i18n.changeLanguage('fr')}>Fr</div>
                        </div>
                    </div>
                    <div onClick={() => props.logout()} className='navbar_navbar-menu_title'>
                        <div className='logout_logo'>
                        <Logout width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <label id="switch" className="switch">
                        <input onClick={props.changeTheme} type="checkbox" id="slider" />
                        <span className="slider round" />
                    </label>
                </div>
                
            </nav>
            <nav onClick={navbar ? () => setNavbar(!navbar) : null} className='navbar-resp'>
                { props.uploaded ?
                    <>
                        <div onClick={() => setNavbar(!navbar)} className="navbar-resp_burger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        
                        <div onClick={() => linkClick('home')} className='AppleLogo'>
                            <AppleLogo width={'20px'} fill={'#ddd'} />
                        </div>
                        
                        <div onClick={() => props.logout()} className='navbar_navbar-menu_title_logo'>
                            <div className='logout_logo'>
                            <Logout width={'20px'} fill={'#ddd'}/>
                            </div>
                        </div>
                    </>
                    : 
                    <Loading/>
                }

            </nav>
            <div onClick={() => setNavbar(!navbar)} className={navbar ? 'navbar-harmonic_on' : 'navbar-harmonic_off'}>
                <div className='navbar-wrap'>
                    {props.menuCategories.map((item, key) => 
                        <div onClick={() => linkClick(item.Name)} key={key} className='navbar_navbar-menu_title'>
                            {item.Name}
                        </div>    
                    )}

                    <div onClick={() => linkClick('cart')} className='navbar_navbar-menu_title'>
                        <div className='cart_logo'>
                            <ShoppingCart width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    
                    <div  className='navbar_navbar-menu_dropdown'>
                        <div className="lng_logo">
                            <LngLogo width={'20px'} fill={'#ddd'}/>
                        </div>
                        
                        <div className="navbar_navbar-menu_dropdown-content">
                            <div onClick={() => i18n.changeLanguage('pl')}>Pl</div>
                            <div onClick={() => i18n.changeLanguage('en')}>Eng</div>
                            <div onClick={() => i18n.changeLanguage('ru')}>Rus</div>
                            <div onClick={() => i18n.changeLanguage('fr')}>Fr</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    menuCategories: PropTypes.array,
    lng: PropTypes.string,
    setLng: PropTypes.func,
    logout: PropTypes.func,
    changeTheme: PropTypes.func,
  }

export default Navbar
