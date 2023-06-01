import { ImageMenuProps } from "../../../types/softwareproddev";
import ImageWithBottomTextComp from "../Image/ImageWithBottomText";

const ImageMenuWithTextRightComp = (props: ImageMenuProps) => {
    return (
        <li className={props.classes}>
            <div className="w-2/6 m-auto  md:ml-28 lg:ml-40 2xl:ml-80">
                <p>{props.text}</p>
            </div>
            <div className="w-4/6 m-auto md:mr-28 lg:mr-40 2xl:mr-80">
                <ul className={props.ulclasses}>
                    {
                        props.img?.map((imgprops) => (
                            <li key={imgprops.alt} className={props.liclasses}>
                                <ImageWithBottomTextComp {...imgprops} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    );
}

export default ImageMenuWithTextRightComp;