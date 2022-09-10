import SocialButton from '../components/SocialButton';
import { FaInfoCircle, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import Styles from '../styles/Homepage.module.scss';
import Logo from '../components/Logo';
import Noot from '../components/Noot';

export default function Home()
{
  return (
    <div className="text-center h-screen flex flex-col justify-center">

      <Logo />

      <div className={Styles.socialIconsContainer}>
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
        <SocialButton href="/youtube"
          icon={<FaYoutube />}
          text="YouTube"
          className="youtube"
        />
      </div>

      <div className="border-t border-gray-900 pt-5 mt-5">
        <Noot />
      </div>

    </div>
  )
}
