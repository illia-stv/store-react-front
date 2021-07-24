import React from 'react'
import '../styles/home.css'
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';


function Home(props) {
    const { t } = useTranslation();
      
    return (
        <div>
           { 
           props.theme == 'light' ?
                <div className='intro'>
                    <div className="introduce-img">
                    </div>
                    <div className="intro-box">
                        <h2>iPhone 12</h2>
                        
                        <h3>{t("titles.part1")}</h3>
                        
                        <h4>
                            {t("descs.part1")}
                        </h4>

                        {/* <div className="intro-flex">
                            <a onClick={() => linkClick('LearnMore')}>{t("learnMore")} {arrow}</a>
                            <a onClick={() => linkClick('Buy')}>{t("buy")} {arrow}</a>
                        </div> */}
                    </div>
                </div>
            :
                null
            }
           <div className="iphone12">
                <div className="iphon12-section_img">
                </div>

                <div className="iphon12-section">
                    <div className="iphon12-section_info-section">
                        
                        <h2>iPhone 12 Pro</h2>
                        
                        <h3>{t("titles.part2")}</h3>
                        
                        <h4>
                            {t("descs.part2")}
                        </h4>

                        {/* <div className="iphon12-section_info-section-flex">
                            <a onClick={() => linkClick('LearnMore')}>{t("learnMore")} {arrow}</a>
                            <a onClick={() => linkClick('Buy')}>{t("buy")} {arrow}</a>
                        </div> */}

                    </div>
                </div>
           </div>

           <div className="iPadPro">
                <div className="iPadPro-section_img">
                </div>

                <div className="iPadPro-section">
                    <div className="iPadPro-section_info-section">
                        
                        <h2>iPad Pro</h2>
                        
                        <h3>{t("titles.part3")}</h3>
                        
                       

                        {/* <div className="iPadPro-section_info-section-flex">
                            <a onClick={() => linkClick('LearnMore')}>{t("learnMore")} {arrow}</a>
                            <a onClick={() => linkClick('Buy')}>{t("buy")} {arrow}</a>
                        </div> */}

                    </div>
                </div>
           </div>
            
            
            

        </div>
    )
}

Home.propTypes = {
    theme: PropTypes.string,
}
export default Home
