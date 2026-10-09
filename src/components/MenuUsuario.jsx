import FotoPerfil from '../images/iaimg.jpg'

function MenuUsuario(){
    const nombre = 'Felipe Guerrero'
    const rol = ' Soy Desarollador'

    return(
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-boton'>
                <img src={FotoPerfil} alt={`foto de ${nombre}`}className='avatar'/>
                <spam className='menu-usuario-datos'>
                    <samp className='menu-ususario-nombre'>{nombre}</samp>
                    <samp className='menu-ususario-rol'>{rol}</samp>
                </spam>
                <samp className='flecha'></samp>
            </button>

            <ul className='menu-desplegable'>
                <li><a href='#'>Mi perfil</a></li>
                <li><a href='#'>Configuracion</a></li>
                <li className='separador'></li>
                <li><a href='#'className='cerrar-sesion'>Cerrar Sesion</a></li>
            </ul>
        </div>
    )
}

export default MenuUsuario