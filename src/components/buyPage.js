import React from 'react'
import '../styles/buyPage.css'

const BuyPage = () => {
    return (

        <div className="container">
            <form>
            <div className="row">
                <h4>Account</h4>
                <div className="input-group input-group-icon"><input type="text" placeholder="Full Name" />
                <div className="input-icon"><i className="fa fa-user" /></div>
                </div>
                <div className="input-group input-group-icon"><input type="email" placeholder="Email Adress" />
                <div className="input-icon"><i className="fa fa-envelope" /></div>
                </div>
                <div className="input-group input-group-icon"><input type="password" placeholder="Password" />
                <div className="input-icon"><i className="fa fa-key" /></div>
                </div>
            </div>
            <div className="flex-box">
                <div className="col-half">
                    <h4>Date of Birth</h4>
                    <div className="input-group">
                        <div className="col-third"><input type="text" placeholder="DD" /></div>
                        <div className="col-third"><input type="text" placeholder="MM" /></div>
                        <div className="col-third"><input type="text" placeholder="YYYY" /></div>
                    </div>
                </div>
                <div className="col-half">
                    <h4>Gender</h4>
                    <div className="input-group"><input id="gender-male" type="radio" name="gender" defaultValue="male" /><label htmlFor="gender-male">Male</label><input id="gender-female" type="radio" name="gender" defaultValue="female" /><label htmlFor="gender-female">Female</label></div>
                </div>
            </div>
            <div className="row">
                <h4>Payment Details</h4>
                <div className="input-group"><input id="payment-method-card" type="radio" name="payment-method" defaultValue="card" defaultChecked="true" /><label htmlFor="payment-method-card"><span><i className="fa fa-cc-visa" />Credit Card</span></label><input id="payment-method-paypal" type="radio" name="payment-method" defaultValue="paypal" /><label htmlFor="payment-method-paypal"> <span><i className="fa fa-cc-paypal" />Paypal</span></label></div>
                <div className="input-group input-group-icon"><input type="text" placeholder="Card Number" />
                <div className="input-icon"><i className="fa fa-credit-card" /></div>
                </div>
                <div className="flex-box">
                    <div className="input-group input-group-icon"><input type="text" placeholder="Card CVC" />
                        <div className="input-icon"><i className="fa fa-user" /></div>
                    </div>
                    <div className="input-group input-group-icon"><input type="text" placeholder="MM/YY" />
                        <div className="input-icon"><i className="fa fa-user" /></div>
                    </div>
                </div>
                
            </div>
            
            </form>
        </div>
             
    )
}

export default BuyPage
