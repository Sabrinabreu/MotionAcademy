import { Link } from "react-router-dom";

export default function CardEstilo() {
  return (
    <>
      <h2 className="texto-laranja">Descubra seu estilo de arte</h2>

      <div className="container-estilo">

        {/* --- Card 1 --- */}
        <Link to="/catalogo" className="card-link">
          <div className="card-estilo">
            <img
              className="img-estilo"
              src="https://arteref.com/wp-content/uploads/2023/12/Layout-7-copy-1024x768.jpeg"
              alt="Aquarela Suave"
            />
            <div className="card-content-estilo">
              <h2 className="title-estilo">Aquarela Suave</h2>
              <p className="text-estilo">
              A aquarela suave é uma técnica delicada que permite criar degradês e transparências sutis em suas pinturas. Com pinceladas leves e cores translúcidas, é perfeita para retratar cenários, flores e detalhes cheios de nuance, despertando sensibilidade artística e controle da água e do pigmento.
              </p>

              <span className="button-estilo">
                Ver catálogo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
          </div>
        </Link>

        {/* --- Card 2 --- */}
        <Link to="/catalogo" className="card-link">
          <div className="card-estilo">
            <img
              className="img-estilo"
              src="https://i.ytimg.com/vi/XTupw09T6CA/maxresdefault.jpg"
              alt="Arte Digital"
            />
            <div className="card-content-estilo">
              <h2 className="title-estilo">Arte Digital</h2>
              <p className="text-estilo">
              A arte digital combina criatividade com tecnologia, permitindo criar ilustrações, pinturas e efeitos visuais diretamente no computador ou tablet. É possível explorar cores, texturas e estilos ilimitados, desde desenhos realistas até abstrações, com ferramentas modernas que facilitam a experimentação e correção rápida.
              </p>

              <span className="button-estilo">
                Ver catálogo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
          </div>
        </Link>

        {/* --- Card 3 --- */}
        <Link to="/catalogo" className="card-link">
          <div className="card-estilo">
            <img
              className="img-estilo"
              src="https://img.freepik.com/free-photo/sided-view-hands-clay-sculpting_23-2149730895.jpg"
              alt="Escultura & Modelagem"
            />
            <div className="card-content-estilo">
              <h2 className="title-estilo">Escultura & Modelagem</h2>
              <p className="text-estilo">
              A escultura e modelagem trabalham a tridimensionalidade, transformando ideias em formas concretas. Seja com argila, massa ou materiais digitais, essa técnica desenvolve percepção de volume, proporção e detalhes, permitindo criar desde pequenas figuras até grandes obras de arte interativas.
              </p>

              <span className="button-estilo">
                Ver catálogo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
          </div>
        </Link>

        {/* --- Card 4 --- */}
        <Link to="/catalogo" className="card-link">
          <div className="card-estilo">
            <img
              className="img-estilo"
              src="https://artprofmedia.s3.amazonaws.com/wp-content/uploads/20221226054650/lobster2-1.jpg"
              alt="Pintura a Óleo"
            />
            <div className="card-content-estilo">
              <h2 className="title-estilo">Pintura a Óleo</h2>
              <p className="text-estilo">
              A pintura a óleo é uma técnica clássica que oferece profundidade e riqueza de cores incomparáveis. Com secagem lenta, permite trabalhar camadas, misturas e texturas complexas, resultando em obras duradouras e expressivas, ideais para quem busca explorar luz, sombra e composição de maneira intensa.
              </p>

              <span className="button-estilo">
                Ver catálogo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
          </div>
        </Link>

        {/* --- Card 5 --- */}
        <Link to="/catalogo" className="card-link">
          <div className="card-estilo">
            <img
              className="img-estilo"
              src="https://momaa.org/wp-content/uploads/2025/06/Mixed-Media-Painting-Techniques.png"
              alt="E muito mais!"
            />
            <div className="card-content-estilo">
              <h2 className="title-estilo">E muito mais!</h2>
              <p className="text-estilo">
              Na Cromia, a criatividade não tem limites. Além das técnicas que você já conhece, oferecemos materiais para explorar novas formas de expressão e descobrir estilos que combinam com você. Misture, experimente, ouse e encontre infinitas maneiras de transformar sua imaginação em arte.
              </p>

              <span className="button-estilo">
                Ver catálogo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
          </div>
        </Link>

      </div>
    </>
  );
}
