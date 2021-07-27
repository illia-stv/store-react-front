import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import NavbarComponent from '../components/Navbar/NavbarComponent' 
import NavButtonComponent from '../components/Navbar/NavButtonComponent'
import InternalizationIconComponent from '../components/icons/InternalizationIconComponent'
import {ReactComponent as AppleLogo} from '../assets/svg/apple.svg';
import {ReactComponent as ShoppingCart} from '../assets/svg/shopping-cart.svg';
import {ReactComponent as LanguageIcon} from '../assets/svg/language.svg';
import ShoppingCartComponent from '../components/icons/ShoppingCartComponent'
import AppleLogoComponent from '../components/icons/AppleLogoComponent';
import LogoutPage from './Buttons/LogoutPage'
import ResponsiveNavbarComponent from '../components/Navbar/ResponsiveNavbarComponent';
import ThemeSwitcherPage from './Buttons/ThemeSwitcherPage';
import BurgerComponent from '../components/Navbar/BurgerComponent';
import NavbarHarmonicComponent from '../components/Navbar/NavbarHarmonicComponent';

const NavbarPage = (props) => {
    const [navbar, setNavbar] = useState(false)
    const history = useHistory()

    const linkClick = (val) => {
        history.push('/' + val)
    } 

   
    return (
        <>
            <NavbarComponent>
                <AppleLogoComponent linkClick={linkClick}>
                    <AppleLogo width={'20px'} fill={'#ddd'} />
                </AppleLogoComponent>
                <NavButtonComponent linkClick={linkClick} val={'iPhone'}/>
                <NavButtonComponent linkClick={linkClick} val={'iMac'}/>
                <NavButtonComponent linkClick={linkClick} val={'Watch'}/>
                <NavButtonComponent linkClick={linkClick} val={'iPad'}/>
                <ShoppingCartComponent linkClick={linkClick}>
                    <ShoppingCart width={'20px'} fill={'#ddd'}/>
                </ShoppingCartComponent>
                <InternalizationIconComponent>
                    <LanguageIcon width={'20px'} fill={'#ddd'}/>
                </InternalizationIconComponent>
                <LogoutPage/>
                <ThemeSwitcherPage/>
            </NavbarComponent>

            <ResponsiveNavbarComponent navbar={navbar} setNavbar={(val)=>setNavbar(val)}>
                <BurgerComponent navbar={navbar} setNavbar={setNavbar}/>
                <AppleLogoComponent linkClick={linkClick}>
                    <AppleLogo width={'20px'} fill={'#ddd'} />
                </AppleLogoComponent>
                <ThemeSwitcherPage/>
            </ResponsiveNavbarComponent>

            <NavbarHarmonicComponent navbar={navbar} setNavbar={(val)=>setNavbar(val)}>
                <NavButtonComponent linkClick={linkClick} val={'iPhone'}/>
                <NavButtonComponent linkClick={linkClick} val={'iMac'}/>
                <NavButtonComponent linkClick={linkClick} val={'Watch'}/>
                <NavButtonComponent linkClick={linkClick} val={'iPad'}/>
                <ShoppingCartComponent linkClick={linkClick}>
                    <ShoppingCart width={'20px'} fill={'#ddd'}/>
                </ShoppingCartComponent>
                <LogoutPage/>
                <InternalizationIconComponent>
                    <LanguageIcon width={'20px'} fill={'#ddd'}/>
                </InternalizationIconComponent>
                
            </NavbarHarmonicComponent>
        </>
    )
}

export default NavbarPage
