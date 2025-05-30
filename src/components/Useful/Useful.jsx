import { Link } from 'react-router-dom';


export const Useful =  ({margin, color,href, textDecoratin, value, target, to}) => {
  return(
    <p style={{margin: margin}}>
      <Link 
      style={{
        color: color,
        textDecoration: textDecoratin
      }}
      to={to}
      target={target}
      >{value}</Link>
    </p>
  );
} 