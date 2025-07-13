import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getStoredReadList } from '../Root/addToDb';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    // ideally we will directly get the read book list from the database.

    const allBooks = useLoaderData();


    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    },[])


    return (
        <div>
            <h3 className='text-3xl my-8'>Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl">Books I read: {readList.length}</h2>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 cla>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
