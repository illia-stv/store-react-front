import React from 'react'
import PropTypes from 'prop-types';
import '../styles/cart.css'
// import axios from 'axios'

const Cart = (props) => {

    // const [productsList, setProductsList] = useState([])
    const totalCost = props.cart.map((item)=>item.Price).reduce((a,b)=> a + b,0)
   
    return (
        <div onClick={() => console.log(totalCost)} className='cart'>
            <h1 className='cart_title'>Items in your Cart</h1>
            <div className='cart_line'></div>
            
            {
                props.cart.map((item, i)=>
                    <div key={i} className='cart_product'>
                        <div className='cart_product-block'>
                            <img className='cart_product-block_img' src={'http://localhost:1337' + item.Photo.url} />
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

            <h1 className="cart-total">Total: ${totalCost}</h1>

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
