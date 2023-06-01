import Image from 'next/image'
import Link from 'next/link';
import { imageType } from '../../../types/softwareproddev';
const ImageComp = (props: imageType) => {
  return (
    <div className="w-full  flex justify-center">
      <Image className={props?.classes} src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  )
}

export default ImageComp;