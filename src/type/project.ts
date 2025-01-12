import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
    title: string,
    subtitle: string,
    description: string,
    technology: IconType[],
    image: StaticImageData,
    link: string,
}