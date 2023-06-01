import { ImageListProps } from "../../../types/softwareproddev";
const ImageList = ({ img, text }: ImageListProps) => {
    return (
        <li className="list-none flex items-baseline">
            <img src={img} alt="" className="mr-[9.66px] w-[15px]" />
            <p className="text-[#828282]">{text}</p>
        </li>
    );
}

export default ImageList;