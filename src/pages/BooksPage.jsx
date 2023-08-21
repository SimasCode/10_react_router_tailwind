import { useEffect, useState } from 'react';
import BookLink from '../components/BookLink';

export default function BooksPage() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log('ALIO ===', data);
        setItems(data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  console.log('inputValue ===', inputValue);

  console.log(
    'kas cia',
    items.filter((book) => book.genre.toLowerCase().includes(inputValue)),
  );

  return (
    <div className="container">
      <link rel="stylesheet" href="" />
      <h1 className="text-3xl font-bold underline">Books Page</h1>

      <form>
        <label htmlFor="search">Enter book genre:</label>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="search"
          name="search"
          id="search "
          className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mb-6">
          Click
        </button>
      </form>

      <h2 className="text-xl font-medium mb-2">Pick a book:</h2>

      <ul className="">
        {items
          .filter((book) => book.genre.toLowerCase().includes(inputValue))
          .map((obj) => (
            <BookLink
              key={obj.id}
              id={obj.id}
              title={obj.title}
              author={obj.author}
              year={obj.year}
              genre={obj.genre}
            />
          ))}
      </ul>
    </div>
  );
}
