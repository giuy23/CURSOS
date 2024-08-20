import { Provider } from "react-redux";
import "./App.css";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";
import Contador from "./components/Contador";
import ShoppingCart from "./components/ShoppingCart";

import Spline from "@splinetool/react-spline";
import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <Provider store={store}>
        <CrudProvider>
          <Contador />

          <hr />
          <CrudApi />

          <hr />
          <ShoppingCart />

          <hr />
          <TeoriaRedux />
        </CrudProvider>
      </Provider>
      <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline" />
    </>
  );
}

export default App;
