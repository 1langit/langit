import { Project } from '@/type/project';
import { SiGooglecloud, SiGooglegemini, SiGooglemaps, SiJavascript, SiJetpackcompose, SiNextdotjs, SiShadcnui, SiTailwindcss, SiTensorflow } from 'react-icons/si';
import { FaBootstrap, FaHtml5, FaLaravel, FaReact } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandKotlin } from 'react-icons/tb';
import { BiLogoPhp } from 'react-icons/bi';
import { PiFileSqlFill } from 'react-icons/pi';
import Dentalint from '@/assets/Dentaint.png';
import Smiley from '@/assets/Smiley.png';
import Zenspire from '@/assets/Zenspire.png';
import Aether from '@/assets/Aether.png';
import TravelTix from '@/assets/TravelTix.png';
import SparkNotes from '@/assets/SparkNotes.png';
import Denteksi from '@/assets/Denteksi.png';
import TokoBuku from '@/assets/Tokobuku.png';
import TumbuhKuy from '@/assets/TumbuhKuy.png';
import Portofolio from '@/assets/Portofolio.png';

export const data: Project[] = [
    {
        title: "Dentalint",
        subtitle: "Dental assistant",
        description: `
        Dental health application leveraging AI for quick dental checkups, featuring an appointment system seamlessly integrated with the DIGMAN Electronic Medical Record system certified by Satu Sehat
        .
        Mobile frontend tech stack:
        - Kotlin
        - Jetpack Compose
        - Gemini SDK
        - Firebase analytics
        `,
        technology: [SiJetpackcompose, TbBrandKotlin, IoLogoFirebase, SiGooglecloud],
        image: Dentalint,
        link: "https://github.com/1langit/Dentalint",
    },
    {
        title: "Smiley",
        subtitle: "Dental health app",
        description: `
        Smiley is a dental health app that uses AI to analyze tooth images, detect issues, and provide tailored solutions, with an option to share reports and consult dentists via chat.
        .
        Mobile frontend tech stack:
        - Kotlin
        - XML
        - Firebase Firestore
        `,
        technology: [TbBrandKotlin, IoLogoFirebase, SiGooglecloud],
        image: Smiley,
        link: "https://github.com/1langit/Smiley",
    },
    {
        title: "Zenspire",
        subtitle: "Mental health app",
        description: `
        Zenspire is a mental health companion app revolutionizing access to care, featuring a mood tracker, journaling, community forums, nearby clinic locator, and personalized chatbot support.
        .
        Mobile frontend tech stack:
        - Kotlin
        - XML
        - Gemini SDK
        - Google Maps SDK
        `,
        technology: [TbBrandKotlin, SiGooglegemini, SiGooglemaps, SiGooglecloud],
        image: Zenspire,
        link: "https://github.com/1langit/Zenspire",
    },
    {
        title: "Aether",
        subtitle: "Air polution monitoring app",
        description: `
        Aether is an air quality analysis app designed to provide real-time insights into pollution levels. Interoperable with IoT, this app monitors the effectiveness of industrial chimney filters.
        .
        Tech stack:
        - Kotlin
        - XML
        - Firebase Firestore
        - Gemini SDK
        - MPAndroidChart 
        - TensorflowLite
        `,
        technology: [TbBrandKotlin, IoLogoFirebase, SiGooglegemini, SiTensorflow],
        image: Aether,
        link: "https://github.com/1langit/Aether",
    },
    {
        title: "TravelTix",
        subtitle: "Train ticketing app",
        description: `
        TravelTix is a train ticketing app that allows users to book train tickets, check schedules, and view ticket history. The app also allow admins to manage train schedules and ticket prices.
        .
        Tech stack:
        - Kotlin
        - XML
        - Firebase Firestore
        `,
        technology: [TbBrandKotlin, IoLogoFirebase],
        image: TravelTix,
        link: "https://github.com/1langit/TravelTix",
    },
    {
        title: "SparkNotes",
        subtitle: "Note taking website",
        description: `
        SparkNotes is a revolutionary digital companion designed to optimize your note-taking experience and boost your productivity. 
        .
        Tech stack:
        - HTML, CSS, JavaScript, PHP, SQL
        - Bootstrap
        - JQuery
        - MySQL
        `,
        technology: [FaHtml5, FaBootstrap, SiJavascript, PiFileSqlFill, BiLogoPhp],
        image: SparkNotes,
        link: "https://github.com/1langit/SparkNotes",
    },
    {
        title: "Denteksi",
        subtitle: "Dental checkup website",
        description: `
        A dental screening website powered by AI, enabling users to assess their dental health in just 2 minutes.
        .
        Tech stack:
        - HTML, CSS, JavaScript, PHP
        - Bootstrap
        - JQuery
        - Laravel
        - MySQL
        `,
        technology: [FaLaravel, FaBootstrap],
        image: Denteksi,
        link: "https://denteksi.com",
    },
    {
        title: "Bookstore Catalog",
        subtitle: "Bookstore website",
        description: `
        A web application for storing and managing bookstore data. The app enables CRUD operation for books and multiple role user authentication.
        .
        Tech stack:
        - HTML, CSS, JavaScript, PHP
        - Bootstrap
        - Laravel
        - MySQL
        `,
        technology: [FaLaravel, FaBootstrap],
        image: TokoBuku,
        link: "https://github.com/1langit/PPW2-14",
    },
    {
        title: "TumbuhKuy",
        subtitle: "Stunting care website",
        description: `
        TumbuhKuy is a web application for stunting assessment, allowing users to select ingredients and generate recipes tailored to children’s nutritional needs.
        .
        Tech stack:
        - Typescript
        - Next.js
        - React
        - Tailwind
        - ShadcnUI
        `,
        technology: [SiNextdotjs, FaReact, SiTailwindcss, SiShadcnui],
        image: TumbuhKuy,
        link: "https://github.com/1langit/tumbuhkuy",
    },
    {
        title: "Portofolio",
        subtitle: "You are here!",
        description: `
        This project features other projects that I've created. This is the first project I build with React. It uses Components, Hooks, and Conditional Rendering. This project will be constantly updated.
        .
        Tech stack:
        - Typescript
        - Next.js
        - React
        - Tailwind
        `,
        technology: [SiNextdotjs, FaReact, SiTailwindcss],
        image: Portofolio,
        link: "https://github.com/1langit/portofolio",
    },
];