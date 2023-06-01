import { type } from "os"

export type listType ={
  imgUrl:string;
  listText:string;
}
export type menuType ={
  text:string;
  link:string;
}
export type buttonType ={
  text:string
  type:string
  link: string
  classes?:string
  img?:string
}
export type imageType ={
  src:string;
  alt:string;
  width:number;
  height:number;
  classes?:string
  link?:string | undefined
  text?:string
  textclasses?:string
}

export type videoType ={
  url:string;
  width?:string;
  height?:string;
  classes?:string
} 
export  type sliderWithVideoType ={
  id:string
  slider:PostWithTagTitleSubTextAndButtonProps
  video:videoType | undefined
  class?:string
}
export  interface LogoProps {
    width?: number
    height?: number
    alt:string
    src:string
    link?: string
    }
export  interface ButtonProps {
  text:string
  type:string
  link: string
  classes?:string
  img?:string
}
export  interface MenuHeaderProps {
  text:string
  link: string
  classes?:string
  droplist?:string[]
  img?:string
}
export  interface ImageListProps {
  img:string
  text:string
  link?: string
  classes?:string
}
export  interface DropdownHeaderProps {
  text:string
  img?:string
  link?: string
  classes?:string
  ulclasses?:string
  liclasses?:string
}

export  interface DropdownMenuProps {
  text:string
  img?:string
  link?: string
  classes?:string
  ulclasses?:string
  liclasses?:string
  list:string[]
}

export  interface TitleWithPeraProps {
  heading:string
  text:string
  headingclasses?:string
  textclasses?:string
}
export  interface ImagePeraListProps {
  heading:string
  text:string
  headingclasses?:string
  textclasses?:string
  img:string
  list?:listType[]
}
export  interface SliderMenuProps {
  menus:menuType[]
  ulclasses?:string
  liclasses?:string
  linkclasses?:string
}
export  interface SliderImageProps {
  img:imageType[]
  ulclasses?:string
  liclasses?:string
}
export  interface ImageMenuProps {
  img:imageType[]
  text:string
  classes?:string
  ulclasses?:string
  liclasses?:string
}

export  interface ImageWithTitleAndPeraProps {
  img:imageType
  title:string
  text:string
  classes?:string
  titleclasses?:string
  textclasses?:string
}

export  interface PostWithTagTitleSubTextAndButtonProps {
  tag?:string
  title:string
  sub?:string
  text?:string
  tagclasses?:string
  titleclasses?:string
  textclasses?:string
  subclasses?:string
  button?:buttonType
}

export  interface SliderWithVideoProps {
  sliders:sliderWithVideoType[]
}