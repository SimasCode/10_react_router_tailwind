import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import BooksPage from './pages/BooksPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
