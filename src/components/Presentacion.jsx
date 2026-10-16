function Presentacion({ usuario }) {
    return(
        <article className='presentacion'>
            <h1>Hola, Soy {usuario.nombre}</h1>
            <p>Vivo en {usuario.lugar}</p>
            <h3>Mis datos son</h3>
            <ul>
                <li>correo : {usuario.correo}</li>
                <li>telefono : {usuario.telefono}</li>
            </ul>
            <h3>Soy Desarrollador</h3>
            <nav>
                <a href=""></a>
            </nav>
        </article>
    )
}

export default Presentacion