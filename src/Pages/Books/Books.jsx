import { Suspense } from "react";
import Book from "../Book/Book";
// import { useLoaderData } from "react-router";
// import Book from "../Book/Book";

// const bookPromise = fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
// .then(res=> res.json())

const Books = ({data}) => {
    // const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <Suspense fallback={<h2>book data loading.......</h2>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {
                data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book> )
            }
                </div>
                {/* <Book data={data}></Book> */}
            </Suspense>
        </div>
    );
};

export default Books;