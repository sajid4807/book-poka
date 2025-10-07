import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList,setReadList] = useState([])
    const [sort,setSort]= useState('')
    const data = useLoaderData()
    const handleSort = type => {
        setSort(type)
        if(type === 'Pages'){
            const sortedByPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
            setReadList(sortedByPages)
        }
        if(type === 'Rating'){
            const sortedByRating = [...readList].sort((a,b) => a.rating - b.rating)
            setReadList(sortedByRating)
        }
    }


    // console.log(data)

    useEffect(()=> {
        const storeBookData = getReadBook();
        const convertedStoredBookData = storeBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId ))
        setReadList(myReadList)
        // console.log(myReadList)
    },[])

    return (
        <div>
            <details className="dropdown">
  <summary className="btn m-1">Sort By : {sort?sort:''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=> handleSort('Pages')}>Pages</a></li>
    <li><a onClick={()=> handleSort('Rating')}>Rating</a></li>
  </ul>
</details>

            
             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {readList.length}
        {
            readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
        }
      </h2>
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;