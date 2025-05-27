import './logo.css';


export const Logo = ({color, margin}) => {
  return(
    <div>
      <a style={{margin: margin}} className="logo" href="">
        <img src={!color ? '../../../public/logo.svg': '../../../public/logo branca.svg'}/>
        <span style={{color: color}}>Drip Store</span>
      </a>
    </div>
  );
}