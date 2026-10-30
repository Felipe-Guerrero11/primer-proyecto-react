import Tarjeta from '../components/Tarjeta'
import { tecnologias } from '../data/tecnologias'

function Tecnologias() {
    return (
        <section>
            <h2>Tecnologías del programa</h2>
            <div className="tarjetas">
                {tecnologias.map((tecnologia) => (
                    <Tarjeta
                        key={tecnologia.id}
                        icono={tecnologia.icono}
                        titulo={tecnologia.titulo}
                        descripcion={tecnologia.descripcion}
                        horas={tecnologia.horas}
                        destacada={tecnologia.destacada}
                    />
                ))}
            </div>
        </section>
    )
}

export default Tecnologias