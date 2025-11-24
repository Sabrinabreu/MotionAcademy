import bruxinha from "../assets/bruxinha3D.jpg"

export default function SobreNos() {
    return (
        <div className="sobre-nos">
            <div className="sobre-nos-conteudo">
                <div className="sobre-nos-texto">
                    <h2 className="texto-laranja">Sobre a Cromia</h2>
                    <p>A Cromia é mais que uma loja de materiais de arte: é um convite à experimentação. Criamos um espaço para quem gosta de se expressar sem limites, seja com pincéis, lápis, tintas, ou até misturando tudo. Para iniciantes curiosos ou artistas experientes, oferecemos produtos que despertam novas ideias e transformam o “e se…” em realidade.</p>
                    <button class="sobre-nos-btn">Dê cor ao seu mundo com a Cromia</button>
                </div>
                <div className="sobre-nos-imagem">
                    <img src={bruxinha} alt=""/>
                </div>
            </div>
        </div>
    );
}