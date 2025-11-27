import React from "react";

export default function TabelaEncomendas({ encomendas, filtro }) {
    const listaFiltrada = encomendas.filter((e) =>
        e.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {listaFiltrada.map((item, i) => (
                    <tr key={i}>
                        <td>{item.nome}</td>
                        <td>{item.produto}</td>
                        <td>{item.qtd}</td>
                        <td>R$ {item.unitario}</td>
                        <td>R$ {item.qtd * item.unitario}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
