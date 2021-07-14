import React from 'react'
import '../styles/loading.css'

const Loading = () => {
    return (
        <div className='loading-animation'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>    
        </div>
    )
}

export default Loading
