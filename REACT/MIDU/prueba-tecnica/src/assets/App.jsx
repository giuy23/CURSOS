import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getCatWithText = async ({ text }) => {
      try {
        setImageUrl(
          `https://cataas.com/cat/says/${text}?fontSize=50&fontColor=aquamarine`
        );
      } catch (error) {
        setText("Ocurrió un problema: API NO RESPONSE");
      }
    };

    const getData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_WORD);
        const { fact } = await response.json();
        const text = await fact.split(" ", 3).join(" ");
        setText(text);
        getCatWithText({ text });
      } catch (error) {
        setText("Ocurrió un problema: API NO RESPONSE");
        setFact("No hay Data");
      } finally {
      }
    };

    getData();

    return () => {
      setImageUrl("");
    };
  }, []);

  return (
    <main>
      <h1>API DE GATOS</h1>
      {text && <p className="text">{text}</p>}
      {fact && <span>{fact}</span>}
      {imageUrl && <img src={imageUrl} alt="xd"></img>}
    </main>
  );
}

export default App;
