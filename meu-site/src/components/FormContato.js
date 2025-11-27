import React, { useState } from "react";

export default function FormContato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    preferenciaContato: "",
    motivo: "",
    novidades: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
  }

  return (
    <div className="container-form">
      <form className="formContact" onSubmit={handleSubmit}>
        <div className="label-input">
          <label className="formLabel">Nome e Sobrenome</label>
          <input
            className="formInput"
            type="text"
            name="nome"
            placeholder="Digite seu nome completo"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div className="label-input">
          <label className="formLabel">E-mail</label>
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="label-input">
          <label className="formLabel">Telefone</label>
          <input
            className="formInput"
            type="tel"
            name="telefone"
            placeholder="(00) 00000-0000"
            value={form.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="label-input">
          <label className="formLabel">Mensagem</label>
          <textarea
            className="formInput"
            name="mensagem"
            rows="6"
            placeholder="Como podemos te ajudar?"
            value={form.mensagem}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="label-input">
          <p className="formLabel">Como prefere o contato?</p>

          <label>
            <input
              type="radio"
              name="preferenciaContato"
              value="email"
              checked={form.preferenciaContato === "email"}
              onChange={handleChange}
            />{" "}
            E-mail
          </label>

          <label>
            <input
              type="radio"
              name="preferenciaContato"
              value="telefone"
              checked={form.preferenciaContato === "telefone"}
              onChange={handleChange}
            />{" "}
            Telefone
          </label>

          <label>
            <input
              type="radio"
              name="preferenciaContato"
              value="whatsapp"
              checked={form.preferenciaContato === "whatsapp"}
              onChange={handleChange}
            />{" "}
            WhatsApp
          </label>
        </div>

        <div className="label-input">
          <label className="formLabel">Qual o motivo do contato?</label>
          <select
            className="formInput"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="duvida">Dúvida</option>
            <option value="sugestao">Sugestão</option>
            <option value="elogio">Elogio</option>
            <option value="reclamacao">Reclamação</option>
          </select>
        </div>

        <div className="label-input">
          <label>
            <input
              type="checkbox"
              name="novidades"
              checked={form.novidades}
              onChange={handleChange}
            />{" "}
            Gostaria de receber nossas novidades por e-mail
          </label>
        </div>

        <button className="btnContact" type="submit">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
