import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookLink(props) {
  return (
    <li className="border border-slate-400 p-3 lg:col-span-4 xl:col-span-3">
      <Link
        className=" bg-indigo-200 underline text-lg hover:text-blue-600"
        to={`/books/${props.id}`}
      >
        {props.id} - {props.title} - {props.author} - {props.year} -{' '}
        {props.genre}
      </Link>
    </li>
  );
}

BookLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default BookLink;
