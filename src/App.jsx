import { data } from "./data.js"
import Card from './Components/Card.jsx'

function App() {
  const dataShow = data.map((el,index)=> <Card key={index} title = {el.title} desc = {el.desc} img = {el.img}/>)
  console.log(typeof dataShow)
  return (
    
    <>
      <div>
        {dataShow}
      </div>
    </>
  )
}
  
export default App
