import React,{useState, useEffect} from 'react'
import '../styles/cart.css'
import CartTitleComponent from '../components/Title/CartTitleComponent'
import SimpleDescComponent from '../components/Descriptions/SimpleDescComponent'
import RemoveButtonPage from './Buttons/RemoveButtonPage'
import CartBuyButtonComponent from '../components/Buttons/CartBuyButtonComponent'
import CartComponent from '../components/Cart/CartComponent'
import {useTranslation} from 'react-i18next';
import CartProductTitleComponent from '../components/Title/CartProductTitleComponent'
import CartCostProduct from '../components/Cart/CartCostProduct'
import CartProductImageComponent from '../components/Images/CartProductImageComponent'
import CartTotalCostComponent from '../components/Title/CartTotalCostComponent'
import axios from 'axios'

const CartPage = (props) => {
    const [error, setError] = useState('')
    const totalCost = props.cart.map((item)=>item.Price).reduce((a,b)=> a + b,0)
    const { t } = useTranslation();


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
            axios.post(`/create-checkout-session`,{
            name: names
            })
            .then(res => {
                // console.log(res.data)
                // setError(res.data)
                window.location.href = res.data
            })
            .catch((error) => console.log('error'));
        } else {
            setError(t("addSomthingToYourCart"))
        }
        
    }
 
    return (
        <CartComponent>

            <CartTitleComponent/>
            
            <div className='cart_line'></div>
            
            {
                props.cart.map((item, i)=>
                    <div key={i} className='cart_product'>
                        <CartProductImageComponent photourl={item.PhotoURL} />
                        <div className='cart_product-info'>
                            <div className='cart_product-info_top'>
                                <CartProductTitleComponent val={item.Name}/>
                                <CartCostProduct price={item.Price}/>
                            </div>
                            <div className='cart_product-info_bottom'>
                                <SimpleDescComponent>
                                    {item.Descriptions}
                                </SimpleDescComponent>
                                
                                <RemoveButtonPage id={i} val={'Remove'}/>
                            </div>
                        </div>             
                    </div>
                )
            }

            <div className="cart-buy-section">
                <CartTotalCostComponent val={`${t("total")}: ${totalCost}`} />
                
                <div onClick={() => buyItem(props.cart)}>
                    <CartBuyButtonComponent val={t("buy")}/>
                </div>
            </div>
            
            <div className="cart-error">{error}</div>

        </CartComponent>
    )
}

export default CartPage
