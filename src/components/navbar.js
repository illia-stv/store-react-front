import React, {useState} from 'react'
import '../styles/navbar.css'
import {ReactComponent as AppleLogo} from '../assets/svg/apple.svg';
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types';
import i18n from "i18next";



const Navbar = (props) => {
    const history = useHistory()
    const [logoColor, setLogoColor] = useState(false)

    const switchColorOn = () => {
        setLogoColor(true)
    } 

    const switchColorOff = () => {
        setLogoColor(false)
    }
    
    const linkClick = (val) => {
        history.push('/' + val)
    }

    

    return (
        <nav  className='navbar'>
            <div className='navbar-menu'>
                <div onClick={() => linkClick('home')} className='AppleLogo'>
                    <AppleLogo width={'20px'} fill={logoColor ? '#eee' : '#ddd'} transition={'2s'} onMouseOut = {switchColorOff} onMouseOver={switchColorOn}/>
                </div>
                {props.menuCategories.map((item, key) => 
                    <div onClick={() => linkClick(item.Name)} key={key} className='navbar_navbar-menu_title'>
                        {item.Name}
                    </div>    
                )}
                <div onClick={() => linkClick('cart')} className='navbar_navbar-menu_title'>
                    Cart
                </div>
                <div  className='navbar_navbar-menu_dropdown'>
                    {props.lng}
                    <div className="navbar_navbar-menu_dropdown-content">
                        <div onClick={() => i18n.changeLanguage('Pl')}>Pl</div>
                        <div onClick={() => i18n.changeLanguage('Eng')}>Eng</div>
                        <div onClick={() => i18n.changeLanguage('Rus')}>Rus</div>
                        <div onClick={() => i18n.changeLanguage('Fr')}>Fr</div>
                    </div>
                </div>
                <div onClick={() => linkClick('signin')} className='navbar_navbar-menu_title'>
                    Signin
                </div>
            </div>
            
        </nav>
    )
}

Navbar.propTypes = {
    menuCategories: PropTypes.array,
    lng: PropTypes.string,
    setLng: PropTypes.func
  }

export default Navbar
