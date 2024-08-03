import React from 'react'
import homePageHeroSectionBg from './Images/homePageHeroSectionBg.png';
import './HomePage.css';
import sectionOneRightTopOne from './Images/sectionOneRightTopOne.jpg';
import sectionOneRightBottomOne from './Images/sectionOneRightBottomOne.jpg'

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

                                <button type="button" class="btn btn-danger mt-4">Get Menu</button>
                            </div>
                        </div>

                        <div className="col-6 hpSectionOneRight">
                            <div class="introImages">
                                <img src={sectionOneRightBottomOne} alt="Food 1" class="image1" />
                                <img src={sectionOneRightTopOne} alt="Food 2" class="image2" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="sectionTwo">

            </div>
        </>
    )
}