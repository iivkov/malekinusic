import React from 'react';
import '../App.css';
import Petrinja from '../assets/Petrinja.jpg';
import EUnoteSite from './EUnoteSite';
import EUnoteProject from './EUnoteProject';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>NOVI RAZVOJ U PETRINJI MALEKINUŠIĆ d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0142</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
            <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                    Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju: konkurentnost i održivost poslovanja i proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                    Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                    Projekt vodi računa o zaštiti okoliša.</p>
        </div>
        <div className="container">
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 22.04.2022.</p>
                <p>Kraj provedbe: 19.10.2023.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 207.850,55</p>
                <p>Ukupna bespovratna sredstva (EUR): 176.672,97</p>
            </div>
        </div>
        <EUnoteProject />
        <div className="container">
            <div className="activity-box">
                <h3>Aktivnosti projekta</h3>
                <p>Aktivnost 1: Ulaganje u materijalnu imovinu (1/2)</p>
                <p>Aktivnost 2: Marketing i promocija proizvoda i usluga</p>
                <p>Aktivnost 3: Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika</p>
                <p>Aktivnost 4: Prijava na Poziv</p>
                <p>Aktivnost 5: Provedba postupka nabave za potrebe projekta</p>
                <p>Aktivnost 6: Promicanje horizontalnih načela</p>
                <p>Aktivnost 7: Upravljanje projektom</p>
                <p>Aktivnost 8: Promidžba i vidljivost</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Sve aktivnosti nabave iz predmetnog projekta</h3>
                <p>1. planiran je postupak nabave</p>
                <p>2. određene su karakteristike roba i/ili usluga koje se planiraju nabavljati u postupku nabave</p>
                <p>3. proveden je postupak nabave</p>
                <p>4. odabran je isporučitelj roba i/ili usluga</p>
                <p>5. predmetna aktivnost je provedena u cijelosti, kako je bilo planirano, sukladno propisanim pravilima i projektnim prijedlogom (pridržavanje vremenskih rokova početka i završetka provedbe aktivnosti)</p>
                <p>6. roba i/ili usluga je od strane odabranog isporučitelja isporučena na vrijeme, do roka određenog u Ugovoru.</p>
                <p>7. zaključen je zapisnik o primopredaji roba i/ili usluga</p>
                <p>8. izdan je račun od strane isporučitelja</p>
                <p>9. račun je plaćen u roku</p>
                <br />
                <p>U provedbi predmetne aktivnosti nije bilo značajnih problema.</p>
                <p>Ostvareni su rezultati koji su bili planirani - nabava roba i/ili usluga.</p>
                <p>Održane su planirane edukacije djelatnika, u količini radnih sati koje je ponudio isporučitelj.</p>
                <p>Nabavljena roba i/ili usluga se koristi u svakodnevnom poslovanju gospodarskog subjekta.</p>
            </div>
        </div>
        <EUnoteProject />
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o projektu</h3>
                <p>Kod projekta: KK.08.2.1.16.0142</p>
                <p>Posredničko tijelo razine 1 (PT1): Ministarstvo regionalnoga razvoja i fondova Europske unije</p>
                <p>Posredničko tijelo razine 2 (PT2): Središnja agencija za financiranje i ugovaranje programa i projekata Europske unije</p>
                <p>Početak provedbe: 22.04.2022.</p>
                <p>Kraj provedbe: 19.10.2023.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Podatci o korisniku</h3>
                <p>Prijavitelj: MALEKINUŠIĆ d.o.o. za gradnju, trgovinu i usluge</p>
                <p>Jedinstveni broj prijavitelja: 66053112060</p>
                <p>Adresa: Kunekova ulica 2 B, Ivanić Grad</p>
                <p>E-pošta: jozomalekinusic@gmail.com</p>
                <p>Telefon: +385 98622267</p>
                <p>Odgovorna osoba: JOZO MALEKINUŠIĆ</p>
            </div>
        </div>
        <div className="container">
            <div className="activity-box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 207.850,55</p>
                <p>Ukupna bespovratna sredstva (EUR): 176.672,97 (EU sufinanciranje)</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;