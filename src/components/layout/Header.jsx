import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activePage, setActivePage] = useState(1);

  return (
    <header className="pb-4 flex justify-between">
      <a href="">
        <div className="conainter"></div>
        React <span className="text-lg font-bold">Router</span>
      </a>
      <nav>
        <Link
          to="/"
          className="border hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          About
        </Link>
        <Link
          to="/books"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          Books
        </Link>
      </nav>
    </header>
  );
}
