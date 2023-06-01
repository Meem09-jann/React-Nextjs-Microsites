import type { NextPage } from "next";
import Link from "next/link";
import { ButtonProps } from "../types/softwareproddev";
import ButtonWithImgComp from "../components/common/Button/ButtonWithImageRight";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="main background image"
        src="https://www.ticonsys.com/assets/img/bg.png"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-screen mx-auto text-center">
        <div className="w-full item-center text-center ">
          <h1 className="text-slate-50 font-normal text-xl mb-[23px]">
            <span className="text-blue-900 font-normal">T</span>echnology,
            <span className="text-blue-900 font-normal">I</span>nnovation &amp;
            <span className="text-blue-900 font-normal"> Co</span>mmunication
            <span className="text-blue-900 font-normal">N</span>etwork
          </h1>
          <h2 className="text-slate-50 text-[51px] h-auto font-bold">
            TiCON SYSTEM LIMITED
          </h2>
          <p className="text-blue-900 text-[17.2px] font-normal mb-3">
            Our Aim is to develop and implement powerful solution while working
            on innovation and unleashing creativity.
          </p>

          <Link href="ticon/softwaredev" target="_blank">
            <button className="cursor-pointer font-bold justify-around bg-slate-50 text-sky-500 h-10 py-1 px-2 hover:bg-sky-500 hover:text-white  visited:bg-sky-500 visited:text-white  text-base rounded-lg drop-shadow-lg m-auto flex">
              <p className="m-auto mr-3">Go to Development Page</p>
              <img
                src="/img/right_arrow_blue.svg"
                alt="rightarrow"
                className=" p-0.5 w-3 h-fit my-auto mx-0"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
