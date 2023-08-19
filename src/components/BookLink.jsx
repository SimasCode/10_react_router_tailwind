import { Link } from 'react-router-dom';

export default function BookLink(props) {
  return (
    <li>
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
