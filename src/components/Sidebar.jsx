import { opcionesMenu } from "../data/menu.js"
import { Link } from 'react-router'

function Sidebar() {
    return (
        <aside className="sidebar">
                <h3 className="sidebar-titulo">Menú</h3>
                <nav>
                    <ul className="sidebar-menu">
                        {opcionesMenu.map((opcion) =>(
                            <li key={opcion.id}>
                                <link to={opcion.url}>
                                    {opcion.icono} {opcion.texto}
                                </link>
                            </li>
                        ))}
                    </ul>
                </nav>
            <p className="sidebar-pie">3312943 - ADSO</p>
        </aside>
    )
}

export default Sidebar