import './Button.css'
export const Button = ({children, width, heigth, backgroundColor, color, margin}) => {
  return(
    <button className="button" style={{
      width: width,
      height: heigth,
      color: color,
      margin: margin,
      backgroundColor: color && '#f5f5f5'

    }}>{children}</button>
  );
}