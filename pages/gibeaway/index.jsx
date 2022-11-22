import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../../components/Logo';

export default function GibeawayIndex()
{
    return (
        <div className="text-center h-screen flex flex-col justify-center">

            <Link href="/">
                <Logo />
            </Link>

            <h2 className="text-4xl">Gibeaways!</h2>

            <p className="text-sm text-neutral-300">Currently running gibeaways:</p>

            <ul>
                <li className="my-2">
                    <Link href="/gibeaway/200-followers">
                        <a className="text-neutral-200 hover:text-neutral-100 underline">
                            <FaArrowRight className="inline" /> 200 Followers
                        </a>
                    </Link>
                </li>
            </ul>


        </div>
    )
}