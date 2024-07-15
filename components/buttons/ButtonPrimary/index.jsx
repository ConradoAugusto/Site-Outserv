import { useNavigate } from "react-router-dom";


export function ButtonPrimary({id, content, className} ) {

  const navigate = useNavigate();

  return (
    <a
    id={id}
      type="button"
      className={className} 
      onClick={ () => navigate("/contato")}
      target="_blank"
    >
     {content}
    </a>
  );
}
