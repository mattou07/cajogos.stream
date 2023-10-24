import Link from 'next/link';
import Styles from '../styles/components/Logo.module.scss';

export default function Logo() {
    return (
        <Link href={'/'}>
            <h1 className={Styles.logoContainer}>
                <span className={Styles.cajogos}>cajogos</span><span className={Styles.stream}>.stream</span>
            </h1>
        </Link>
    );
}