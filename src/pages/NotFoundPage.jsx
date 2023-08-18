import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline pb-4">
        OPPPS, 404, page not found
      </h1>
      <p className="pb-4">The page was not found</p>
      <Link className="underline block" to={'/'}>
        try home page
      </Link>
    </div>
  );
}
