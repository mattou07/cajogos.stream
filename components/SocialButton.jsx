import Link from 'next/link';
import Styles from '../styles/components/SocialButton.module.scss';

export default function SocialButton({ href, icon, text, className })
{
    let cssClasses = [
        Styles.socialButton,
        Styles[className]
    ].join(' ').trim();
    return (
        <Link href={href}>
            <a className={cssClasses} target="_blank" rel="noopener noreferrer">
                <i className={Styles.socialIcon}>{icon}</i>
                <span>{text}</span>
            </a>
        </Link>
    );
}