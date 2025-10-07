// import  { use } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ singleBook }) => {

    const {image,bookId,bookName,author,category,rating,tags,yearOfPublishing} =singleBook
  // const data = use(bookPromise)
//   console.log(singleBook);
  return (
    <Link to={`bookDetails/${bookId}`}>
        <div className="card border-1 border-[#13131326] p-8 shadow-sm">
      <figure className="bg-[#f3f3f3] p-8 rounded-2xl">
        <img
            className="w-[134px] h-[180px]"
          src={image}
          alt="Book"
        />
      </figure>
      <div className="">
        <div className="flex mt-3 text-[#23BE0A] font-medium">
            {
            tags.map((tag) => <button className="px-4 py-2 bg-[#23BE0A]/10 rounded-4xl mr-4" key={tag}>{tag}</button>)
        }
        </div>
        {/* <div className="flex mt-3 text-[#23BE0A] font-medium">
            <p className="mr-3">{tags[0]}</p>
            <p>{tags[1]}</p>
        </div> */}
        <h2 className="text-xl font-semibold text-[#131313] mt-4">{bookName}
            <div className="badge bg-[#23BE0A]/10 text-[#23BE0A] ml-3">{yearOfPublishing}</div>
        </h2>
        <h3 className="font-medium text-[#131313]/70 pt-3 pb-4">
          By : {author}
        </h3>
        <div className="flex justify-between pt-3 text-[#131313]/70 font-medium border-t border-dashed border-[#131313]/15">
            <h4>{category}</h4>
            <p className="flex items-center">{rating} <CiStar className="ml-1" /></p>
        </div>
        {/* <div className="flex">
            <h4 className="flex">{category}</h4>
            <p className="flex justify-end">{rating}</p>
        </div> */}
        
      </div>
    </div>
    </Link>
  );
};

export default Book;
