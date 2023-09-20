import {Product} from "./Carousel.tsx";

export const CarouselChild: React.FC<{
    product: Product,
}> = (props) => {


    return(
        <div
            className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 text-center"}>
            <div
                style={{backgroundImage: `url(${props.product.img})`}}
                className={"w-[200px] h-[300px] bg-cover bg-center rounded duration-700"}/>
            <p className={"text-xl font-medium"}>{props.product.name}</p>
            <p className={"text-base font-thin"}>{props.product.category}</p>
            <button className={"border rounded p-2 bg-amber-400 hover:bg-amber-300 transition-all"}> ADD TO BASKET
            </button>
        </div>
    )
}