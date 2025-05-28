import './input.css'
export const Input = ({src, placeholder, type, width, height, margin}) => {
  return(
    <div className="box-input" style={{width: width, height: height, margin: margin}}>
      <input type={type} placeholder={placeholder}/>
      <img src={src}/>
    </div>
  );
}