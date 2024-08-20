// import './App.css'
import CrudApi from './components/CrudApi'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import { CrudProvider } from './context/CrudContext'

function App() {

  return (
    <>
      <h1>React Context API</h1>
      <hr />
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>

      <hr />
      <MyPageContext/>
      
      <hr />
      <MyPage/>
    </>
  )
}

export default App
