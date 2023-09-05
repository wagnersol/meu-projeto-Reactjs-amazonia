import './App.css'
import BannerInicio from './componentes/BannerInicio'

import SecaoAraras from './componentes/Araras/SecaoAraras'

// import SecaoSobre from './componentes/secoes/SecaoSobre'
 //import SecaoContribua from './componentes/secoes/SecaoContribua'

import SecaoRodape from './componentes/secoes/SecaoRodape'

import SecaoRefatorada from './componentes/secoes/SecaoRefatorada'

export default function App() {

  let textosSobre = [
    {
      texto: "O nome arara se refere a diferentes espécies de aves pertencentes à família Psittacidae. De maneira geral, as araras possuem uma plumagem de coloração vistosa, são relativamente grandes, sendo consideradas as maiores representantes da sua família, apresentam cauda longa e possuem um bico grosso e curvo. Esse bico é essencial para garantir a sua alimentação, baseada, principalmente, na ingestão de frutos e sementes. Em geral, as araras vivem muitos anos, com relatos de indivíduos com mais de 50 anos de idade.",
      destaque: false
    },

    {
      texto: "As araras são animais importantes do ponto de vista ecológico, uma vez que atuam como dispersoras de semente, ajudando a levar os frutos para longe da planta-mãe, uma ação que evita a competição entre as plantas em crescimento. Além disso, muitas araras fazem cavidades para botar seus ovos, as quais são utilizadas posteriormente por outras espécies.",

      destaque: true
    }
  ]

  let textosContribua = [
    {
      texto: "O Instituto Arara Azul (ITA) é uma organização não-governamental que tem como finalidade a promoção da conservação ambiental. O Instituto desenvolve programas e projetos com este objetivo, como o Projeto Arara-Azul, desenvolvido desde 1990 no Pantanal, mantendo as populações viáveis de araras-azuis (Anodorhynchus hyacinthinus), a médio e longo prazo em vida livre no seu ambiente natural, entre outros de suma importância.",
      destaque: false
    },

    {
      texto: "Chave Pix: pix@ita.com",
      destaque: true
    },

    {
      texto: "Ou aponte a câmera do seu celular para o nosso QR Code", destaque: false
    }
  ]

  return (

    <main>

      <BannerInicio></BannerInicio>
      <SecaoAraras></SecaoAraras>
    

      <SecaoRefatorada titulo="Sobre Araras" textos={textosSobre} mostrarBotao={true} mostrarImagem={false}></SecaoRefatorada>

      <SecaoRefatorada titulo="Contribua com o Instituto" textos={textosContribua}
        mostrarImagem={true}></SecaoRefatorada>
      <SecaoRodape></SecaoRodape>

    </main>

  )
}

// var objeto = {texto:"chuva",destaque:false}
// var objeto2 = {texto:"texto",destaque:true}
// var objeto3 = {texto:"ola",destaque:false}
// var lista = [objeto, objeto2, objeto3] 
//<SecaoIniciativa></SecaoIniciativa>