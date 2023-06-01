import LogoCom from "../../../common/Header/Logo";
import Link from "next/link";
import Image from "next/image";
import MenuComp from "../../../common/Menu/Menu";
import ButtonCom from "../../../common/Button/Button";
import { LogoProps } from "../../../../types/softwareproddev";
import SearchComp from "../../../common/Search";
import Header1Comp from "./Header1";
import Header2Comp from "./Header2";

const Header = () => {
  const siteurl: string = "/";
  const propsForLogo: LogoProps = {
    width: 60,
    height: 60,
    alt: "logo",
    src: "/img/header.png",
    link: siteurl,
  };

  return (
    <div className="w-full bg-white-500 shadow-lg relative shadow-slate-500/10 justify-evenly  h-32 px-2 flex flex-col  text-right md:px-24 lg:px-44 xl:px-44 2xl:px-[273px]">
      <Header1Comp></Header1Comp>
      <Header2Comp siteurl={siteurl}></Header2Comp>
    </div>
  );
};

export default Header;
