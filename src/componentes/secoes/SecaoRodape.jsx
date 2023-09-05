import './SecaoRodape.css'
import ColunaRodape from './ColunaRodape';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa'

export default function SecaoRodape() {
  return (
    <div>
      <div className='secaoRodape'>
        <ColunaRodape>
          <h4>DESENVOLVIDO POR</h4>
          <p>Pela Solange que ama araras</p>
        </ColunaRodape>

        <ColunaRodape>
          <h4>ARARAS NA WEB</h4>
          <a className='botaoSocial' href='https://www.facebook.com/mtstbrasil'>
            <FaFacebookF />
          </a>
          <a className='botaoSocial' href='https://twitter.com/mtst'>
            <FaTwitter />
          </a>
          <a className='botaoSocial' href='https://www.instagram.com/mtstbrasil/'>
            <FaInstagram />
          </a>
          <a className='botaoSocial' href='https://mtst.org/'>
            <FaDribbble />
          </a>
        </ColunaRodape>

        <ColunaRodape>
          <h4>SIGA O Centro de Estudo</h4>
          <p>Nossa caminhada e nossa evolução tembém estão registradadas em imagens e vídeos, confira nossa página no Instragram.
          </p>
          <a className='botaoSocial' href='https://www.instagram.com/tecnologia.mtst/'>
            <FaInstagram />
          </a>
        </ColunaRodape>
      </div>


      <div className="copyright">Copyright © Cento de estudos das Araras 2023</div>
    </div>



  )
}