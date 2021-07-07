import React, {useState} from 'react'
import '../styles/navbar.css'
import {ReactComponent as AppleLogo} from '../assets/svg/apple.svg';
import {useHistory} from 'react-router-dom'

const Navbar = () => {
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
        <nav className='navbar'>
            <div className='navbar-menu'>
                <div onClick={() => linkClick('Home')} className='AppleLogo'>
                    <AppleLogo width={'20px'} fill={logoColor ? '#eee' : '#ddd'} transition={'2s'} onMouseOut = {switchColorOff} onMouseOver={switchColorOn}/>
                </div>
                <div onClick={() => linkClick('Mac')} className='navbar_navbar-menu_title'>
                    Mac
                </div>
                <div onClick={() => linkClick('iPad')} className='navbar_navbar-menu_title'>
                    iPad
                </div>
                <div onClick={() => linkClick('iPhone')} className='navbar_navbar-menu_title'>
                    iPhone
                </div>
                <div onClick={() => linkClick('Watch')} className='navbar_navbar-menu_title'>
                    Watch
                </div>
                <div onClick={() => linkClick('TV')} className='navbar_navbar-menu_title'>
                    TV
                </div>
                <div onClick={() => linkClick('Music')} className='navbar_navbar-menu_title'>
                    Music
                </div>
                <div onClick={() => linkClick('signin')} className='navbar_navbar-menu_title'>
                    Signin
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
