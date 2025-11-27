import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/pop_up.css";

export default function PopupProduto() {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Sempre chamar o hook, independente de existir state
    const imagens = state?.imagensDetalhes || [];
    const [imagemAtual, setImagemAtual] = useState(imagens[0] || null);

    // Agora o return condicional é SEGURO
    if (!state) {
        return (
            <div className="popupOverlay">
                <div className="popUpCards">
                    <p>Produto não encontrado.</p>
                    <button onClick={() => navigate("/")}>Voltar</button>
                </div>
            </div>
        );
    }

    return (
        <div className="popupOverlay">
            <div className="popUpCards">

                <button className="closePopup" onClick={() => navigate(-1)}>
                    ✖
                </button>

                <div className="imageSection">
                    <img src={imagemAtual} className="mainImage" />

                    <div className="thumbnails">
                        {imagens.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className={`thumb ${imagemAtual === img ? "activeThumb" : ""}`}
                                onClick={() => setImagemAtual(img)}
                            />
                        ))}
                    </div>
                </div>

                <div className="textPop">
                    <h1>{state.nome}</h1>
                    <p>{state.descricao}</p>
                </div>
            </div>
        </div>
    );
}
