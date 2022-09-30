import Image from 'next/image';
import Styles from '../styles/components/Noot.module.scss';
import NootNootPic from '../public/assets/images/pingu_nootnoot_112.png';

export default function Noot()
{
    const componentID = 'noot';

    let playSound = () =>
    {
        let audio = new Audio('/assets/sounds/noot-noot.mp3');
        audio.play();
    };

    let shakeTheNoots = () =>
    {
        let noot = document.getElementById(componentID);
        noot.classList.add(Styles.shake);
        setTimeout(() => noot.classList.remove(Styles.shake), 1000);
    };

    return (
        <Image
            id={componentID}
            className="cursor-pointer"
            src={NootNootPic}
            alt="Noot Noot Pingu Emote"
            onClick={() => { playSound(); shakeTheNoots() }}
        />
    );
}