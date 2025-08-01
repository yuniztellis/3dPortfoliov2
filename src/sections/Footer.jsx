import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 max-w-8xl mx-auto flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Termos e Condições</p>
        <p>|</p>
        <p>Politicas de Privacidade</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
      </div>
      <p className="text-white-500 items-center text-center justify-center">
        Criado por Yuniz Tellis todos direitos reservados
      </p>
    </section>
  );
};

export default Footer;
