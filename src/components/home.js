import React from 'react'
import '../styles/home.css'
import {useHistory} from 'react-router-dom'

function Home() {
    const history = useHistory()
    const arrow = '>'

    const linkClick = (val) => {
        history.push(val)
    }

    return (
        <div>
           <div className='intro'>
            <div className="introduce-img">
            </div>
                <div className="intro-box">
                    <h2>iPhone 12</h2>
                    
                    <h3>Blast past fast.</h3>
                    
                    <h4>From $29.12/mo. for 24 mo. or $699 before trade-in <br/>
                        Buy directly from Apple with special carrier offers
                    </h4>

                    <div className="intro-flex">
                        <a onClick={() => linkClick('LearnMore')}>Learn more {arrow}</a>
                        <a onClick={() => linkClick('Buy')}>Buy {arrow}</a>
                    </div>
                </div>
           </div>
           
           <div className="iphone12">
                <div className="iphon12-section_img">
                </div>

                <div className="iphon12-section">
                    <div className="iphon12-section_info-section">
                        
                        <h2>iPhone 12 Pro</h2>
                        
                        <h3>It&lsquo;s a leep year.</h3>
                        
                        <h4>From $41.62/mo. for 24 mo. or $999 before trade-in <br/>
                            Buy directly from Apple with special carrier offers
                        </h4>

                        <div className="iphon12-section_info-section-flex">
                            <a onClick={() => linkClick('LearnMore')}>Learn more {arrow}</a>
                            <a onClick={() => linkClick('Buy')}>Buy {arrow}</a>
                        </div>

                    </div>
                </div>
           </div>

           <div className="iPadPro">
                <div className="iPadPro-section_img">
                </div>

                <div className="iPadPro-section">
                    <div className="iPadPro-section_info-section">
                        
                        <h2>iPad Pro</h2>
                        
                        <h3>Supercharged by the Apple M1 chip.</h3>
                        
                       

                        <div className="iPadPro-section_info-section-flex">
                            <a onClick={() => linkClick('LearnMore')}>Learn more {arrow}</a>
                            <a onClick={() => linkClick('Buy')}>Buy {arrow}</a>
                        </div>

                    </div>
                </div>
           </div>
            

        </div>
    )
}

export default Home
