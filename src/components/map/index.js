import React from "react";

function maps(){
    return {
        __html:
          '<iframe src="https://maps.google.com/maps?q=safeta%20zajke%20310&t=&z=13&ie=UTF8&iwloc=&output=embed" height="300" frameborder="0" style="border:0; width:100vw;" allowfullscreen="" aria-hidden="false" tabindex="0" async defer></iframe>',
      };
}



export default function Map() {
    return(
        <div className="map-wrapper">
            <div className="map1" dangerouslySetInnerHTML={maps()}></div>

        </div>
    )
}