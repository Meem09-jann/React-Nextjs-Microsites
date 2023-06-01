import { ImagePeraListProps } from "../../../../../types/softwareproddev";
import Image from 'next/image'
import TitleWithPeraComp from "../../../../common/TitleWithPera";
import { TitleWithPeraProps } from "../../../../../types/softwareproddev";
import ImageList from "../../../../common/List/ImageList";
const ImagePeraListComp = (props: ImagePeraListProps) => {
    const propsForHeadingText: TitleWithPeraProps = {
        heading: props.heading,
        text: props.text,
        headingclasses: props.headingclasses,
        textclasses: props.textclasses
    };
    const list = props.list;
    return (
        <div>
            <div>
                <Image className="logo w-auto h-[60px]" src={props.img} alt="stety" width="20" height="20" />
            </div>
            <div>
                <TitleWithPeraComp {...propsForHeadingText}></TitleWithPeraComp>
            </div>
            <div className="mt-5">
                <ul>
                    {
                        list?.map(({ listText, imgUrl }) => (
                            <ImageList key={listText} img={imgUrl} text={listText} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ImagePeraListComp;