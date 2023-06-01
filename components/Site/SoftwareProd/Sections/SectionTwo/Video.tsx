const VideoComp = () => {
    return (
        <div className="bg-slate-50  shadow-lg m-auto w-[414px] h-auto ">
            <div className="relative">
                <div className="rounded-tl-xl rounded-tr-xl absolute w-[-webkit-fill-available] h-[-webkit-fill-available] bg-[rgba(43,43,43,0.65)]"></div>
                <img className="rounded-tl-xl rounded-tr-xl" src="/img/MNIslam.png" alt="" />
                <img className="absolute top-[37%] left-[41%]" src="/img/video_play_blue.svg" alt="" />
            </div>
            <div className="h-[108px] rounded-bl-xl rounded-br-xl flex flex-col justify-center">
                <p className="text-[28.73px] font-medium text-center text-[#333333]">MN Islam</p>
                <p className="text-[20.28px] font-normal text-center text-[#7A7A7A]"> CEO, TiCON System Ltd. </p>
            </div>
        </div>
    );
}

export default VideoComp;