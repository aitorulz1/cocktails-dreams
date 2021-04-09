import React from 'react';

import './Cover.css';

import title from '../../assets/images/title.png';

import glass from '../../assets/images/glass.png';

import award01 from '../../assets/images/awards-01.png';
import award02 from '../../assets/images/awards-02.png';
import award03 from '../../assets/images/awards-03.png';
import award04 from '../../assets/images/awards-04.png';


export default function Cover({removeCover}) {

    const goToWeb = () => {
        removeCover(false)
    }

    return (
        <div className="cover-background">
            <div className="cover-container">
            
            <div className="title-container">
                <img src={title} />
            </div>

            <div className="text-container">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                
                    <div className="award">
                        <img src={award03} />
                    </div>
                    
                    <div className="award">
                        <img src={award04} />
                    </div>
                
                </div>

            </div>

            </div>
        </div>
    )
    
}
