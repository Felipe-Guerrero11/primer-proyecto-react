import './App.css'
import { Routes, Route } from 'react-router'
import Encabezado from './components/Encabezado'
import Sidebar from './components/Sidebar'
import PiePagina from './components/PiePagina'
import fotoPerfil from './images/perfil.jpg'
import Inicio from './pages/Inicio'
import Perfil from './pages/Perfil'
import Tecnologias  from './pages/Tecnologias'

function App() {

  return (
    <div className="app-padre">
      <Encabezado usuario={usuario} />
      <div className="app-layout">
        <Sidebar usuario={usuario} />
        <main className="contenido"> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tecnologias" element={<tecnologias/>} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
      <PiePagina />
    </div>
  )
}

export default App