import { Logo } from '../Logo/Logo';
import { Useful } from '../Useful/Useful';
import './Footer.css';
export const Footer = () => {
  return (
    <footer id='footer'>
      <div className='box-footer'>

        <div className='box-logo-pai'>

          <div className='box-logo'>
            <Logo color={'#f5f5f5'} />
          </div>


          <div className='box-logo-texto'>
            <p className='box-logo-texto-cor'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>


          <div className='div-logo-icons'>
            <img src="../../../public/iconFacebook.svg" />
            <img src="../../../public/iconInsta.svg" />
            <img src="../../../public/iconTwitter.svg" />
          </div>

        </div>

        <div className='box-info-pai'>
          <h3>Informação</h3>
          <nav>
            <li><Useful
              value={'Sobre Drip Store'}
              color={'#f5f5f5'}
              margin={'1.75rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Segurança'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Wishlist'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Blog'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li style={{ display: 'flex' }}><Useful
              value={'Trabalhe conosco'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Meus pedidos'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>
          </nav>



        </div>

        <div className='box-categoria-pai'>
          <h3>Categoria</h3>
          <nav>
            <li><Useful
              value={'camisetas'}
              color={'#f5f5f5'}
              margin={'1.75rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Calças'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'bonés'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'HeadPhones'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>

            <li><Useful
              value={'Tênis'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>
          </nav>

        </div>

        <div className='box-contato-pai'>
          <nav>
            <h3>Contato</h3>
            <li><Useful
              value={'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161'}
              color={'#f5f5f5'}
              margin={'1.75rem 0 0 0'}
            /></li>

            <li><Useful
              value={'(85) 3051-3411'}
              color={'#f5f5f5'}
              margin={'1rem 0 0 0'}
            /></li>
          </nav>

        </div>

      {/* <div className='barra'>
        <hr></hr>
        <p>@ 2022 Digital College</p>

      </div> */}
      </div>


    </footer>
  );
}