import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {useEffect, useState} from "react";
import {CarouselChild} from "./CarouselChild.tsx";
import BookModel from "../../../models/BookModel.ts";
import {Spinner} from "../Spinner.tsx";

export interface Product {
    img: string,
    name: string,
    category: string,
}

export const Carousel = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const dotsIndexes: number[] = [0, 3, 6]

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl = "http://localhost:8080/api/books";
            const url: string = `${baseUrl}?page=0&size=9`;
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const responseJson = await response.json();
            const responseData = responseJson._embedded.books;
            const loadedBooks: BookModel[] = [];

            for (const key in responseData) {
                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img,
                })
            }

            setBooks(loadedBooks)
            setIsLoading(false);

        }

        fetchBooks().catch((error: Error) => {
            setIsLoading(false);
            setHttpError(error.message);
        })


    }, [])

    if (isLoading) {
        return (
            <Spinner/>
        )
    }
    if (httpError) {
        return (
            <div className={'m-5 container text-red-600'}>
                <p>{httpError}</p>
            </div>
        )
    }

    const slideToLeft = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? books.length - 3 : currentIndex - 3;
        setCurrentIndex(newIndex);
    }

    const slideToRight = () => {
        const isLastSlide = currentIndex === books.length - 3;
        const newIndex = isLastSlide ? 0 : currentIndex + 3;
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
            <div className={'flex gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '}>
                <CarouselChild book={books[currentIndex]}/>
                <CarouselChild book={books[currentIndex + 1]}/>
                <CarouselChild book={books[currentIndex + 2]}/>
            </div>

            {/*DOTS*/}
            <div className={"flex gap-1 absolute left-1/2 bottom-[10%] -translate-x-1/2 cursor-pointer text-2xl"}>
                {dotsIndexes.map((slideIndex) => (
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
