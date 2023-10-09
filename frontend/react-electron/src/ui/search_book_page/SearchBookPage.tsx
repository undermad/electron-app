import {useEffect, useState} from "react";
import BookModel from "../../models/BookModel.ts";
import {Spinner} from "../hompage/Spinner.tsx";
import {Button} from "../hompage/buttons/Button.tsx";
import {DropdownButton} from "../hompage/buttons/DropdownButton.tsx";

export const SearchBookPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<string | null>(null);


    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl = "http://localhost:8080/api/books";
            const url: string = `${baseUrl}?page=0&size=5`;
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

    return (
        <div>
            <div className={"flex gap-5 p-5"}>
                    <input className={"w-1/2 border-2 rounded-xl p-1"}/>
                <Button>Search</Button>
                <DropdownButton name={"Categories"}></DropdownButton>

            </div>


        </div>
    );
}