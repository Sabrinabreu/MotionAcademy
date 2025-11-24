export default function Mapa() {
    return (
        <div id="mapa" className="mapa">
            <h2 className="texto-laranja">Onde nos encontrar</h2>

            <div className="mapa-conteiner">
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.865309829629!2d-46.561209823757636!3d-23.644994164671736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328c992748f%3A0xcea3c3e698444297!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1739579284553!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="mapa-txt liquid-card">
                    <div className="mapa-detalhes">
                        <div className="detalhe">
                            <h4>CEP</h4>
                            <p>02934-4392</p>
                        </div>

                        <div className="detalhe">
                            <h4>Endereço</h4>
                            <p>Rua Pupila, 123 - Bairro Colirio, São Caetano do Sul, SP</p>
                        </div>

                        <div className="detalhe">
                            <h4>Telefone</h4>
                            <p>(11) 1234-5678</p>
                        </div>

                        <div className="detalhe">
                            <h4>Horário de Funcionamento</h4>
                            <p>Segunda a Sexta: 08:00 - 18:00</p>
                            <p>Sábado: 09:00 - 14:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
