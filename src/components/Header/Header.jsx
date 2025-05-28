import { Button } from '../Button/Button'
import { Input } from '../Input/Input.jsx'
import { Logo } from '../Logo/Logo'
import { ShopCart } from '../ShopCart/ShopCart.jsx'
import { Useful } from '../Useful/Useful.jsx'


import './Header.css'



export const Header = () => {

  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'.5rem 0 0 .25rem'}/>
          <Input 
          type={'text'}
          placeholder={'pesquisar produto...'}
          margin={'0 3rem 0 1.688rem'}
          width={'34.938rem'}
          height={'3.75rem'}
          src={'../../../public/search.svg'}

          />
          <Useful
          value={'cadastre-se'}
          margin={'1.2rem 0 0 0'}
          color={'#474747'}
          href={'#'}
          textDecoratin={'underline'}
          />
        </div>
        <Button
          width={'7.125rem'}
          heigth={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Entrar</Button>
        <ShopCart value={2}/>
      </div>
    </header>
  )

}