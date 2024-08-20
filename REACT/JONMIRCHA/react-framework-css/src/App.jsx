import { useState } from 'react';
import './App.css';

import Bootstrap from './components/Bootstrap';
import Bulma from './components/Bulma';
import ReactBootstrap from './components/ReactBootstrap';
import MaterialUI from './components/MaterialUI';

function App() {
  return (
  <div className="">
    <h1>Framework CSS con React</h1>
    {/* <Bootstrap></Bootstrap> */}
    {/* <Bulma></Bulma> */}
    {/* <ReactBootstrap></ReactBootstrap> */}
    <MaterialUI></MaterialUI>
  </div>
  )
}

export default App
