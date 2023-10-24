import Logo from '../components/Logo';
import Noot from '../components/Noot';
import Link from 'next/link';

export default function NootsBotPage() {
  return (
    <div className="text-center h-screen flex flex-col py-5">

      <Logo />

      <div className="border border-white rounded-lg p-5 my-3  w-2/3 mx-auto">

        <h1 className="text-3xl font-bold">Noots Bot</h1>

        <div className="my-3">
          <Link href="https://twitch.tv/Noots_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 hover:underline">
            Twitch Profile
          </Link>
        </div>

        <div className="my-3 text-left">
          <p>Noots Bot is a Twitch bot that can be added to any Twitch channel.</p>

          <h2 className="text-xl font-bold mt-3">Commands:</h2>
          <ul className="list-disc list-inside">

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!cointoss</code>
              <p className="pl-5">Will give out either HEADS or TAILS to the person sending it!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!facts</code>
              <p className="pl-5">Will give out a random fact!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!joke</code>
              <p className="pl-5">Will give out a random joke!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!bonk [user]</code>
              <p className="pl-5">Will bonk the user!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!hug [user]</code>
              <p className="pl-5">Will hug the user!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!punch [user]</code>
              <p className="pl-5">Will punch the user!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!stare [user]</code>
              <p className="pl-5">Will stare at the user!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!pdex [pokemon|number]</code>
              <p className="pl-5">Will give out information about the pokemon!</p>
            </li>

            <li className="my-3">
              <code className="bg-blue-600 text-white p-1">!manifest [message]</code>
              <p className="pl-5">Will manifest the message! Like this: ✨ [message] ✨</p>
            </li>

          </ul>
        </div>

        <div className="my-4 border-t py-3">
          <p>Contact <Link href="https://twitch.tv/cajogos" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 hover:underline">cajogos on Twitch</Link> to add Noots Bot to your channel!</p>
        </div>

      </div>

      <div className="border-t border-gray-900 pt-3 mt-3">
        <Noot />
      </div>

    </div >
  );
};