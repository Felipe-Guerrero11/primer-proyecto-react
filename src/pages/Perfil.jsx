import Presentacion from '../components/Presentacion'


function Perfil(){

    return(
        <section>
        <h2>Mi Perfil</h2>
        <Presentacion
            nombre ="Felipe Guerrero"
            ciudad = "Popayan"
            anioNaciomiento={2005}
            meta = "Ser desarrollador de software"

        />
        </section>
    )
}

export default Perfil