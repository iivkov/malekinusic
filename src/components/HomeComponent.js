import React, { useState, useEffect } from 'react';
import '../App.css';
import EUnoteSite from './EUnoteSite';
import slika from '../assets/dv_roda_2-5.gif';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Tvrtka Malekinušić d.o.o. aktivna je na našem tržištu od 2014. godine i od tada vrlo uspješno posluje. Bavimo se završnim građevinskim radovima.
                    Usmjereni smo isključivo na Vaše zamisli i želje, te nam je glavni cilj da konačna izvedba bude Vaš zahtjev, a naš maksimalno uloženi trud. 
                    Suradnja s Vama počiva na profesionalnoj, ugodnoj i pouzdanoj razini. Na prvom mjestu je zadovoljstvo klijenta, kao i kvalitetno izvršen posao. 
                    Svi djelatnici u tvrtki pristupaju svakom projektu s najvišom posvećenosti i pozornosti. Uvjerite se u našu učinkovitost, brzinu, točnost i kvalitetu. 
                    Stojimo Vam na raspolaganju. Čekamo Vaš poziv.</p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;