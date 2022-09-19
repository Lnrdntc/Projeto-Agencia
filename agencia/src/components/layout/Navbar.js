import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
        <Container>

            <Link to="/">
                    <Link to="/"> <img src={logo} alt="Agencia"/> </Link>
            </Link>

                <ul className={styles.list}>
                    
                    <li className={styles.item}> 
                        <Link to="/">Inicio</Link>
                    </li> 
                    <li className={styles.item}> 
                        <Link to="/Projects">Agenda</Link> 
                    </li>
                    <li className={styles.item}> 
                        <Link to="/Company">Sobre nós</Link> 
                    </li>
                    <li className={styles.item}> 
                        <Link to="/Contact">Contato</Link> 
                    </li> 
                </ul>
        </Container>
      </nav>
    )
}

export default Navbar