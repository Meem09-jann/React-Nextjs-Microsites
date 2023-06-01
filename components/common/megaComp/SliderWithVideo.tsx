import { PostWithTagTitleSubTextAndButtonProps, SliderWithVideoProps, videoType } from "../../../types/softwareproddev";
import Slider from "../../Site/SoftwareProd/Sections/SectionOne/Slider";
import VideoComp from "../../Site/SoftwareProd/Video";
import PostWithTagTitleSubTextAndButtonComp from "./PostWithTagTitleSubTextAndButton";

const SliderWithVideoComp = (props: SliderWithVideoProps) => {
    function VideoCheck(video: videoType | undefined) {
        if (video) {
            return <div className="w-full h-60 item-center flex justify-center bg-contain  md:bg-auto  bg-no-repeat bg-center bg-[url('/img/video_fream.png')] 2xl:w-2/5 ">
                <VideoComp {...video} />
            </div>;
        }
        return;
    }

    return (
        <>

            {
                props.sliders?.map((slider) => (
                    <div key={slider.id} id={slider.id} className={slider.class}>
                        <div className="w-full item-center text-center 2xl:w-3/5 2xl:text-left">
                            <PostWithTagTitleSubTextAndButtonComp {...slider.slider} />
                        </div>
                        {
                            VideoCheck(slider.video)
                        }
                    </div>
                ))
            }
        </>

    );
}

export default SliderWithVideoComp;