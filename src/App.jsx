import './App.css'
import Encabezado from './components/Encabezado.jsx'
import Tarjeta from './components/Tarjeta'
import PiePagina from './components/PiePagina.jsx'
import Presentacion from './components/Presentacion.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  const programa = `Analisis y Desarrollo de Software`
  return (
    <>
    <div className="layout">
      <Encabezado/>
      <Sidebar />
      <main className='contenido'>
        <h2>Bienvenido al programa {programa}</h2>
        <Presentacion/>
        <section>
          <Tarjeta/>
          <Tarjeta/>

        </section>
      </main>
      <PiePagina/>
      </div>
      </>
  )
}

export default App