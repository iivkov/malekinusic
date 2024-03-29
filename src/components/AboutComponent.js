import React, {useState, useEffect } from 'react';
import EUnoteSite from './EUnoteSite';
import '../App.css';
import slika from '../assets/dv_roda_1.jpg';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
            <EUnoteSite/>
            <h1>O nama</h1>
            <div className="container">
                <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                    <p>Naša glavna djelatnost su završni građevinski radovi. Izvodimo fasaderske, soboslikarske, keramičarske kao i knauferske radove, odnosno radove suhe gradnje. 
                        Pored toga radimo i kompletne adaptacije stanova, kuća, kupaonica i potkrovlja. Sjedište naše tvrtke je u mjestu Ivanić-Grad, a poslujemo na području cijele Hrvatske. </p>
                </div>
            {/* <div className="spacer"></div> */}
                <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                    <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;