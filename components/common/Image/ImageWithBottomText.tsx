import Image from 'next/image'
import Link from 'next/link';
import { imageType } from '../../../types/softwareproddev';
const ImageWithBottomTextComp = (props: imageType) => {
    return (
        <>
            <Image className={props?.classes} src={props.src} alt={props.alt} width={props.width} height={props.height} />
            <p className={props?.textclasses}>{props.text}</p>
        </>
    )
}

export default ImageWithBottomTextComp;