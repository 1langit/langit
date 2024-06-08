import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
    id: number,
    title: string,
    description: string,
    technology: IconType[],
    image: StaticImageData,
    link: string,
}