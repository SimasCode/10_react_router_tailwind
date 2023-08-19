import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="pb-4 flex justify-between">
      <a href="">
        <div className="conainter"></div>
        React <span className="text-lg font-bold">Router</span>
      </a>
      <nav>
        <NavLink
          to="/new"
          className="  bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded-sm"
        >
          Add book
        </NavLink>

        <NavLink
          to="/"
          className="border hover:bg-slate-500 border-black rounded-sm px-3 py-1 "
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1 "
        >
          About
        </NavLink>

        <NavLink
          to="/books"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          Books
        </NavLink>

        <NavLink
          to="/contacts"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}
