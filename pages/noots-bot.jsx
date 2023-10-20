import Logo from '../components/Logo';
import Noot from '../components/Noot';
import Link from 'next/link';

export default function NootsBotPage() {
  return (
    <div className="text-center h-screen flex flex-col py-5">

      <Logo />

      <div className="border-t border-white p-5 my-3">

        <h1 className="text-3xl font-bold">Noots Bot</h1>

        <div className="my-3">
          <Link href="https://twitch.tv/Noots_Bot">
            <a target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 hover:underline">Twitch Profile</a>
          </Link>
        </div>

        <div className="my-3 text-left">
          <p>Noots Bot is a Twitch bot that can be added to any Twitch channel.</p>
          <p>It has a variety of features, including:</p>
          <ul className="list-disc list-inside">
            <li>Pokedex Checker</li>
            <li>Random Food Generator</li>
            <li>And more!</li>
          </ul>
        </div>

        <div className="my-3">
          <p>Contact <Link href="https://twitch.tv/cajogos"><a target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 hover:underline">cajogos on Twitch</a></Link> to add Noots Bot to your channel!</p>
        </div>

      </div>

      <div className="border-t border-gray-900 pt-3 mt-3">
        <Noot />
      </div>

    </div>
  );
};