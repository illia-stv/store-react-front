import React from 'react'
import '../../styles/navbar.css'

const ThemeSwitcherComponent = (props) => {
    return (
        <label id="switch" className="switch">
            <input onClick={props.changeTheme} type="checkbox" id="slider" />
            <span className="slider round" />
        </label>
    )
}

export default ThemeSwitcherComponent
