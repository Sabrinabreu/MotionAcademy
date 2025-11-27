import React, { useState } from "react";

export default function FormEncomenda({ onAdd }) {

    const [form, setForm] = useState({
        nome: "",
        produto: "",
        qtd: "",
        unitario: ""
    });

    const atualizar = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const enviar = (e) => {
        e.preventDefault();

        if (!form.nome || !form.produto || !form.qtd || !form.unitario) {
            alert("Preencha todos os campos!");
            return;
        }

        onAdd({
            nome: form.nome,
            produto: form.produto,
            qtd: Number(form.qtd),
            unitario: Number(form.unitario)
        });

        setForm({ nome: "", produto: "", qtd: "", unitario: "" });
    };

    return (
        <section>
            <form className="form-encomenda" onSubmit={enviar}>

                <div className="label-input">
                    <label className="formLabel">Nome do Cliente:</label>
                    <input
                        className="formInput"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={form.nome}
                        onChange={atualizar}
                        required
                    />
                </div>

                <div className="label-input">
                    <label className="formLabel">Produto:</label>

                    <select
                        className="formInput"
                        name="produto"
                        value={form.produto}
                        onChange={atualizar}
                        required
                    >
                        <option value="">Selecione um curso</option>
                        <option value="Texturização 3D">Texturização 3D</option>
                        <option value="Video Maker">Video Maker</option>
                        <option value="Animação 2D">Animação 2D</option>
                        <option value="Modelagem e Animação 3D">Modelagem e Animação 3D</option>
                        <option value="Efeitos Visuais (VFX)">Efeitos Visuais (VFX)</option>
                        <option value="Design Digital">Design Digital</option>
                        <option value="Impressão 3D">Impressão 3D</option>
                    </select>
                </div>

                <div className="label-input">
                    <label className="formLabel">Quantidade:</label>
                    <input
                        className="formInput"
                        type="number"
                        name="qtd"
                        value={form.qtd}
                        onChange={atualizar}
                        min="1"
                        max="100"
                        placeholder="Digite a quantidade"
                        required
                    />
                </div>

                <div className="label-input">
                    <label className="formLabel">Valor Unitário:</label>
                    <input
                        className="formInput"
                        type="number"
                        name="unitario"
                        value={form.unitario}
                        onChange={atualizar}
                        min="1"
                        placeholder="Digite o valor unitário"
                        required
                    />
                </div>

                <button className="encomenda-btn" type="submit">
                    Adicionar Encomenda
                </button>

            </form>
        </section>
    );
}
