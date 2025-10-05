import { Suspense } from "react";
import Book from "../Book/Book";

const bookPromise = fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
.then(res=> res.json())

const Books = () => {
    // console.log(bookPromise)
    return (
        <div>
            <Suspense fallback={<h2>book data loading.......</h2>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;