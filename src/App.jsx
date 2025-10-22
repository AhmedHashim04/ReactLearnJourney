import { data } from "./data.js"
import Card from './Components/Card.jsx'

function App() {
  const dataShow = data.map((el)=> <Card title = {el.title} desc = {el.desc}/>)

  return (
    
    <>
      <div>
        Its Ahmed Hashim
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {dataShow}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  
    </>
  )
}

export default App
