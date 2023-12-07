import React, {useState, useEffect } from 'react';
import '../App.css';
// import anigif from '../assets/anigif.gif';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
                <h1>O nama</h1>
                <div className="container">
                    <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                        <p>Bavimo se završnim građevinskim radovima. Izvodimo fasaderske, soboslikarske, keramičarske kao i knauferske radove, odnosno radove suhe gradnje. 
                            Pored toga radimo i kompletne adaptacije stanova, kuća, kupaonica i potkrovlja. Sjedište naše tvrtke je u mjestu Ivanić-Grad, a poslujemo na području cijele Hrvatske. </p>
                    </div>
                {/* <div className="spacer"></div> */}
                    <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                        {/* <img src={anigif} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} /> */}
                    </div>
                </div>
            </div>
    );
}

export default AboutComponent;