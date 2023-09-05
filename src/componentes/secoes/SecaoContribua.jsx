import "./SecaoContribua.css";

export default function SecaoContribua(props) {
  return (
    <div className="secaoContribua">
      <h2>{props.titulo.toUpperCase()}</h2>
      <div className="secaoContribuaConteudo">
        <p>{props.textoSimples1}</p>
        <p>
          <b>{props.textoDestaque1}</b>
        </p>
        <p>
          <b>{props.textoDestaque2}</b>
        </p>
        <p>{props.textoSimples2}</p>
      </div>
      <img src="https://nucleodetecnologia.com.br/assets/img/pix-mtst.jpg" />
    </div>
  );
}