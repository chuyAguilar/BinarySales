import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divisiones from "@/components/Divisiones";
import Impresion3D from "@/components/Impresion3D";
import DivisionDigital from "@/components/DivisionDigital";
import Problema from "@/components/Problema";
import Servicios from "@/components/Servicios";
import TiposChatbot from "@/components/TiposChatbot";
import ComoFunciona from "@/components/ComoFunciona";
import PorQue from "@/components/PorQue";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divisiones />
        {/* División 3D primero: es la línea con la que arranca FormaZero */}
        <Impresion3D />
        <DivisionDigital />
        <Problema />
        <Servicios />
        <TiposChatbot />
        <ComoFunciona />
        <PorQue />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
