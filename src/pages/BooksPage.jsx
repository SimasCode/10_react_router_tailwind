import { useEffect, useState } from 'react';
import BookLink from '../components/BookLink';

export default function BooksPage() {
  const [items, setItems] = useState([]);

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

  return (
    <div className="container">
      <link rel="stylesheet" href="" />
      <h1 className="text-3xl font-bold underline">Books Page</h1>
      <p>See all the books we have</p>

      <h2 className="text-xl font-medium mb-2">Pick a book:</h2>

      <ul className="border-2 border-rose-400">
        {items.map((obj) => (
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
