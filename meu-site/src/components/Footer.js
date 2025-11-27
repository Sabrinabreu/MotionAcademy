import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="rodape-conteudo">
                <div className="rodape-sobre">
                    <h3>Sobre a Cromia</h3>
                    <p>Somos apaixonados por arte e acreditamos que todo artista merece materiais que traduzam sua imaginação. 
                        A Cromia nasceu para ser o ponto de encontro da criatividade, com tintas, papéis e pinceis que inspiram cada traço.</p>
                </div>
                <div className="links-uteis">
                    <h3>Links úteis</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalogo">Catálogo</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
                <div className="redes-sociais">
                    <h3>Siga-nos</h3>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                        <li><a href="https://www.youtube.com">YouTube</a></li>
                    </ul>
                </div>
            </div>

            <div className="rodape-informacao">
                <p>&copy; 2025 Cromia. Todos os direitos reservados.</p>
                <p>Feito com amor e muita tinta.</p>
            </div>
        </footer>
    );
}