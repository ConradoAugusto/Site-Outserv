import { RoutesMain } from "./routes/RoutesMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { Cookies } from "../components/ModalCookies/Cookies";
import { IconCookie } from "@tabler/icons-react";
import { useLocation } from "react-router-dom"; // Importe useLocation

function App() {
  const [showCookieIcon, setShowCookieIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openCostumer = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* {showCookieIcon && (
        <div onClick={() => openCostumer()} className="cookies levitate">
          <IconCookie stroke={2} size={50} />
        </div>
      )} */}
      <RoutesMain />
      {/* Renderize WhatsAppIcon somente se não for a rota especificada */}
      {/* <Cookies setShowModal={setShowModal} showModal={showModal} setShowCookieIcon={setShowCookieIcon}/> */}
    </>
  );
}

export default App;
