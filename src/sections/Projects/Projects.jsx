import styles from './ProjectsStyles.module.css'
import Cypher from '../../assets/Cypher.png'
import ProjectCard from '../../common/ProjectCard';
import DataLovers from '../../assets/Game of Thrones.jpeg'
import Cinema from '../../assets/Cinema.jpeg'
import Weather from '../../assets/weather.jpeg'
import Pokemon from '../../assets/Pokemon.jpeg'
import List from '../../assets/Fondo_1.png'
import Hover from '../../assets/HOTD.jpeg'
import Landing from '../../assets/Landing Page.jpg'

function Projects() {
    return(
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                src={Cypher}
                link="https://cifrador-de-texto.vercel.app/"
                h3="Cypher"
                p="En este proyecto, creé una herramienta que te permite cifrar y descifrar textos de forma sencilla y rápida. Solo tienes que ingresar el texto que quieras proteger y elegir el desplazamiento que más te convenga. ¡Así de fácil!"
                />
                <ProjectCard 
                src={DataLovers}
                link="https://danielacastrejon.github.io/DEV008-data-lovers/src/"
                h3="Data Lovers"
                p="¡Construyendo Westeros en el navegador!⚔️ Una página web con HTML, CSS y JavaScript para explorar los datos de Juego de Tronos."
                />
                <ProjectCard 
                src={Cinema}
                link="https://movie-challenge-ebon-omega.vercel.app/"
                h3="Cinema"
                p="Buscador de péliculas con interfaz sencillas y bastante interactivo para que se pueda facilitar la búsqueda de peliculas "
                />
                <ProjectCard 
                src={Weather}
                link="https://react-weather-api-five.vercel.app/"
                h3="Wheater App"
                p="¡El único oráculo que no te pedirá una ofrenda! Nuestra app del clima te revelará los secretos del cielo.☁️¿Lloverá o hará sol? ¡Descúbrelo ahora! "
                />
                <ProjectCard 
                src={Pokemon}
                link="https://pokedex-sepia-one.vercel.app/"
                h3="Pokedex"
                p="¡Mi pokedex está lista!⚡He usado HTML,CSS y JavaScript para crear esta pequeña maravilla y consumir datos de la PokeAPI. ¡Busca a tu Pokémon favorito de la primera generación! "
                />
                <ProjectCard 
                src={List}
                link="https://to-do-list-react-alpha-flame.vercel.app/"
                h3="To Do List"
                p="¡Conquistando el mundo una tarea a la vez! Estoy construyendo una app de tareas con las tecnologías más cool del momento ¡Imagina una lista de tareas que se adapte a tu estilo y te ayude a alcanzar tus metas!✅"
                />
                <ProjectCard 
                src={Hover}
                link="https://card-hover-effects-two.vercel.app/"
                h3="Card Hover House of the Dragon"
                p="¡Prepárate para sorprenderte!✨ En este proyecto, exploramos cómo transformar simples tarjetas en elementos llenos de vida con HTML y CSS. "
                />
                <ProjectCard 
                src={Landing}
                link="https://practica-landing-page-wheat.vercel.app/"
                h3="Landing Page"
                p="¿Sabías que una landing page es como un embudo mágico que lleva a tus visitantes directo a lo que quieres que hagan?🪄"
                />
                
            </div>
        </section>
    );
}

export default Projects;