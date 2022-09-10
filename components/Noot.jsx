import Image from 'next/image';
import NootNootPic from '../public/assets/images/pingu_nootnoot_112.png';

export default function Noot()
{
    let playSound = () =>
    {
        let audio = new Audio('/assets/sounds/noot-noot.mp3');
        audio.play();
    };

    return (
        <Image
            className="cursor-pointer"
            src={NootNootPic}
            alt="Noot Noot Pingu Emote"
            onClick={() => { playSound() }}
        />
    );
}