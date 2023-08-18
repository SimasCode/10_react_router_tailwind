import { useState } from 'react';

export default function Header() {
  const [activePage, setActivePage] = useState(1);

  return (
    <header className="pb-4 flex justify-between">
      <a href="">
        <div className="conainter"></div>
        React <span className="text-lg font-bold">Router</span>
      </a>
      <nav>
        <a
          href="/"
          className="border hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          Home
        </a>
        <a
          href="/about"
          className="border  hover:bg-slate-500 border-black rounded-sm px-3 py-1"
        >
          About
        </a>
      </nav>
    </header>
  );
}
