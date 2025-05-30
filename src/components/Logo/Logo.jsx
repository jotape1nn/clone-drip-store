
import { Link } from 'react-router-dom';
import './logo.css';


export const Logo = ({color, margin}) => {
  return(
    <div>
      <Link style={{margin: margin}} className="logo" to="">
        <img src={!color ? '../../../public/logo.svg': '../../../public/logo branca.svg'}/>
        <span style={{color: color}}>Drip Store</span>
      </Link>
    </div>
  );
}