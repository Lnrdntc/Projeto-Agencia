import styles from './Home.module.css'
import praia from '../../img/praia.jpg'
import LinkButton from '../layout/LinkButton'

function Home() {


    return(
    <section className={styles.home_container}>
        <h1>
            Você está na <span>Agência L.A</span>
        </h1>
        <p>Comece a cotar seus passeios agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar viagem" />
        <img src={praia} alt="praia"></img>
    </section>
    )
}

export default Home