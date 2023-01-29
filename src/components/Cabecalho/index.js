import { Link } from "react-router-dom";
import logo from './logo.png';
import github from './github.png';
import lk from './lk.png';
import yt from './yt.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo da CineTag"></img>
            </Link>
            <section className={styles.cabecalho__social}>
                <a href="https://github.com/brunoholanda">
                    <img src={github} alt="logo do git hub png black" title="Veja meu Github"></img>
                </a>
                <a href="https://www.linkedin.com/in/bruno-holanda-70764364/">
                    <img src={lk} alt="logo do linkedin png black" title="Veja meu LinkeDin"></img>
                </a>
                <a href="https://www.youtube.com/user/nerdkingteam">
                    <img src={yt} alt="logo do youtube png black" title="Acesse meu canal no youtube"></img>
                </a>
            </section>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;