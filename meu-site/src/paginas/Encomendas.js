import React, { useState } from "react";
import TabelaEncomendas from "../components/TabelaEncomendas";
import FormEncomenda from "../components/FormEncomenda";
import "../css/encomenda.css";

export default function Encomendas() {
    const [filtro, setFiltro] = useState("");

    const [encomendas, setEncomendas] = useState([
        { nome: "Carolina Lima", produto: "Mini Kit de Tinta Acrílica", qtd: 3, unitario: 65 },
        { nome: "Amanda Clain", produto: "Bloco de Papel para Aquarela", qtd: 8, unitario: 32 },
        { nome: "Guilherme Amaral", produto: "Kit de Tinta a Óleo Clássica", qtd: 0, unitario: 35 },
        { nome: "Kamile Joarez", produto: "Kit de giz oleoso", qtd: 1, unitario: 59 },
    ]);

    const adicionarEncomenda = (nova) => {
        setEncomendas([...encomendas, nova]);
    };

    return (
        <>
            <h1 className="texto-laranja">Tabela</h1>

            <section className="conteiner">
                <label className="formLabel">Buscar:</label>
                <input
                    type="text"
                    className="filtrar-tabela"
                    placeholder="Digite o cliente"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />

                <TabelaEncomendas encomendas={encomendas} filtro={filtro} />
            </section>

            <h1 className="texto-laranja">Adicionar nova encomenda</h1>

            <FormEncomenda onAdd={adicionarEncomenda} />
        </>
    );
}
