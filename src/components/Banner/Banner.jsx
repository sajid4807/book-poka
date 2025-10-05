import bookImg from './../../assets/banner-book.png';

const Banner = () => {
    return (
        <div className='flex justify-around items-center my-20 rounded-2xl bg-[#131313]/5 px-[100px] py-[80px]'>
            <div>
                <h2>Books to freshen up your bookshelf</h2>
                <button className="btn">View The List</button>
            </div>
            <div>
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;