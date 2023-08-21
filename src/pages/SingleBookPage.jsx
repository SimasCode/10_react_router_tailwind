import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);

  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => {
        const found = data.find((bObj) => bObj.id.toString() === params.bookId);
        console.log('data ===', found);
        setCurrentBook(found);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, [params.bookId]);

  return (
    <div className="container">
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        to={'/books'}
      >
        Go back
      </Link>

      <div className="border border-slate-500 p-8 shadow-md mt-10  ">
        <h1 className="text-3xl font-bold underline ">
          Title: {currentBook.title} id: {params.bookId}
        </h1>
        <p className="text-lg text-gray-600 mt-6">
          Written by: {currentBook.author}
        </p>
        <p className="text-2xl mt-6 ">Year: {currentBook.year}</p>
        <h3 className="mt-6 ">
          Genre: <strong>{currentBook.genre} </strong>
        </h3>
      </div>
    </div>
  );
}
