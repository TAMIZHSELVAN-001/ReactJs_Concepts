import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)

function Main(){
  return(
    <main>
      <p>welcome  to my website
      </p>

    </main>
  );
}

export default Main; 
  