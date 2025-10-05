import  { use } from 'react';

const Book = ({bookPromise}) => {
    const data = use(bookPromise)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Book;