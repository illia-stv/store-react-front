import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setJwt } from '../../reducer/reducer'
import LogoutComponent from '../../components/icons/LogoutComponent'
import {ReactComponent as LogoutIcon} from '../../assets/svg/logout.svg'; 

const LogoutPage = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.state)
    const history = useHistory()

    const logout = () => {
        // console.log('logout')
        // console.log(props.state.jwt)
        if(state.jwt){
            localStorage.removeItem('jwt');
            dispatch(setJwt(''))
            history.push('signin')
        } else {
            history.push('signin')
        }
    }

    return (
        <LogoutComponent logout={logout}>
            <LogoutIcon width={'20px'} fill={'#ddd'} />
        </LogoutComponent>
    )
}

export default LogoutPage
