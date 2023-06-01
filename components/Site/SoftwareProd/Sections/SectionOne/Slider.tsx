import { MouseEvent } from 'react';
const SliderComp = () => {

    const showSlider = (e: MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id;
        let sliderId = id.slice(0, -3);
        let slider = document.getElementById(sliderId);

        let btnOne = document.getElementById("sliderOneBtnImg") as HTMLImageElement;
        let btnTwo = document.getElementById("sliderTwoBtnImg") as HTMLImageElement;
        let btnThree = document.getElementById("sliderThreeBtnImg") as HTMLImageElement;
        let btnFour = document.getElementById("sliderFourBtnImg") as HTMLImageElement;

        let sliderOne = document.getElementById("sliderOne");
        let sliderTwo = document.getElementById("sliderTwo");
        let sliderThree = document.getElementById("sliderThree")
        let sliderFour = document.getElementById("sliderFour")


        slider?.classList.add("active")
        let sliderBtnImg = document.getElementById(id + 'Img') as HTMLImageElement;
        if (sliderBtnImg) {
            sliderBtnImg.src = "/img/home_page_slide_block.svg"
        }


        if (id == "sliderOneBtn") {
            sliderTwo?.classList.remove("active")
            sliderThree?.classList.remove("active")
            sliderFour?.classList.remove("active")

            if (btnTwo?.src !== "/img/home_page_slide.svg") { btnTwo.src = "/img/home_page_slide.svg" }
            if (btnThree?.src !== "/img/home_page_slide.svg") { btnThree.src = "/img/home_page_slide.svg" }
            if (btnFour?.src !== "/img/home_page_slide.svg") { btnFour.src = "/img/home_page_slide.svg" }

        } else if (id == "sliderTwoBtn") {
            sliderOne?.classList.remove("active")
            sliderThree?.classList.remove("active")
            sliderFour?.classList.remove("active")

            if (btnOne?.src !== "/img/home_page_slide.svg") { btnOne.src = "/img/home_page_slide.svg" }
            if (btnThree?.src !== "/img/home_page_slide.svg") { btnThree.src = "/img/home_page_slide.svg" }
            if (btnFour?.src !== "/img/home_page_slide.svg") { btnFour.src = "/img/home_page_slide.svg" }
        } else if (id == "sliderThreeBtn") {
            sliderTwo?.classList.remove("active")
            sliderOne?.classList.remove("active")
            sliderFour?.classList.remove("active")

            if (btnOne?.src !== "/img/home_page_slide.svg") { btnOne.src = "/img/home_page_slide.svg" }
            if (btnTwo?.src !== "/img/home_page_slide.svg") { btnTwo.src = "/img/home_page_slide.svg" }
            if (btnFour?.src !== "/img/home_page_slide.svg") { btnFour.src = "/img/home_page_slide.svg" }
        } else if (id == "sliderFourBtn") {
            sliderTwo?.classList.remove("active")
            sliderThree?.classList.remove("active")
            sliderOne?.classList.remove("active")

            if (btnOne?.src !== "/img/home_page_slide.svg") { btnOne.src = "/img/home_page_slide.svg" }
            if (btnThree?.src !== "/img/home_page_slide.svg") { btnThree.src = "/img/home_page_slide.svg" }
            if (btnTwo?.src !== "/img/home_page_slide.svg") { btnTwo.src = "/img/home_page_slide.svg" }
        }
    }
    return (
        <div className=" md:mx-28   lg:mx-40  2xl:mx-80  flex justify-end">
            <ul className="flex h-3.5 w-28 justify-around">
                <li> <button id="sliderOneBtn" onClick={showSlider}><img id="sliderOneBtnImg" src="/img/home_page_slide_block.svg" alt="circle" className="h-2 w-2" /></button></li>
                <li> <button id="sliderTwoBtn" onClick={showSlider}><img id="sliderTwoBtnImg" src="/img/home_page_slide.svg" alt="circle" className="h-2 w-2" /></button></li>
                <li> <button id="sliderThreeBtn" onClick={showSlider}><img id="sliderThreeBtnImg" src="/img/home_page_slide.svg" alt="circle" className="h-2 w-2" /></button></li>
                <li> <button id="sliderFourBtn" onClick={showSlider}><img id="sliderFourBtnImg" src="/img/home_page_slide.svg" alt="circle" className="h-2 w-2" /></button></li>
            </ul>
        </div>
    );
}

export default SliderComp;