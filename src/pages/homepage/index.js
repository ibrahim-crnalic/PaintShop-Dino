import React from "react";
import Hero from "../../components/hero";
import About from "../../components/about";
import Map from "../../components/map";

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      <About />
      <Map/>
    </div>
  );
}
