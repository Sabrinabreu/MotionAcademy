import React from "react";

export default function CardCatalogo({ produto, onClick }) {
  return (
    <div className="produtos-card" onClick={onClick}>
      <img className="produtos-image" src={produto.img} width="150" />

      <div className="produtos-info">
        <h2>{produto.nome}</h2>
        <h3>{produto.preco}</h3>
        <p>{produto.descricao}</p>

        <button className="produtos-button">
          Ver mais
        </button>
      </div>
    </div>
  );
}
