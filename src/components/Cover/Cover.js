import React from 'react';

import './Cover.css';

import title from '../../assets/images/thegentlemen.png';

import glass from '../../assets/images/glass.png';

import award01 from '../../assets/images/awards-w-01.png';
import award02 from '../../assets/images/awards-w-02.png';
import award03 from '../../assets/images/awards-w-03.png';
import award04 from '../../assets/images/awards-w-04.png';


export default function Cover({removeCover}) {

    const goToWeb = () => {
        removeCover(false)
    }

    return (
        <div className="cover-background">
            <div className="cover-container">
            
            <div className="title-container">
                <img src={title} />
                <div className="cocktail">cocktail</div>
            </div>

            <div className="text-container">
                If you like to enjoy drinks with family, friends, boys, girls,... This is your app.<br />
                Get into it and llok for the best cocktails recepies and have a nice time while enjoy the different tastes.
            </div>
            
            <div className="button-container">
                <button
                    type='submit'
                    className='button-cover'
                    onClick={goToWeb}
                >
                    Search
                </button>
            </div>


            <div className="bottom-container">

                <div className="awards-left-container">

                    <div className="award">
                        <img src={award01} />
                    </div>
                    
                    <div className="award">
                        <img src={award02} />
                    </div>

                </div>
         
                <div className="glass-container">
                    <img src={glass} />
                </div>
         
                <div className="awards-right-container">
                
                    <div className="award-right">
                        <img src={award03} />
                    </div>
                    
                    <div className="award-right">
                        <img src={award04} />
                    </div>
                
                </div>

            </div>

            </div>
        </div>
    )
    
}
