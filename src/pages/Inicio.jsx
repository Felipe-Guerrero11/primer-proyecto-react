import { Link } from "react-router-dom"

function Inicio (){
    const programa = 'analisis y desarrollo de software'

    return(
        <section>
            <h2> Bienvenidos al programa {programa}</h2>
            <p> este es el dashboard de la competencia de frontend con react</p>
            <p>
                Empieza por conocer <Link to="/perfil"> mi perfil </Link>
                o tambien revisa las {''}
                <Link to="/tecnologias">tecnologias</Link> que vamos a trabajar
            </p>
        </section>
    )
}

export default Inicio