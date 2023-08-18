import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bookData } from '../assets/db';

export default function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);

  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    console.log('bookData ===', bookData);
    // surasti knygos objekta kurio id yra lygus prams.bookId
    const found = bookData.find((bObj) => bObj.id.toString() === params.bookId);
    console.log('found ===', found);
    setCurrentBook(found);
  }, [params.bookId]);
  return (
    <div className="container">
      <Link className="bg-gray" to={'/books'}>
        Go back
      </Link>
      <h1 className="text-3xl font-bold underline">
        {' '}
        Title: {currentBook.title} id: {params.bookId}
      </h1>
      <div className="">
        <p className="text-lg text-gray-600">
          Written by: {currentBook.author}
        </p>
        <p className="text-2xl">Year: {currentBook.year}</p>
        <h3>
          Genre: <strong>{currentBook.genre} </strong>
        </h3>
      </div>
    </div>
  );
}
