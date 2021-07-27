import React from 'react'

const BurgerComponent = (props) => {
    return (
        <>
            <div onClick={() => props.setNavbar(!props.navbar)} className="navbar-resp_burger">
                <div></div>
                <div></div>
                <div></div>
            </div>  
        </>
    )
}

export default BurgerComponent
