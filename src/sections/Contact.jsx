import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//motions
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_oo03owe

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.send(
        "service_oo03owe",
        "template_3mgk6fd",
        {
          from_name: form.name,
          to_name: "Yunes Teles",
          from_email: form.email,
          to_email: "yuniztellis@yahoo.co.mz",
          message: form.message,
        },
        "_JksNrANJquwsX48P"
      );
      setLoading(false);

      alert("Sua mensagem foi enviada...");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);

      alert("Alguma coisa occorreu mal... Volte a mandar a sua mensagem...");
    }
  };

  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Diga me Algo</h3>
          <p className="text-lg text-white-600 mt-3">
            Estamos aqui para te ajudar a concretizar o seu projecto. Connosco
            voçê pode tornar o seu projecto uma realidade de forma descontraida
            e unica. Aqui estou para ajudar-te
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
            action=""
          >
            <label className="space-y-3">
              <span className="field-label">Digite o seu Nome Completo</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="yunes Teles"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Digite o seu email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="yunes@gonutsdesign.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Digite a sua mensagem</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                maxLength={500}
                className="field-input resize-none"
                placeholder="Oi eu gostaria de..."
              />
            </label>
            <button
              className="field-btn justify-center items-center"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
              <img
                src="assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn-arrow h-2 w-2"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
