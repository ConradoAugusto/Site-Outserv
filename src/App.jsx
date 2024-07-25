import { RoutesMain } from "./routes/RoutesMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Cookies } from "../components/ModalCookies/Cookies";
import { IconCookie } from '@tabler/icons-react';


function App({}) {
  const [isCursorEnabled, setIsCursorEnabled] = useState(
    window.innerWidth >= 1000
  );
  const [showCookieIcon, setShowCookieIcon] = useState(false);

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsCursorEnabled(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isCursorEnabled && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={false}
          hasBlendMode={false}
          outerStyle={{
            border: "3px solid var(--colorPrimary)",
            zIndex: "99999999",
          }}
          innerStyle={{
            backgroundColor: "var(--colorPrimary)",
            zIndex: "99999999",
          }}
          style={{
            mixBlendMode: "difference",
            zIndex: "99999999",
          }}
        />
      )}
      {/* <Cookies setShowModal={setShowModal} showModal={showModal} setShowCookieIcon={setShowCookieIcon}/> */}
    </>
  );
}

export default App;
