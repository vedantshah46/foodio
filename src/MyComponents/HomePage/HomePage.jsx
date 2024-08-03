import React from 'react'
import homePageHeroSectionBg from './Images/homePageHeroSectionBg.png';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <div className="sectionOne">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="hpSectionOneLeft">
                                
                                <div className="hpSectionOneLeftText">
                                    <p>Best Taste</p>
                                    <h1>Healthy & Tasty food.</h1>
                                    <h6>Delight in the world of delectable, healthful cuisine that thrills your taste buds while feeding your body - welcome to the universe of Nutritious & Tasty food!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="hpSectionOneRight">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}