import CardAraras from './CardAraras'
import './SecaoAraras.css'

export default function SecaoAraras() {
  return (


    <div className="container-conteudo secao-araras">
      <h2 className='gradient titulo-Araras'> Araras</h2>

      <div className="container-Araras">
        <div class="zoom">
          <CardAraras
            nome="Arara Azul"
            imagem="https://i0.wp.com/files.agro20.com.br/uploads/2020/02/arara-azul-1.jpg?resize=1024%2C768&ssl=1" />

        </div>

        <div class="zoom">
          <CardAraras
            nome="Arara Vermelha"
            imagem="https://i.ytimg.com/vi/Z-4REj0TNNo/maxresdefault.jpg" />
        </div>

        <div class="zoom">
          <CardAraras
            nome="Arara Canidé"
            imagem="https://blog.pescagerais.com.br/wp-content/uploads/2021/04/arara-caninde-ara-ararauna.jpg" />
        </div>
      </div>

      <div className="container-Araras">
        <div class="zoom">
          <CardAraras
            nome="Arara Verde"
            imagem="https://passarosexoticos.net/wp-content/uploads/2022/12/arara-verde-3.jpg" />
        </div>

        <div class="zoom">
          <CardAraras
            nome="Arara Juba (Amarela)"
            imagem="https://live.staticflickr.com/3115/2653596553_1eab83215a_b.jpg" />
        </div>

        <div class="zoom">
          <CardAraras
            nome="Arara Canga"
            imagem="https://www.mundoecologia.com.br/wp-content/uploads/2019/04/Araracanga-Voando-1.jpg" />

        </div>
      </div>
    </div>

  );
}
