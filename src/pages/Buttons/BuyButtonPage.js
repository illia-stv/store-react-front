import React from 'react'
import axios from 'axios'
import ProductButtonComponent from '../../components/Buttons/ProductButtonComponent'

const BuyButtonPage = ({val, item}) => {
    const buyItem = (item) => {
        // console.log(item.Price)
        const name = item.Name.split(' ').join('').toLowerCase()
        axios.post(`/create-checkout-session`,{
            name: [name] 
        })
        .then(res => {
            // console.log(res.data)
            window.location.href = res.data
        })
        .catch((error) => console.log(error));
    }
    return (
        <div onClick={()=> buyItem(item)}>
            <ProductButtonComponent val={val} />
        </div>
    )
}

export default BuyButtonPage
