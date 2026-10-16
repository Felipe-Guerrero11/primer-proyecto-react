function Sidebar({ usuario }) {
    return(
        <aside className="sidebar">
            <p className="sidebar-saludo">Hola, {usuario.nombre}</p>

            <h3 className="sidebar-titulo">Menú</h3>
            <nav>
                <ul className="sidebar-menu">
                    <li> <a href="#"> 🏠 Inicio </a> </li>
                    <li> <a href="#"> 🧟 Mi perfil </a> </li>
                    <li> <a href="#"> 💻 Tecnologia </a> </li>
                    <li> <a href="#"> 💸 Recurso </a> </li>
                    <li> <a href="#"> 🌎 Contacto </a> </li>
                </ul>
            </nav>
            <p className="sidebar-pie"> 3312943 - ADSO </p>
        </aside>
    )
}
export default Sidebar