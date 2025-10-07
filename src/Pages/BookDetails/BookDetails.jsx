import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreBD } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    // console.log(typeof id,typeof data)

    const singleBook = data.find(book => book.bookId === bookId)
    // const singleBook = data.find(book => book.bookId === bookId)
    // console.log(singleBook)
    const {image,bookName,author,category,review,tags,rating,yearOfPublishing,publisher,totalPages} = singleBook
    // const {image,bookId,bookName,author,category,rating,tags,yearOfPublishing} =singleBook

    const handleClickToAddRead =(id) =>{
        addToStoreBD(id)
    }



    return (
        <div className="card card-side items-center">
  <figure className='p-16 bg-[#131313]/5 rounded-2xl my-16'>
    <img
    className='w-[425px] h-[640px]'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body w-1/2">
    <h2 className="card-title">{bookName}</h2>
    <p>By : {author}</p>
    {/* <p>Click the button to watch on Jetflix app.</p> */}
    <p className='border-t border-[#131313]/15'>{category}</p>
    <p className='border-t border-[#131313]/15'>Review: {review}</p>
    <div className='border-t border-[#131313]/15'>
        <p>tags:</p>
        {
            tags.map((tag,index) => <button key={index}> #{tag}</button>)
        }
    </div>
    <p>Number of Pages: {totalPages}</p>
    <p>Publisher: {publisher}</p>
    <p>Year of Publishing: {yearOfPublishing}</p>
    <p>Rating: {rating} </p>
    <div>
        <button onClick={() => handleClickToAddRead(id)} className="btn mr-4">Read</button>
        <button className="btn">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;