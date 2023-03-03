import React from "react";
import Navbar from "../../components/navbar";
import Video1 from "../../assets/videos/limar.mp4";
import Video2 from "../../assets/videos/lakiranje.mp4";
import Video3 from "../../assets/videos/glasurit.mp4";
export default function Services() {
  return (
  
    <>
      <Navbar />
    <div className="services-wrapper">
      <div className="services-first" id="metal-parts">
        <div className="first-left">
          <iframe
            title="Video 1"
            src={Video1}
            width="500"
            height="600"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            autoplay
          ></iframe>
        </div>
        <div className="first-right">
          <p>
            Paint shop Dino osnovan je 2006 godine i od tada je mjesto gdje se
            vaši problemi s oštećenim vozilima rješavaju s lakoćom. Naš tim
            iskusnih i certificiranih stručnjaka posvećen je pružanju vrhunske
            usluge za sve vrste oštećenja na vašem vozilu.
          </p>
          <p>
            
            Naša usluga autolimarije uključuje popravke karoserije, popravke i
            zamjenu dijelova, izravnavanje i poravnavanje lima i drugih
            oštećenja. Naši autolimari koriste najnovije tehnologije i alate za
            rad kako bi se osigurao brz i učinkovit popravak vašeg vozila.
          </p>
          <p className="title"> - Procjena oštećenja </p>
          <p>
            Prvi korak u procesu rada auto limara je procjena oštećenja na
            vozilu. To uključuje pregledanje vozila kako bi se utvrdilo koja
            područja trebaju popravak ili zamjenu. Također, treba utvrditi
            koliko je oštećenje duboko i da li se šteta odnosi na samo jedan dio
            vozila ili je raširena na veći broj dijelova.
          </p>
          <p className="title"> - Priprema površine </p>
          <p>
            Nakon što je utvrđeno što se treba popraviti ili zamijeniti,
            sljedeći korak je priprema površine. To uključuje čišćenje i
            uklanjanje svih dijelova koji se moraju popraviti ili zamijeniti.
            Ovo je vrlo važan korak jer će kvalitet konačne popravke uveliko
            zavisiti od kvaliteta pripreme površine.
          </p>
          <p className="title"> - Popravak oštećenja </p>
          <p>
            Kada je površina pripremljena, sljedeći korak je popravak oštećenja.
            Ovaj korak može uključivati ​​različite vrste poslova, poput
            ravnanja lima, popunjavanja praznina, brušenja i poliranja. Ovisno o
            vrsti oštećenja i veličini područja koje treba popraviti, može biti
            potrebno koristiti različite alate i tehnike za popravak.
          </p>
          <p className="title"> - Zamjena dijelova </p>
          <p>
            Ako su dijelovi prešli kritični stadij oštećenja ili ih je nemoguće
            popraviti, zamjena dijelova je neophodna. U tom slučaju, limar će
            ukloniti oštećeni dio i zamijeniti ga novim. Ovo može uključivati
            ​​zavarivanje ili postavljanje novih dijelova na mjesto oštećenih.
          </p>
        </div>
      </div>
      <div className="services-second" id="painting">
        <div className="second-left">
          <p>
            Naša usluga autolakirerstva uključuje nanošenje boje i laka na
            vozilo kako bi se obnovila oštećena ili izblijedjela boja. Naši
            autolakireri koriste najkvalitetnije boje i lakove kako bi osigurali
            izvrstan kvalitet rada.
          </p>
          <p>
            Svi radovi se izvode u modernoj i dobro opremljenoj radionici koja
            omogućava brzo i precizno obavljanje posla. Naš tim autolimara i
            autolakirera posvećen je vašim potrebama, a naš cilj je pružiti vam
            vrhunsku uslugu i izvrsne rezultate. Garantiramo kvalitet našeg rada
            i konkurentne cijene za sve usluge koje pružamo.
          </p>
          <p>
            Stoga, ako trebate uslugu autolimarije ili autolakirerstva, obratite
            se našoj autolimarsko-lakirerskoj radnji i dopustite nam da vam
            pružimo vrhunsku uslugu za vaše vozilo. Auto lakiranje je proces
            kojim se vozilu vraća sjajni i zaštićeni izgled. Ovaj proces
            uključuje nanošenje slojeva boje i laka na površinu karoserije
            vozila, što ima za cilj zaštititi vozilo od korozije i ostalih
            oštećenja te poboljšati njegov izgled.{" "}
          </p>
          <p>Postupak auto lakiranja obično se sastoji od nekoliko koraka. </p>
          <p>
            Prvi korak je priprema površine karoserije, što uključuje temeljito
            čišćenje i odmašćivanje površine kako bi se osigurala optimalna
            adhezija boje i laka.{" "}
          </p>
          <p>
            Nakon čišćenja, slijedi nanošenje osnovnog sloja. Osnovni sloj se
            nanosi kako bi se poboljšala adhezija boje na površini i ujednačila
            nijansa boje. Nakon nanošenja osnovnog sloja, slijedi brušenje
            površine kako bi se uklonile neravnine i stvorila glatka površina.
          </p>
          <p>
            {" "}
            Sljedeći korak je nanošenje sloja boje. Boja se nanosi u tankim
            slojevima kako bi se postigla ujednačena boja, a svaki sloj mora se
            osušiti prije nanošenja sljedećeg. Nakon nanošenja sloja boje,
            slijedi nanošenje sloja laka koji će zaštititi boju od vanjskih
            utjecaja i pružiti sjajni završetak.{" "}
          </p>
          <p>
            {" "}
            Nakon nanošenja laka, slijedi sušenje vozila u sušionici kako bi se
            osigurala potpuna adhezija boje i laka na površini. Kada se vozilo
            osuši, slijedi detaljno brušenje i poliranje površine kako bi se
            postigao sjajni i glatki završetak.
          </p>
        </div>
        <div className="second-right">
          <iframe
            title="Video 2"
            src={Video2}
            width="500"
            height="600"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            autoplay
          ></iframe>
        </div>
      </div>
      <div className="services-third">
        <div className="third-left">
          <iframe
            title="Video 3"
            src={Video3}
            width="500"
            height="600"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            autoplay
          ></iframe>
        </div>
        <div className="third-right">
          <p>
            Glasurit vodena baza je tehnologija koja se koristi u auto lakiranju
            kao alternativa tradicionalnim otapalima baziranim na otprilike 80%
            otapala i 20% boje. </p>
           <p>  Umjesto toga, Glasurit vodena baza koristi vodu
            kao otapalo, što čini ovu tehnologiju ekološki prihvatljivijom i
            manje štetnom za okoliš. Glasurit vodena baza se sastoji od tri
            dijela: osnovnog premaza, boje i laka. </p>
            <p> Osnovni premaz se nanosi na
            površinu automobila kako bi se poboljšala adhezija i stvorio glatki
            temelj za nanošenje boje. Nakon nanošenja osnovnog premaza, slijedi
            nanošenje boje u nekoliko tankih slojeva. Boja se nanosi pomoću
            posebnog uređaja za nanošenje boje, kojim se postiže precizno
            nanošenje boje i manja potrošnja materijala. </p>
            <p>Prednosti Glasurit
            vodene baze su mnoge. Ova tehnologija je ekološki prihvatljivija od
            tradicionalnih metoda lakiranja, jer ne koristi štetna otapala koja
            emitiraju isparljive organske spojeve. Također, Glasurit vodena baza
            daje odlične rezultate u smislu kvalitete, izdržljivosti i sjaja, te
            nudi veliku paletu boja koje se mogu prilagoditi bilo kojem
            vozilu. </p>
            <p> Nakon nanošenja boje, slijedi nanošenje laka u tankom sloju.
            Lak ima za cilj zaštititi boju od vanjskih utjecaja, poboljšati sjaj
            i stvoriti zaštitni sloj koji će produžiti trajnost boje. </p>
            <p> Glasurit
            bezbojni lakovi su vrsta lakova koja se koristi u autoindustriji za
            zaštitu i poboljšanje sjaja površina automobila. Bezbojni lak se
            nanosi nakon nanošenja boje i ima za cilj zaštititi boju od vanjskih
            utjecaja, kao što su UV zrake, kiša, snijeg, sol, prljavština i
            drugi faktori koji bi mogli oštetiti površinu vozila. </p>
            <p>Glasurit
            bezbojni lakovi su izuzetno izdržljivi i otporni na habanje, te
            pružaju dugotrajnu zaštitu i sjaj automobilima. Ovi lakovi su
            dostupni u različitim stepenima sjaja, uključujući mat, saten i
            visoki sjaj, što omogućuje vlasnicima automobila da odaberu željeni
            izgled. </p> 
            <p>Bezbojni lakovi su izuzetno važni jer štite boju i površinu
            vozila od oštećenja, ali također poboljšavaju izgled automobila.
            Bezbojni lak može poboljšati sjaj boje, čime automobil izgleda
            novije i privlačnije, te također može sakriti male ogrebotine i
            nedostatke na površini automobila. </p>
            <p> Glasurit bezbojni lakovi koriste
            najnoviju tehnologiju koja osigurava visoku kvalitetu, dugotrajnost
            i otpornost na vanjske uticaje. Ovi lakovi su dizajnirani tako da se
            lako nanose i brzo suši, što znači da se vozilo može brzo vratiti u
            upotrebu nakon nanošenja. </p>
            <p>Uz sve to, Glasurit bezbojni lakovi su
            ekološki prihvatljivi i ispunjavaju stroge sigurnosne standarde, što
            znači da su sigurni za okoliš i za osobe koje rade s njima.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
