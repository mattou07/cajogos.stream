import Head from 'next/head';
import Link from 'next/link';
import { FaInfoCircle, FaTrophy } from 'react-icons/fa';
import Logo from '../../components/Logo';
import Noot from '../../components/Noot';
import Style from '../../styles/Gibeaways.module.scss';

export default function Gibeaway200Followers()
{
    return (
        <>

            <Head>
                <title>CAJOGOS 200 Twitch Followers Gibeaway! NOOT NOOT!</title>
            </Head>

            <div className={Style.page}>

                <Link href="/">
                    <Logo />
                </Link>

                <h1 className={Style.title}>200 Twitch Followers Gibeaway!</h1>

                <p>Let&apos;s celebrate together reaching 200 followers on Twitch!</p>

                <div className={Style.section}>
                    <h2 className={Style.subtitle}>
                        <FaTrophy className="inline" /> Prizes <FaTrophy className="inline" />
                    </h2>
                    <p className="text-sm my-3 text-neutral-200">YOU get to choose <strong>ONE</strong> prize from the following list:</p>
                    <ul className={Style.details}>
                        <li className={Style.detail}>
                            NootCrate <span className="text-yellow-400 text-lg font-bold">MAX</span>
                            <small>(UK only)</small>
                        </li>
                        <li className={Style.detail}>
                            Pokemon <span className="text-red-400">Scarlet</span> OR <span className="text-violet-400">Violet</span>
                            <small>(Digital / Physical - UK only)</small>
                        </li>
                        <li className={Style.detail}>
                            £40 Gift Card of your choice
                            <small>(Amazon, MagicMadhouse, etc.)</small>
                        </li>
                    </ul>
                </div>

                <div className={Style.section}>
                    <h2 className={Style.subtitle}>
                        <FaInfoCircle className="inline" /> How to Enter <FaInfoCircle className="inline" />
                    </h2>

                    <ul className={Style.details}>
                        <li className={Style.detail}>
                            The giveaway will run using the StreamElements platform.<br />
                            You will be able to purchase entries using your NootCoins.<br />
                            <small>Giveaway link and more information on this soon...</small>
                        </li>
                        <li className={Style.detail}>
                            The winner will be announced on the celebration stream.<br />
                            <small>Date to be announced soon...</small>
                        </li>
                        <li className={Style.detail}>
                            The winner will be contacted via Twitch whisper.<br />
                            <small>The winner will have 24 hours to respond with their detail choice.</small>
                        </li>
                    </ul>

                </div>

                <div className="text-center text-sm text-neutral-300 my-2">
                    <Link href="/gibeaway">
                        <button className={Style.button}>
                            More Gibeaways
                        </button>
                    </Link>
                </div>

                <div className="mt-4">
                    <Noot />
                </div>

            </div>
        </>
    );
}