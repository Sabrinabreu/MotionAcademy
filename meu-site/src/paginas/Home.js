import React from "react";
import Banner from "../components/Banner";
import SobreNos from "../components/SobreNos";
import Mapa from "../components/Mapa";
import CardEstilo from "../components/CardEstilo";
import InspiracaoMes from "../components/InspiracaoMes";

export default function Home() {
  return (
    <>
      <Banner />
      <SobreNos />
      <Mapa />
      <CardEstilo />
      <InspiracaoMes />
    </>
  );
}
