import React from "react";
import Certificate1 from "../../assets/images/certificate1.jpg";
import Certificate2 from "../../assets/images/certificate2.jpg";
import { NavHashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div className="about-wrapper" id="about">
      <div className="about-row">
        <div className="about-left">
          <img src={Certificate1} alt="certificate-image" />
        </div>
        <div className="about-right">
          <p>
            Paint shop Dino osnovan je 2006 godine i od tada je mjesto gdje se
            vaši problemi s oštećenim vozilima rješavaju s lakoćom. Naš tim
            iskusnih i certificiranih stručnjaka posvećen je pružanju vrhunske
            usluge za sve vrste oštećenja na vašem vozilu. Naša usluga
            autolimarije uključuje popravke karoserije, popravke i zamjenu
            dijelova, izravnavanje i poravnavanje lima i drugih oštećenja. Naši
            autolimari koriste najnovije tehnologije i alate za rad kako bi se
            osigurao brz i učinkovit popravak vašeg vozila.
          </p>
          <NavHashLink className="read-more" to="/services#metal-parts">Saznaj više</NavHashLink>
        </div>
      </div>
      <div className="about-row-second">
        <div className="about-right">
          <p>
            Naša usluga autolakirerstva uključuje nanošenje boje i laka na
            vozilo kako bi se obnovila oštećena ili izblijedjela boja. Naši
            autolakireri koriste najkvalitetnije boje i lakove kako bi osigurali
            izvrstan kvalitet rada. Svi radovi se izvode u modernoj i dobro
            opremljenoj radionici koja omogućava brzo i precizno obavljanje
            posla. Naš tim autolimara i autolakirera posvećen je vašim
            potrebama, a naš cilj je pružiti vam vrhunsku uslugu i izvrsne
            rezultate. Garantiramo kvalitet našeg rada i konkurentne cijene za
            sve usluge koje pružamo. Stoga, ako trebate uslugu autolimarije ili
            autolakirerstva, obratite se našoj autolimarsko-lakirerskoj radnji i
            dopustite nam da vam pružimo vrhunsku uslugu za vaše vozilo.
          </p>
          <NavHashLink className="read-more" to="/services#painting">Saznaj više</NavHashLink>
        </div>
        <div className="about-left">
          <img src={Certificate2} alt="certificate-image" />
        </div>
      </div>

    </div>
  );
}
