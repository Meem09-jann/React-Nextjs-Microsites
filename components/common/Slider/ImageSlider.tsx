import { ButtonProps, imageType, SliderImageProps, TitleWithPeraProps } from "../../../types/softwareproddev";
import Link from 'next/link';
import React, { useState } from 'react';
import ImageComp from '../Image/Image';
import TitleWithPeraComp from "../TitleWithPera";
import ButtonWithImgComp from "../Button/ButtonWithImageRight";
import { useEffect } from 'react';


let totalWidth = 1540;
let counter = 0;
let totalElement = 0;

const ImageSliderComp = (props: SliderImageProps) => {
    const propsForHealthImage: imageType = {
        src: '/img/DataRobot_medicine.svg',
        alt: "cvs_health",
        width: 558,
        height: 350,
        classes: "",
        link: "/"
    };
    const propsForHealthText: TitleWithPeraProps = {
        heading: "CVS Health Saves Lives with AI-Driven Vaccine Rollout",
        text: "When the pandemic presented new business challenges overnight for CVS Health, the company turned to augmented intelligence to deliver testing and vaccines as efficiently and effectively as possible. The company administered more than 60 million vaccines nationwide.",
        headingclasses: "font-bold text-[34px] text-[#19224A] text-left mb-[15px]",
        textclasses: "font-normal text-base text-[#828282] text-left"
    };
    const propsForFullStoryButton: ButtonProps = {
        text: "Read full story",
        type: "button",
        link: "#",
        classes: "cursor-pointer font-bold rounded-lg  hover:bg-sky-500 hover:text-white   bg-sky-500 text-white h-[42px] w-[174px] text-lg font-bold",
        img: "/img/right_arrow_white.svg"
    };
    const propsForMoreStoryButton: ButtonProps = {
        text: "Find more stories",
        type: "button",
        link: "#",
        classes: "cursor-pointer font-bold text-[#18A6E1] h-[42px] w-[174px] text-left text-base   hover:text-sky-600",
        img: "/img/right_arrow_blue.svg"
    };
    let numOfImg = props.img.length;
    const [count, setCount] = useState(0);
    const [transformClass, setTransformClass] = useState('');
    // const [transformValue, setTransformValue] = useState(0);
    useEffect(() => {
        let totalUnit = Math.round(screen.width / 220);

        console.log("count before", count, "totalElement", totalElement, "screen.width", screen.width, "Unit", totalUnit)

        // if ((screen.width > 767) && ((totalUnit - 4) < totalElement)) {
        if (totalElement === 0) {
            if (screen.width > 767) {
                if ((totalUnit - 2) <= numOfImg) {
                    totalElement = numOfImg - 5;
                } else {
                    totalElement = 0;

                }
                // console.log("totalElement", totalElement, "Unit", totalUnit)

            } else {
                totalElement = numOfImg;

            }
        }
        // if (count <= 0) {
        //     // setCount(0);
        //     return;
        // } else if (count > (totalElement - 1)) {
        //     setCount(totalElement);
        //     return;
        // } else {
        //     // setTransformValue(count * 220)
        //     setTransformClass(`translate-x-[-${count * 220}px]`)
        // }
        // console.log("count after", count, "totalElement", totalElement)
        if (totalElement != 0) setTransformClass(`translate-x-[-${count * 220}px]`)

    }, [count])

    const style: object = {
        className: `nav nav-tabs md:mx-28 lg:mx-40 2xl:mx-80 carousel-inner relative w-fit h-[84px] flex justify-center transition duration-300 ease-in-out ${transformClass}`,
    }

    return (
        <>

            <div id="imageSliderCarousel" className="carousel  overflow-hidden slide carousel-fade absolute mt-[-100px] w-[-webkit-fill-available] bg-[#ffffffd6] drop-shadow-md" data-bs-ride="carousel">

                <ul id="imageSliderUl" role="tablist" {...style}>
                    {
                        props.img?.map((imgprops, index) => (
                            imgprops.link && <li key={imgprops.src + index} role="presentation" id="imageSliderList" className="nav-item carousel-item active w-[220px] m-auto">
                                <Link href={imgprops.link} className="nav-link w-full flex   justify-center  leading-tight px-6 py-3 my-2  hover:border-[#18A6E1] hover:border-b-2  hover:bg-gray-100 focus:border-transparent" data-bs-toggle="pill" data-bs-target={imgprops.link} role="tab" aria-controls="tabs-home"
                                    aria-selected="true" >
                                    <ImageComp {...imgprops}></ImageComp>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 md:ml-28 lg:ml-40 2xl:ml-96"
                    type="button"
                    data-bs-target="#imageSliderCarousel"
                    data-bs-slide="prev"
                    onClick={() => { count >= 0 && count < (totalElement - 1) && setCount(count + 1) }}
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 md:mr-28 lg:mr-40 2xl:mr-96"
                    type="button"
                    data-bs-target="#imageSliderCarousel"
                    data-bs-slide="next"
                    onClick={() => { { count > 0 && count < totalElement && setCount(count - 1) } }}
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="tab-content" id="tabs-tabContent">
                <div id="tabs-cvs" role="tabpanel" className="tab-pane fade show active md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-oyak" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-flexiti" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-nim" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-valley" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-8451" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tabs-turo" role="tabpanel" className="tab-pane fade show  md:mx-28 lg:mx-40 2xl:mx-80 relative">

                    <div className="flex flex-col w-full mt-[64px] lg:flex-row">
                        <div className="flex w-full  mr-0 lg:w-1/2 lg:mr-[64px]">
                            <ImageComp {...propsForHealthImage} />
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2">
                            <TitleWithPeraComp {...propsForHealthText} />
                            <div className="flex flex-col mt-[25px] md:flex-row">
                                <ButtonWithImgComp {...propsForFullStoryButton} />
                                <ButtonWithImgComp {...propsForMoreStoryButton} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default ImageSliderComp;