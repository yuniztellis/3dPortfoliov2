import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("yuniztellis@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Oi, Aqui é o Yunes Teles</p>
              <p className="grid-subtext">
                Com mais de 5 anos de experiência, trabalhando com design em
                FrontEnd E BackEnd...
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Algumas tecnoloias que uso</p>
              <p className="grid-subtext">
                Sou um programador fascinado por Front-End e um entusiasta de
                Back-end
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: -25.965585,
                    lng: 32.579103,
                    text: "Estou aqui!",
                    color: "white",
                    size: 100,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Conectado com o Mundo</p>
              <p className="grid-subtext">
                De Moçambique e estou conecatado em todos os Cantos do Mundo,
              </p>
              <a href="#contact" className="w-fit">
                <Button
                  name="Conecte-se"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full  h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                Tenho uma paixão por Design e Arte
              </p>
              <p className="grid-subtext">
                Sempre tive uma paixão de em expressar os meus sentimentos em
                forma de arte e design, escolhe e area de programação para
                ajudar em conjunto qua a minha arte resolver problemas...
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contacte-me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:tx-xl font-medium text-gray_gradient text-white">
                  yuniztellis@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
