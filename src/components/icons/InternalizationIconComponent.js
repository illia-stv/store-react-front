import React from 'react'
import '../../styles/navbar.css'
import i18n from "i18next";

const InternalizationIconComponent = (props) => {
    return (
        <div  className='navbar_navbar-menu_dropdown'>
            <div className="lng_logo">
                {props.children}
            </div>
            
            <div className="navbar_navbar-menu_dropdown-content">
                <div onClick={() => i18n.changeLanguage('pl')}>Pl</div>
                <div onClick={() => i18n.changeLanguage('en')}>Eng</div>
                <div onClick={() => i18n.changeLanguage('ru')}>Rus</div>
                <div onClick={() => i18n.changeLanguage('fr')}>Fr</div>
            </div>
        </div>
    )
}

export default InternalizationIconComponent
