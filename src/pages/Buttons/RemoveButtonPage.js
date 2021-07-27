import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../reducer/reducer'
import RemoveButtonComponent from '../../components/Buttons/RemoveButtonComponent'

const RemoveButtonPage = ({id,val}) => {
    const state = useSelector((state) => state.state)
    const dispatch = useDispatch()

    const delFromCart = (id) => {
        const arr = state.cart.map((item)=> item)
        // console.log('id',id)
        // console.log(arr)
    
        // console.log([...arr.splice(0,id),...arr.splice(1)])
        dispatch(setCart([...arr.splice(0,id),...arr.splice(1)]))
      }
    return (
        <div onClick={() => delFromCart(id)}>
            <RemoveButtonComponent val={val}/>
        </div>
    )
}

export default RemoveButtonPage
