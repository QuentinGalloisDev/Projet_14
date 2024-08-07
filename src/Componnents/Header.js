import {
    Link
} from "react-router-dom";
import styles from '../Styles/Header.module.css'
export const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/'><img className={styles.logoHrNet} src='/Logo_HRNET.webp' alt='Logo de HRnet'></img></Link>
        </div>
    )
}
