import SocialButton from '../components/SocialButton';
import { FaDiscord, FaInfoCircle, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import Styles from '../styles/Homepage.module.scss';
import Logo from '../components/Logo';
import Noot from '../components/Noot';

export default function Home()
{
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

          <SocialButton href="/discord"
            icon={<FaDiscord />}
            text="Noot Army"
            className="discord"
          />

          <SocialButton href="/beardiverse"
            icon={<FaDiscord />}
            text="Beardiverse"
            className="discord"
          />

        </div>

      </div>

      <div className="border-t border-gray-900 pt-3 mt-3">
        <Noot />
      </div>

    </div>
  )
}
