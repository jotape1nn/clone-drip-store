import Logo from '../Logo/Logo'
import './Header.css';
export default function Header(){
  return(
    <header>
      <Logo src={'../../../public/logo.svg'} cor={'#c92071'}/>
    </header>
  )
}