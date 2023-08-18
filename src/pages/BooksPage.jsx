import { Link } from 'react-router-dom';
import { bookData } from '../assets/db';

export default function BooksPage() {
  return (
    <div>
      <link rel="stylesheet" href="" />
      <h1 className="text-3xl font-bold underline">Books Page</h1>
      <p>See all the books we have</p>

      <h2 className="text-xl font-medium mb-2">Pick a book:</h2>

      <ul>
        {bookData.map((book) => (
          <li key={book.id} className="pb-4 text-orange-700">
            <Link className="underline" to={`/books/${book.id}`}>
              {book.title} - {book.author} - {book.year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
