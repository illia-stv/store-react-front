import React from 'react'
import '../styles/undermenu.css'
import PropTypes from 'prop-types';

const UnderMenu = (props) => {
    
    const objToArr = () => {
        const arr = []
        for (const item in props.categories) {
            arr.push(props.categories[item])
        }
        return arr
    }
    

    return (
        <div className='under-menu'>
            <div className="under-menu_section">
                
                {objToArr().map((item, key)=> 
                    <div key={key} className='under-menu_section_elements'>
                        {item}
                    </div>
                )}
            </div>
        </div>
    )
}

UnderMenu.propTypes = {
    categories: PropTypes.object
}

export default UnderMenu
