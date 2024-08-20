import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handle Move", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    console.log("efecto", { enabled });

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    //se limpia cuando:
    //-EL CONPONENTE SE DESMONTA
    //-CAMBIAN LAS DEPENDENCIAS '[enabled]'
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -10,
          top: -10,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </main>
  );
}

export default App;
