import Link from "next/link";

import Logo from "../../common/Footer/Logo";
import { LogoProps } from "../../../types/softwareproddev";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
const Footer = () => {
  const siteurl: string = "/";
  const propsForLogo: LogoProps = {
    width: 60,
    height: 60,
    alt: "footerlogo",
    src: "/img/footer.webp",
    link: siteurl,
  };
  const propsForAws: LogoProps = {
    width: 60,
    height: 60,
    alt: "footerlogo",
    src: "/img/aws_apn.webp",
    link: "#",
  };
  const propsForIcon: LogoProps = {
    width: 10,
    height: 10,
    alt: "footerlogo",
    src: "/img/aws_apn.webp",
    link: siteurl,
  };
  return (
    <footer className="left-0 bottom-0 w-full h-auto pt-6 pb-[9px] bg-gradient-to-r from-cyan-400 to-sky-500 xl:h-[166px]">
      <div className=" max-w-6xl h-auto w-auto m-auto border-b-2 pb-6 md:h-[86px]">
        <div className="flex flex-col   items-center md:flex-row md:justify-between">
          <div className="px-[15px] h-[85px] w-max ">
            <Logo {...propsForLogo}></Logo>
            <p className="text-white">info@ticonsys.com</p>
          </div>
          <div className="px-[15px] h-[85px] w-max">
            <Logo {...propsForAws}></Logo>
          </div>
          <div className="px-[15px] h-[85px] w-max">
            <div>
              <Link href="#" className="text-white mr-1.5">
                Term of Service
              </Link>
              <Link href="#" className="text-white">
                Privacy Policy
              </Link>
            </div>
            <div className="social-icons flex justify-between">
              <Link
                href="https://www.facebook.com/TiconSystem/"
                className="text-white text-3xl"
              >
                <TiSocialFacebook />
              </Link>
              <Link
                href="https://twitter.com/ticonsystemltd"
                className="text-white text-3xl"
              >
                <TiSocialTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ticonsys/"
                className="text-white text-3xl"
              >
                <TiSocialLinkedin />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCNBApk70ExuCc9hpyzCghxA"
                className="text-white text-3xl"
              >
                <TiSocialYoutube />
              </Link>
              <Link
                href="https://www.instagram.com/ticonsys/"
                className="text-white text-3xl"
              >
                <TiSocialInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-center mt-[15px] mb-[10px] text-sm">
        ©2023 TiCON System Limited. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
