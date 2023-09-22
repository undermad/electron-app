import BookModel from "../../../models/BookModel.ts";
import rtx from "../../../resources/images/rtx.jpg";

export const CarouselChild: React.FC<{
    book: BookModel,
}> = (props) => {


    return (
        <div
            className={"flex flex-col gap-3 text-center"}>
            {props.book.img ?
                <div
                    style={{backgroundImage: `url(${props.book.img})`}}
                    className={"w-[200px] h-[300px] bg-cover bg-center rounded duration-700"}/>
                :
                <div
                    style={{backgroundImage: `url(${rtx})`}}
                    className={"w-[200px] h-[300px] bg-cover bg-center rounded duration-700"}/>
            }
            <p className={"text-xl font-medium"}>{props.book.title}</p>
            <button className={"border rounded p-2 bg-amber-400 hover:bg-amber-300 transition-all"}> ADD TO BASKET
            </button>
        </div>
    )
}