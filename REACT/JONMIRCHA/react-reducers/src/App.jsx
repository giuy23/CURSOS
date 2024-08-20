import "./App.css";
import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <div className="">
        <h1>Use Reducer</h1>
        <hr />
        <CrudProvider>
          <CrudApi />
        </CrudProvider>
        <hr />
        <Contador />

        <hr />
        <ContadorMejorado />
      </div>
    </>
  );
}

export default App;
