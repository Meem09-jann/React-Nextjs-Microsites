import Image from 'next/image'
import Link from 'next/link';
import { ImageWithTitleAndPeraProps } from '../../../types/softwareproddev';
import TitleWithPeraComp from '../TitleWithPera';
const ImageWithRightTitleAndPeraComp = (props: ImageWithTitleAndPeraProps) => {

    return (
        <div className='flex items-center'>
            <Image className={props?.img.classes} src={props.img.src} alt={props.img.alt} width={props.img.width} height={props.img.height} />
            <div className='flex flex-col ml-[33px]'>
                <h1 className={props.titleclasses}>
                    {props.title}
                </h1>
                <p className={props.textclasses}>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default ImageWithRightTitleAndPeraComp;