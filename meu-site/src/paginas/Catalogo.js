import React from "react";
import CardCatalogo from "../components/CardCatalogo";
import { useNavigate } from "react-router-dom";
import "../css/catalogo.css";

// IMPORT DAS IMAGENS
import kitAquarelaProf from "../assets/kitAquarelaProf.jpg";
import kitAquarelaProf2 from "../assets/kitAquarelaProf2.jpg";
import kitAquarelaProf3 from "../assets/kitAquarelaProf3.jpg";
import kitAquarelaProf4 from "../assets/kitAquarelaProf4.jpg";

import kitPincelRedondo from "../assets/kitPincelRedondo.webp";
import kitPincelRedondo2 from "../assets/kitPincelRedondo2.jpg";
import kitPincelRedondo3 from "../assets/kitPincelRedondo3.jpg";
import kitPincelRedondo4 from "../assets/kitPincelRedondo4.jpg";

import kitAcrilica from "../assets/kitAcrilica.jpg";
import kitAcrilica2 from "../assets/kitAcrilica2.jpg";
import kitAcrilica3 from "../assets/kitAcrilica3.jpg";
import kitAcrilica4 from "../assets/kitAcrilica4.jpg";

import blocoAquarela from "../assets/blocoAquarela.jpg";
import blocoAquarela2 from "../assets/blocoAquarela2.jpg";
import blocoAquarela3 from "../assets/blocoAquarela3.jpg";
import blocoAquarela4 from "../assets/blocoAquarela4.jpg";

import gizOleoso from "../assets/gizOleoso.jpg";
import gizOleoso2 from "../assets/gizOleoso2.jpg";
import gizOleoso3 from "../assets/gizOleoso3.jpg";
import gizOleoso4 from "../assets/gizOleoso4.jpg";

import kitLapisCor from "../assets/kitLapisCor.jpg";
import kitLapisCor2 from "../assets/kitLapisCor2.jpg";
import kitLapisCor3 from "../assets/kitLapisCor3.jpg";
import kitLapisCor4 from "../assets/kitLapisCor4.jpg";

import kitTintaOleo from "../assets/kitTintaOleo.jpg";
import kitTintaOleo2 from "../assets/kitTintaOleo2.jpg";
import kitTintaOleo3 from "../assets/kitTintaOleo3.jpg";
import kitTintaOleo4 from "../assets/kitTintaOleo4.jpg";

export default function Catalogo() {

  const data = new Date();
  const dia = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const mes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

  const produtos = [
    {
      nome: "Kit de Aquarela Profissional",
      preco: "R$ 55,00",
      img: kitAquarelaProf,
      imagensDetalhes: [
        kitAquarelaProf,
        kitAquarelaProf2,
        kitAquarelaProf3,
        kitAquarelaProf4,
      ],
      descricao: "Conjunto completo de aquarelas de alta qualidade, com cores vivas e ótima solubilidade."
    },

    {
      nome: "Pincéis Artísticos Premium",
      preco: "R$ 45,99",
      img: kitPincelRedondo,
      imagensDetalhes: [
        kitPincelRedondo,
        kitPincelRedondo2,
        kitPincelRedondo3,
        kitPincelRedondo4,
      ],
      descricao: "Kit de pincéis variados, ideais para pintura a óleo, acrílica e aquarela."
    },

    {
      nome: "Mini Kit de Tinta Acrílica",
      preco: "R$ 65,00",
      img: kitAcrilica,
      imagensDetalhes: [
        kitAcrilica,
        kitAcrilica2,
        kitAcrilica3,
        kitAcrilica4,
      ],
      descricao: "Cores vibrantes e de secagem rápida, perfeitas para técnicas mistas."
    },

    {
      nome: "Bloco de Papel para Aquarela",
      preco: "R$ 32,00",
      img: blocoAquarela,
      imagensDetalhes: [
        blocoAquarela,
        blocoAquarela2,
        blocoAquarela3,
        blocoAquarela4,
      ],
      descricao: "Papel 300g/m² com textura especial para técnicas úmidas."
    },

    {
      nome: "Kit de Giz Oleoso",
      preco: "R$ 59,99",
      img: gizOleoso,
      imagensDetalhes: [
        gizOleoso,
        gizOleoso2,
        gizOleoso3,
        gizOleoso4,
      ],
      descricao: "Conjunto de giz oleoso perfeito para retratos, paisagens e estudos."
    },

    {
      nome: "Estojo de Lápis de Cor Profissionais",
      preco: "R$ 150,00",
      img: kitLapisCor,
      imagensDetalhes: [
        kitLapisCor,
        kitLapisCor2,
        kitLapisCor3,
        kitLapisCor4,
      ],
      descricao: "48 cores intensas e resistentes à luz."
    },

    {
      nome: "Kit de Tinta a Óleo Clássica",
      preco: "R$ 35,00",
      img: kitTintaOleo,
      imagensDetalhes: [
        kitTintaOleo,
        kitTintaOleo2,
        kitTintaOleo3,
        kitTintaOleo4,
      ],
      descricao: "Pigmentos de alta concentração e excelente mistura."
    },
  ];

  const navigate = useNavigate();

  const abrirDetalhes = (produto) => {
    navigate("/produto", {
      state: produto,
    });
  };

  return (
    <>
      <h1 className="texto-laranja">Catálogo</h1>

      <p style={{ textAlign: "right", marginRight: "10px" }}>
        {dia[data.getDay()]}, {data.getDate()} de {mes[data.getMonth()]} de {data.getFullYear()}
      </p>

      <div className="card-row">
        {produtos.map((p, i) => (
          <CardCatalogo key={i} produto={p} onClick={() => abrirDetalhes(p)} />
        ))}
      </div>
    </>
  );
}
