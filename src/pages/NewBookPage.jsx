import { useState } from 'react';

export default function NewBookPage() {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [genreValue, setGenreValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formDone, setFormDone] = useState(false);

  function titleInput(event) {
    setTitleValue(event.target.value);
  }

  function authorInput(event) {
    setAuthorValue(event.target.value);
  }

  function yearInput(event) {
    setYearValue(event.target.value);
  }

  function genreInput(event) {
    setGenreValue(event.target.value);
  }

  const newObj = {
    title: titleValue,
    author: authorValue,
    year: yearValue,
    genre: genreValue,
  };

  function handleSubmit(event) {
    setErrorMessage('');

    event.preventDefault();

    if (
      titleValue.trim() === '' ||
      authorValue.trim() === '' ||
      yearValue.trim() === '' ||
      genreValue.trim() === ''
    ) {
      console.log('laukai privalomi');
      return setErrorMessage('Visi laukeliai turi būti užpildyti');
    }
    setFormDone(true);
  }

  console.log('newObj ===', newObj);

  return (
    <div className="container w-1/2 mt-6 text-center">
      {errorMessage !== '' && (
        <h2 className="text-red-600 text-xl">{errorMessage}</h2>
      )}

      {!formDone && (
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter book Title:
            </label>
            <input
              onChange={titleInput}
              value={titleValue}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter book Author:
            </label>
            <input
              onChange={authorInput}
              value={authorValue}
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter book year:
            </label>
            <input
              onChange={yearInput}
              value={yearValue}
              type="text"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Year"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="genre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter book genre:
            </label>
            <input
              onChange={genreInput}
              value={genreValue}
              type="text"
              id="genre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Genre"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      )}
      {formDone && (
        <div>
          <h2 className="text-blue-600 font-bold text-lg">
            Jūs sėkmingai pridėjote knygą !!!{' '}
          </h2>
        </div>
      )}
    </div>
  );
}
