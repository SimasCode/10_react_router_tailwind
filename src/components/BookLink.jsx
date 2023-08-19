import { Link } from 'react-router-dom';

export default function BookLink(props) {
  return (
    <li>
      <Link className="underline" to={`/books/${props.id}`}>
        {props.id} - {props.title} - {props.author} - {props.year} -{' '}
        {props.genre}
      </Link>
    </li>
  );
}
