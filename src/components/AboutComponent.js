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
                    <p>Tvrtka MALEKINUŠIĆ d.o.o. aktivna je na našem tržištu od 2014. godine i od tada vrlo uspješno posluje. Bavimo se završnim građevinskim radovima. 
                    Izvodimo fasaderske, soboslikarske, keramičarske kao i knauferske radove, odnosno radove suhe gradnje. Pored toga radimo i kompletne adaptacije stanova, kuća, kupaonica i potkrovlja. 
                    Usmjereni smo isključivo na Vaše zamisli i želje, te nam je glavni cilj da konačna izvedba bude Vaš zahtjev, a naš maksimalno uloženi trud. Suradnja s Vama počiva na profesionalnoj, ugodnoj i pouzdanoj razini. 
                    Na prvom mjestu je zadovoljstvo klijenta, kao i kvalitetno izvršen posao. Svi djelatnici u tvrtki pristupaju svakom projektu s najvišom posvećenosti i pozornosti. Uvjerite se u našu učinkovitost, brzinu, točnost i kvalitetu. 
                    Sjedište naše tvrtke je u mjestu Ivanić-Grad, a poslujemo na području cijele Hrvatske. Stojimo Vam na raspolaganju. Čekamo Vaš poziv.</p>
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