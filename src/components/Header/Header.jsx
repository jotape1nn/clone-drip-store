import { Button } from '../Button/Button'
import { Input } from '../Input/Input.jsx'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav.jsx'
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
          <Nav 
          position={'absolute'}
          top={'8.375rem'}
          gap={'2rem'}
          width={'26.438rem'}
          height={'11.813rem'}
          > 
            <li>
              <Useful
               value={'inicio'}
               color={'#666666'}
               to={'/'}
               />
            </li>
          <li>
              <Useful
               value={'produtos'}
               color={'#666666'}
               to={'/produtos'}
               />
            </li>
            
            <li>
              <Useful
               value={'meus pedidos'}
               color={'#666666'}
               to={'/pedidos'}
               />
            </li>
            
            <li>
              <Useful
               value={'ofertas'}
               color={'#666666'}
               to={'/ofertas'}
               />
            </li>   
             </Nav>
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