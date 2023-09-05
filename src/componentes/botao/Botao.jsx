import "./Botao.css";

export default function Botao(props) {
  return (
    <button className="botaoComponente">
      <a href={props.levaPraOnde} target="_blank">
        {props.children}
      </a>
    </button>
  );
}