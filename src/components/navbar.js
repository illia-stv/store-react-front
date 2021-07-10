import React, {useState} from 'react'
import '../styles/navbar.css'
import {ReactComponent as AppleLogo} from '../assets/svg/apple.svg';
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types';



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
                <div onClick={() => linkClick('signin')} className='navbar_navbar-menu_title'>
                    Signin
                </div>
            </div>
            
        </nav>
    )
}

Navbar.propTypes = {
    menuCategories: PropTypes.array
  }

export default Navbar
