import SocialButton from '../components/SocialButton';
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import Styles from '../styles/Homepage.module.scss';
import Logo from '../components/Logo';
import Noot from '../components/Noot';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center h-screen flex flex-col justify-center">

      <Logo />

      <div className={Styles.socialIconsContainer}>

        <div className={Styles.doubleButtons}>

          <SocialButton href="/twitch"
            icon={<FaTwitch />}
            text="Twitch"
            className="twitch"
          />

          <SocialButton href="/twitter"
            icon={<FaTwitter />}
            text="Twitter"
            className="twitter"
          />

          <SocialButton href="/instagram"
            icon={<FaInstagram />}
            text="Instagram"
            className="instagram"
          />

          <SocialButton href="/youtube"
            icon={<FaYoutube />}
            text="YouTube"
            className="youtube"
          />

          <SocialButton href="/github"
            icon={<FaGithub />}
            text="GitHub"
            className="github"
          />

          <SocialButton href="/beardiverse"
            icon={<FaDiscord />}
            text="Beardiverse"
            className="discord"
          />

        </div>

      </div>

      <div className="flex mx-auto gap-4">
        <div className="mb-4">
          <Link href="/gibeaway">
            <a className="bg-gray-900 text-white hover:bg-gray-700 px-4 py-2 rounded-lg mt-3">Gibeaways!</a>
          </Link>
        </div>

        <div className="mb-4">
          <Link href="/noots-bot">
            <a className="bg-gray-900 text-white hover:bg-gray-700 px-4 py-2 rounded-lg mt-3">Noots Bot!</a>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-900 pt-3 mt-3">
        <Noot />
      </div>

    </div>
  )
}
