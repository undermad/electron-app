import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {useState} from "react";
import rtx from "../images/rtx.jpg";
import mouse from "../images/mouse.jpg";
import {CarouselChild} from "./CarouselChild.tsx";

export interface Product {
    img: string,
    name: string,
    category: string,
}

export const Carousel = () => {
    const topProducts: Product[] = [
        {
            img: `${rtx}`,
            name: 'RTX 3080',
            category: 'Graphic Cards',
        },
        {
            img: `${mouse}`,
            name: 'Logitech G Mouse',
            category: 'Mouses and controllers',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const slideToLeft = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? topProducts.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const slideToRight = () => {
        const isLastSlide = currentIndex === topProducts.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }


    return (

        <div className={"max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"}>

            {/*Left Arrow*/}
            <div
                onClick={slideToLeft}
                className={'opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 rounded-full border-2 p-2 bg-sky-600 text-sky-50 cursor-pointer transition-all'}>
                <BsChevronCompactLeft size={30}/>
            </div>

            {/*ELEMENT*/}
            <CarouselChild product={topProducts[currentIndex]}/>

            {/*DOTS*/}
            <div className={"flex gap-1 absolute left-1/2 bottom-[10%] -translate-x-1/2 cursor-pointer text-2xl"}>
                {topProducts.map((_, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled/>
                    </div>
                ))}
            </div>

            {/*Right Arrow*/}
            <div
                onClick={slideToRight}
                className={"opacity-0 group-hover:opacity-100 absolute top-1/2 right-5 -translate-y-1/2 rounded-full border-2 p-2 bg-sky-600 text-sky-50 cursor-pointer transition-all"}>
                <BsChevronCompactRight size={30}/>
            </div>


        </div>
    )
}
