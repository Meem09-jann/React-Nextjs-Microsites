import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { videoType } from "../../../types/softwareproddev";
const VideoComp = (props: videoType) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <div className=" relative m-auto w-[268px] h-full">
            {hasWindow && (

                <iframe
                    src={
                        props.url.includes("/watch?v=")
                            ? props.url.replace("/watch?v=", "/embed/") + "?enablejsapi=1&origin=http://localhost:3000"
                            : props.url
                    }

                    width={props.width}
                    height={props.height}
                    className={props.classes}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                // <ReactPlayer
                //     url={props.url}
                //     width={props.width}
                //     height={props.height}
                //     className={props.classes}
                // />
            )
            }
        </div>
    );
};

export default VideoComp;