import "./SecaoSobre.css";

export default function SecaoSobre(props) {
  return (
    <div className="secaoSobre">
      <h2>{props.titulo.toUpperCase()}</h2>
      <div className="secaoSobreConteudo">
        <p>{props.textoSimples}</p>
        <p>
          <b>{props.textoDestaque}</b>
        </p>
      </div>
       <button>
        <a href="https://www.instagram.com/tecnologia.mtst/" target="_blank">
          Siga nosso Instagram
        </a>
      </button>
    </div>
  );
}