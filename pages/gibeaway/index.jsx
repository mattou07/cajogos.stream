import Link from 'next/link';
import Logo from '../../components/Logo';

export default function GibeawayIndex()
{
    return (
        <div className="text-center h-screen flex flex-col justify-center">

            <Link href="/">
                <Logo />
            </Link>

            <h2 className="text-4xl">Gibeaways!</h2>

            <p className="text-sm text-neutral-300">Currently running Twitch gibeaway:</p>

            <div className="mx-auto my-6">
                <iframe
                    src="https://streamelements.com/overlay/62acc5e897f67b68a51375e8/OuSyfrqtqkLdhPfpInRTuiqS66cufU0HECMTf9E4k6ECD59E"
                    width="350" height="350" scrolling="no" frameBorder="0" allowFullScreen={false}
                ></iframe>
            </div>
        </div>
    )
}