import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Servicios from "@/components/Servicios";
import ComoFunciona from "@/components/ComoFunciona";
import Impresion3D from "@/components/Impresion3D";
import PorQue from "@/components/PorQue";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Servicios />
        <ComoFunciona />
        <Impresion3D />
        <PorQue />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
