import { RoutesMain } from "./routes/RoutesMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsCursorEnabled(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
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
            border: '3px solid var(--colorPrimary)',
            zIndex: "99999999",
          }}
          innerStyle={{
            backgroundColor: 'var(--colorPrimary)',
            zIndex: "99999999",
          }}
          style={{
            mixBlendMode: 'difference',
            zIndex: "99999999",
          }}
        />
      )}
    </>
  );
}

export default App;