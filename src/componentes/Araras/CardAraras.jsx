import './CardAraras.css'

export default function CardAraras(props) {
  return (
    <div className="container-card-modal">
      <img src={props.imagem} />
      <h4 className='nome'>{props.nome}</h4>
    </div>
  )
}