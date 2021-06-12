import React from 'react';
import { Button } from 'antd';

export const IntroScreen = ( { scroll } ) => {
    return (
        <section className="intro__section" id="intro">
            <div className="intro__title">
                <h1>Taking your consciousness to the <span>next level</span></h1>
                <h2>
                    Join us in our meditation center and live a unique experience in the heart of Bali
                </h2>

                <Button type="primary" size="large" onClick={ scroll }>
                    Join Us
                </Button>

            </div>
        </section>
    )
}
