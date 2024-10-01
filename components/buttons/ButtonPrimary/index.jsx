import { useNavigate } from "react-router-dom";

export function ButtonPrimary({ id, content, className, style }) {
  const navigate = useNavigate();

  return (
    <a
      href="#"
      tabindex="0"
      id={id}
      type="button"
      style={{ style }}
      className={className}
      onClick={() => navigate("/contato")}
      target="_blank"
    >
      {content}
    </a>
  );
}
