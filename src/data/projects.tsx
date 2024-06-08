import { Project } from '@/type/project';
import Placeholder from '@/assets/placeholder.jpg';
import { SiGooglecloud, SiGooglegemini, SiJavascript, SiNextdotjs, SiTailwindcss, SiTensorflow } from 'react-icons/si';
import { FaAndroid, FaBootstrap, FaHtml5, FaLaravel, FaReact } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandKotlin } from 'react-icons/tb';
import { BiLogoPhp } from 'react-icons/bi';
import { PiFileSqlFill } from 'react-icons/pi';
import Smiley from '@/assets/Smiley.png';
import Zenspire from '@/assets/Zenspire.png';
import Aether from '@/assets/Aether.png';
import TravelTix from '@/assets/TravelTix.png';
import Denteksi from '@/assets/Denteksi.png';
import SparkNotes from '@/assets/SparkNotes.png';
import TokoBuku from '@/assets/Tokobuku.png';
import Portofolio from '@/assets/Portofolio.png';

export const data: Project[] = [
    {
        id:1,
        title: "Smiley",
        description: "Dental health app",
        technology: [FaAndroid, TbBrandKotlin, IoLogoFirebase, SiGooglecloud, SiTensorflow],
        image: Smiley,
        link: "https://github.com/1langit/Smiley",
    },
    {
        id:2,
        title: "Zenspire",
        description: "Mental health app",
        technology: [FaAndroid, TbBrandKotlin, SiGooglecloud],
        image: Zenspire,
        link: "https://github.com/1langit/Zenspire",
    },
    {
        id:3,
        title: "Aether",
        description: "Air polution monitoring app",
        technology: [FaAndroid, TbBrandKotlin, IoLogoFirebase, SiGooglegemini],
        image: Aether,
        link: "https://github.com/1langit/Aether",
    },
    {
        id:4,
        title: "TravelTix",
        description: "Train ticketing app",
        technology: [FaAndroid, TbBrandKotlin, IoLogoFirebase],
        image: TravelTix,
        link: "https://github.com/1langit/TravelTix",
    },
    {
        id:5,
        title: "Denteksi",
        description: "Dental screening examination web app",
        technology: [FaLaravel, FaBootstrap],
        image: Denteksi,
        link: "denteksi.com",
    },
    {
        id:6,
        title: "SparkNotes",
        description: "Note taking web app",
        technology: [FaHtml5, FaBootstrap, SiJavascript, PiFileSqlFill, BiLogoPhp],
        image: SparkNotes,
        link: "https://github.com/1langit/SparkNotes",
    },
    {
        id:7,
        title: "Toko Buku",
        description: "Bookstore web app",
        technology: [FaLaravel, FaBootstrap, SiTailwindcss],
        image: TokoBuku,
        link: "https://github.com/1langit",
    },
    {
        id:8,
        title: "Portofolio Web",
        description: "You are here!",
        technology: [SiNextdotjs, FaReact, SiTailwindcss],
        image: Portofolio,
        link: "https://github.com/1langit/portofolio",
    },
];