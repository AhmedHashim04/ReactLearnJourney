import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header.jsx'
import Container from './Components/Container.jsx'
import App from './App.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>

      <Header game={"Contact"} desc={"Contact us for more information"} />
      <Header game={"Mohamed"} desc={"Learn more about Mohamed"} />
      <Header game={"Ahmed"} desc={"Discover Ahmed's profile"} />
      <App />
      <Container />
    </div>


  </StrictMode>,
)
