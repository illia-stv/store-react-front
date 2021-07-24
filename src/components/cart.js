import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import '../styles/cart.css'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useTranslation} from 'react-i18next';


const Cart = (props) => {
    // const history = useHistory()
    const { t } = useTranslation();
    const [error, setError] = useState('')
    // const [productsList, setProductsList] = useState([])
    const totalCost = props.cart.map((item)=>item.Price).reduce((a,b)=> a + b,0)
    
    useEffect(()=> {
        if(error !== ''){
            setError(t("addSomthingToYourCart"))
        }
    },[t("addSomthingToYourCart")])

    const buyItem = (item) => {
        // console.log(item.map((item)=> item.Name.split(' ').join('').toLowerCase()))
        const names = item.map((item)=> item.Name.split(' ').join('').toLowerCase())
        console.log(names)
        if(names.length !== 0){
            axios.post(`http://localhost:1337/create-checkout-session`,{
            name: names
            })
            .then(res => {
                // console.log(res.data)
                
                window.location.href = res.data
            })
            .catch((error) => console.log(error));
        } else {
            setError(t("addSomthingToYourCart"))
        }
        
    }


   
    return (
        <div className='cart'>
            <h1 className='cart_title'>{t("itemsInYourCart")}</h1>
            <div className='cart_line'></div>
            
            {
                props.cart.map((item, i)=>
                    <div key={i} className='cart_product'>
                        <div className='cart_product-block'>
                            <img className='cart_product-block_img' src={item.PhotoURL} />
                        </div>
                        <div className='cart_product-info'>
                            <div className='cart_product-info_top'>
                                <div className='cart_product-info_top_name'>
                                    {item.Name}
                                </div>
                                <div className='cart_product-info_top_price'>
                                    ${item.Price}
                                </div>
                            </div>
                            <div className='cart_product-info_bottom'>
                                <div className='cart_product-info_bottom_desc'>
                                    ${item.Descriptions}
                                </div>
                                <div onClick={() => props.delFromCart(i)} className='cart_product-info_bottom_remove'>
                                    Remove
                                </div>
                            </div>
                        </div>             
                    </div>
                )
            }

            <div className="cart-buy-section">
                <div className="cart-total">{t("total")}: ${totalCost}</div>
                <div className="cart-buy" onClick={() => buyItem(props.cart)}>{t("buy")}</div>
            </div>
            <div className="cart-error">{error}</div>

                       {/* {props.cart.map((item, i)=>
                <h1 key={i}>{item.id}</h1>
            )} */}

        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    delFromCart: PropTypes.func
}

export default Cart
