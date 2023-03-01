import React from "react";
import { Carousel } from "react-carousel-minimal";
import Picture1 from "../../assets/images/slika1.jpg";
import Picture2 from "../../assets/images/slika2.jpg";
import Picture3 from "../../assets/images/slika3.jpg";
import Picture4 from "../../assets/images/slika4.jpg";
import Picture5 from "../../assets/images/slika5.jpg";
import Picture6 from "../../assets/images/slika6.jpg";
import Picture7 from "../../assets/images/slika7.jpg";
import Picture8 from "../../assets/images/slika8.jpg";
import Picture9 from "../../assets/images/slika9.jpg";
import Picture10 from "../../assets/images/slika10.jpg";
import Picture11 from "../../assets/images/slika11.jpg";
import Picture12 from "../../assets/images/slika12.jpg";
import Picture13 from "../../assets/images/slika13.jpg";
import Picture14 from "../../assets/images/slika14.jpg";
import Picture15 from "../../assets/images/slika15.jpg";
import Picture16 from "../../assets/images/slika16.jpg";
import Picture17 from "../../assets/images/slika17.jpg";
import Picture18 from "../../assets/images/slika18.jpg";
import Picture19 from "../../assets/images/slika19.jpg";
import Picture20 from "../../assets/images/slika20.jpg";
import Picture21 from "../../assets/images/slika21.jpg";
import Picture22 from "../../assets/images/slika22.jpg";
import Picture23 from "../../assets/images/slika23.jpg";
import Picture24 from "../../assets/images/slika24.jpg";
import Picture25 from "../../assets/images/slika25.jpg";
import Picture26 from "../../assets/images/slika26.jpg";
import Picture27 from "../../assets/images/slika27.jpg";
import Picture28 from "../../assets/images/slika28.jpg";
import Picture29 from "../../assets/images/slika29.jpg";
import Picture30 from "../../assets/images/slika30.jpg";
import Picture31 from "../../assets/images/slika31.jpg";
import Picture32 from "../../assets/images/slika32.jpg";
import Picture33 from "../../assets/images/slika33.jpg";
import Picture34 from "../../assets/images/slika34.jpg";
import Picture35 from "../../assets/images/slika35.jpg";
import Picture36 from "../../assets/images/slika36.jpg";
import Picture37 from "../../assets/images/slika37.jpg";
import Picture38 from "../../assets/images/slika38.jpg";
import Picture39 from "../../assets/images/slika39.jpg";
import Picture40 from "../../assets/images/slika40.jpg";
import Hero1 from "../../assets/images/hero-first.png";
import Hero2 from "../../assets/images/hero-second.jpg";
import Navbar from "../../components/navbar";
export default function Gallery() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="gallery-wrapper">
      <Navbar />
      <div className="carousel">
        <Carousel
          data={data}
          time={2000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="0px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
}
const data = [
  { image: Picture1, caption: "" },
  { image: Picture2, caption: "" },
  { image: Picture3, caption: "" },
  { image: Picture4, caption: "" },
  { image: Picture5, caption: "" },
  { image: Picture6, caption: "" },
  { image: Picture7, caption: "" },
  { image: Picture8, caption: "" },
  { image: Picture9, caption: "" },
  { image: Picture10, caption: "" },
  { image: Picture11, caption: "" },
  { image: Picture12, caption: "" },
  { image: Picture13, caption: "" },
  { image: Picture14, caption: "" },
  { image: Picture15, caption: "" },
  { image: Picture16, caption: "" },
  { image: Picture17, caption: "" },
  { image: Picture18, caption: "" },
  { image: Picture19, caption: "" },
  { image: Picture20, caption: "" },
  { image: Picture21, caption: "" },
  { image: Picture22, caption: "" },
  { image: Picture23, caption: "" },
  { image: Hero2, caption: "" },
  { image: Picture24, caption: "" },
  { image: Picture25, caption: "" },
  { image: Picture26, caption: "" },
  { image: Picture27, caption: "" },
  { image: Picture28, caption: "" },
  { image: Picture29, caption: "" },
  { image: Picture30, caption: "" },
  { image: Picture31, caption: "" },
  { image: Picture32, caption: "" },
  { image: Picture33, caption: "" },
  { image: Picture34, caption: "" },
  { image: Picture35, caption: "" },
  { image: Picture36, caption: "" },
  { image: Picture37, caption: "" },
  { image: Hero1, caption: "" },
  { image: Picture38, caption: "" },
  { image: Picture39, caption: "" },
  { image: Picture40, caption: "" },
];
