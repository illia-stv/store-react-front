import React, {useEffect, useState} from 'react'
import '../styles/breadcumps.css'
import { useHistory } from 'react-router-dom'

const Breadcumps = () => {
    const [url, setUrl] = useState(window.location.href.slice(22))
    const history = useHistory()
    const str = `Store >> ${url.split('/').join(' >> ')}`

    useEffect(() => {    
        return history.listen(() => { 
            setUrl(window.location.href.slice(22)) 
        }) 
    }, [history]);


    return (
        <div className="breadcumps">
            <a>
                {str}
            </a> 
        </div>
    )
}

export default Breadcumps
