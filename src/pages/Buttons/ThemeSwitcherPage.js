import React from 'react'
import ThemeSwitcherComponent from '../../components/icons/ThemeSwitcherComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../reducer/reducer'

const ThemeSwitcherPage = () => {
    const state = useSelector((state) => state.state)
    const dispatch = useDispatch()

    const changeTheme = () => {
        console.log('here')
        if(state.theme == 'light'){
          dispatch(setTheme('dark'))
        } else {
          dispatch(setTheme('light'))
        }
      }

      
    return (
        <>
            <ThemeSwitcherComponent changeTheme={changeTheme}/>
        </>
    )
}

export default ThemeSwitcherPage
