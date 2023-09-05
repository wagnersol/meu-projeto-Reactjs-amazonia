import React from 'react';
import './SecaoRefatorada.css';
import Botao from '../botao/Botao';

export default function SecaoRefatorada(props) {
  return (
    <div className='secaoSobre'>
      <h2>{props.titulo.toUpperCase()}</h2>


      <div className='secaoSobreConteudo'>
        {props.textos.map((textoObjeto, index) => (
          <React.Fragment key={index}>
            {textoObjeto.destaque ? (
              <p>
                <b>{textoObjeto.texto}</b>
              </p>
            ) : (
              <p>{textoObjeto.texto}</p>
            )}
          </React.Fragment>
        ))}
      </div>


      {props.mostrarImagem && (
        <img
          src='https://nucleodetecnologia.com.br/assets/img/pix-mtst.jpg'
          alt='Imagem'
        />
      )}
      {props.mostrarBotao && (
        <Botao
          textoInterno='Siga nosso Instagram 1'
          levaPraOnde='https://www.instagram.com/tecnologia.mtst/'
        >
          Siga nosso Instagram
        </Botao>
      )}
    </div>
  );
}

// // Operadores Ternario

// textoObjeto.destaque === true ? (
//   <p>
//     <b>{textoObjeto.texto}</b>
//   </p>
// ) : (
//   <p>{textoObjeto.texto}</p>
// )


// // If

// if (textoObjeto.destaque === true) {
//   (
//     <p>
//       <b>{textoObjeto.texto}</b>
//     </p>
//   )
// } else {
//   (
//     <p>{textoObjeto.texto}</p>
//   )
// }