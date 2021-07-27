import React from 'react'
import ProductButtonComponent from '../../components/Buttons/ProductButtonComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../reducer/reducer'


const ToCartButtonPage = ({item, val}) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.state)
    
    const addToCart = (val) => {
        const arr = state.cart.filter((item)=>item.id==val.id)
        if(arr.length == 0){
          dispatch(setCart([...state.cart, val]))
        }
      } 
    
    return (
        <div onClick={()=>addToCart(item)}>
            <ProductButtonComponent val={val} />
        </div>
    )
}

export default ToCartButtonPage
