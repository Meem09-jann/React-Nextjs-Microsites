import {
  ButtonProps,
  PostWithTagTitleSubTextAndButtonProps,
  SliderWithVideoProps,
  videoType,
} from "../../../../../types/softwareproddev";
import ButtonWithImgComp from "../../../../common/Button/ButtonWithImageRight";
import PostWithTagTitleSubTextAndButtonComp from "../../../../common/megaComp/PostWithTagTitleSubTextAndButton";
import SliderWithVideoComp from "../../../../common/megaComp/SliderWithVideo";
import VideoComp from "../../Video";
import SliderComp from "./Slider";
import Slider from "./Slider";
const TopSliderComp = () => {
  const propsForButton: ButtonProps = {
    text: "Learn More",
    type: "button",
    link: "#",
    classes:
      "justify-around bg-slate-50 text-sky-500 h-10 w-36 py-1 px-2 hover:bg-sky-500 hover:text-white  text-base rounded-lg drop-shadow-lg",
    img: "/img/right_arrow_blue.svg",
  };
  const propsForSlide1: PostWithTagTitleSubTextAndButtonProps = {
    tag: "TiCON SYSTEM LIMITED",
    title: "TiCON SYSTEM LIMITED",
    // sub: "National ICT Award Winner 2019",
    text: "Our Aim is to develop and implement powerful solution while working on innovation and unleashing creativity.",
    tagclasses: "mb-3 text-lg font-normal text-[#d9d9d9]",
    titleclasses: "text-slate-50 text-[51px] h-auto font-bold",
    // subclasses: "text-[#003fa9] text-xl font-normal mb-[22px]",
    textclasses: "text-slate-50 text-[17.2px] font-normal",
    button: {
      text: "Learn More",
      type: "button",
      link: "#",
      img: "/img/right_arrow_blue.svg",
      classes:
        "justify-around bg-slate-50 text-sky-500 h-10 w-36 py-1 px-2 hover:bg-sky-500 hover:text-white  text-base rounded-lg drop-shadow-lg",
    },
  };

  const propsForSlide2: PostWithTagTitleSubTextAndButtonProps = {
    tag: "The Ultimate Streaming Solution",
    title: "BlessBit",
    // sub: "National ICT Award Winner 2019",
    text: "National ICT Award Winner 2019 National ICT Award Winner 2019. he Ultimate Streaming Solution. he Ultimate Streaming Solution.",
    tagclasses: "mb-3 text-lg font-normal text-[#d9d9d9]",
    titleclasses: "text-slate-50 text-[51px] h-auto font-bold",
    subclasses: "text-[#003fa9] text-xl font-normal mb-[22px]",
    textclasses: "text-white text-[16px] font-light",
    button: {
      text: "Learn More",
      type: "button",
      link: "#",
      img: "/img/right_arrow_blue.svg",
      classes:
        "justify-around bg-slate-50 text-sky-500 h-10 w-36 py-1 px-2 hover:bg-sky-500 hover:text-white  text-base rounded-lg drop-shadow-lg",
    },
  };
  const propsForSlide3: PostWithTagTitleSubTextAndButtonProps = {
    tag: "BTV Mobile App Launch",
    title: "BTV Mobile App",
    // sub: "BTV Mobile App Launch 2022",
    text: "BTV Mobile App Launch",
    tagclasses: "mb-3 text-lg font-normal text-[#d9d9d9]",
    titleclasses: "text-slate-50 text-[51px] h-auto font-bold",
    subclasses: "text-[#003fa9] text-xl font-normal mb-[22px]",
    textclasses: "text-white text-[16px] font-light",
    button: {
      text: "Learn More",
      type: "button",
      link: "#",
      img: "/img/right_arrow_blue.svg",
      classes:
        "justify-around bg-slate-50 text-sky-500 h-10 w-36 py-1 px-2 hover:bg-sky-500 hover:text-white  text-base rounded-lg drop-shadow-lg",
    },
  };
  const propsForSlide4: PostWithTagTitleSubTextAndButtonProps = {
    tag: "The Ultimate Streaming Solution",
    title: "BlessBit",
    sub: "National ICT Award Winner 2019",
    text: "National ICT Award Winner 2019 National ICT Award Winner 2019. he Ultimate Streaming Solution. he Ultimate Streaming Solution.",
    tagclasses: "mb-3 text-lg font-normal text-[#d9d9d9]",
    titleclasses: "text-slate-50 text-[51px] h-auto font-bold",
    subclasses: "text-[#003fa9] text-xl font-normal mb-[22px]",
    textclasses: "text-white text-[16px] font-light",
    button: {
      text: "Learn More",
      type: "button",
      link: "#",
      img: "/img/right_arrow_blue.svg",
      classes:
        "justify-around bg-slate-50 text-sky-500 h-10 w-36 py-1 px-2 hover:bg-sky-500 hover:text-white  text-base rounded-lg drop-shadow-lg",
    },
  };
  const propsForSliderOneVideo: videoType = {
    url: "https://www.youtube.com/watch?v=ZpA32zw2NTw",
    width: "268px",
    height: "63.3%",
    classes: "absolute top-[14.5%] left-[1.6%]",
  };
  const propsForSliderTwoVideo: videoType = {
    url: "https://www.youtube.com/watch?v=Le0mtDNS5vo",
    width: "268px",
    height: "63.3%",
    classes: "absolute top-[14.5%] left-[1.6%]",
  };
  const propsForSliderThreeVideo: videoType = {
    url: "https://www.youtube.com/watch?v=Xp7FCBLnojU",
    width: "268px",
    height: "63.3%",
    classes: "absolute top-[14.5%] left-[1.6%]",
  };
  const propsForSliderFourVideo: videoType = {
    url: "https://www.youtube.com/watch?v=ZpA32zw2NTw",
    width: "268px",
    height: "63.3%",
    classes: "absolute top-[14.5%] left-[1.6%]",
  };

  const propsForSliderWithVideo: SliderWithVideoProps = {
    sliders: [
      {
        id: "sliderTwo",
        slider: propsForSlide2,
        class:
          "carousel-item  float-left w-full flex-col justify-between 2xl:flex-row",
        video: propsForSliderTwoVideo,
      },
      {
        id: "sliderThree",
        slider: propsForSlide3,
        class:
          "carousel-item  float-left w-full flex-col justify-between 2xl:flex-row",
        video: propsForSliderThreeVideo,
      },
      {
        id: "sliderFour",
        slider: propsForSlide4,
        class:
          "carousel-item  float-left w-full flex-col justify-between 2xl:flex-row",
        video: propsForSliderFourVideo,
      },
    ],
  };

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="bg-[url('/img/bg.png')] h-[740px] md:h-[620px] xl:h-[560px] 2xl:h-[466px] w-auto rounded-[22px] p-8 mb-[9px] md:mx-28 md:p-12 md:mb-[9px] lg:mb-[9px] lg:mx-40 lg:px-28 lg:py-16 2xl:py-28 2xl:pr-[57px] 2xl:mx-80  2xl:mb-[9px]">
          <div className="carousel-inner relative w-full overflow-hidden">
            {" "}
            <div
              id="sliderOne"
              className="carousel-item active float-left w-full flex-col justify-between 2xl:flex-row"
            >
              <div className="w-full item-center text-center 2xl:w-3/5 2xl:text-left">
                <h1 className="text-slate-50 font-normal text-xl mb-[23px]">
                  <span className="text-blue-900 font-normal">T</span>echnology,
                  <span className="text-blue-900 font-normal">I</span>nnovation
                  &amp;
                  <span className="text-blue-900 font-normal"> Co</span>
                  mmunication
                  <span className="text-blue-900 font-normal">N</span>etwork
                </h1>
                <h2 className="text-slate-50 text-[51px] h-auto font-bold">
                  TiCON SYSTEM LIMITED
                </h2>
                <p className="text-slate-50 text-[17.2px] font-normal">
                  Our Aim is to develop and implement powerful solution while
                  working on innovation and unleashing creativity.
                </p>
                <div className="mt-9 ">
                  <ButtonWithImgComp {...propsForButton}></ButtonWithImgComp>
                </div>
              </div>
              <div className="w-full h-60 item-center bg-contain  md:bg-auto  flex justify-center bg-no-repeat bg-center bg-[url('/img/video_fream.png')] 2xl:w-2/5 ">
                <VideoComp {...propsForSliderOneVideo} />
              </div>
            </div>
            <SliderWithVideoComp {...propsForSliderWithVideo} />
          </div>
        </div>
        <div className="carousel-indicators  md:mx-28   lg:mx-40  2xl:mx-80  flex justify-end">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
      </div>
      {/* <SliderComp /> */}
    </>
  );
};
export default TopSliderComp;
