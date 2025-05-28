export const Useful =  ({margin, color,href, textDecoratin, value}) => {
  return(
    <p style={{margin: margin}}>
      <a 
      style={{
        color: color,
        textDecoration: textDecoratin
      }}
      href={href}
      target="_blanck"
      >{value}</a>
    </p>
  );
} 