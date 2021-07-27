import React from 'react'


const NavbarHarmonicComponent = (props) => {
    return (
        <div onClick={() => props.setNavbar(!props.navbar)} className={props.navbar ? 'navbar-harmonic_on' : 'navbar-harmonic_off'}>
            <div className='navbar-wrap'>
                {props.children}
            </div>
        </div>
    )
}

export default NavbarHarmonicComponent
