import bruxinha from "../assets/bruxinha3D.jpg"

export default function SobreNos() {
    return (
        <div class="sobre-nos">
        <div class="sobre-nos-conteudo">
            <div class="sobre-nos-texto">
                <h2 class="texto-laranja">Sobre a Cromia</h2>
                <p>A Cromia é mais que uma loja de materiais de arte: é um convite à experimentação. Criamos um espaço para quem gosta de se expressar sem limites, seja com pincéis, lápis, tintas, ou até misturando tudo. Para iniciantes curiosos ou artistas experientes, oferecemos produtos que despertam novas ideias e transformam o “e se…” em realidade.</p>
            <button class="btn-geral">Dê cor ao seu mundo com a Cromia
            </button>
    </div>
            <div class="sobre-nos-imagem">
                <img src={bruxinha} alt="" />
            </div>
        </div>
        
    </div>
    );
}