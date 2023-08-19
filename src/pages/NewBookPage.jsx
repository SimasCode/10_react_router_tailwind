export default function NewBookPage() {
  return (
    <form className="container">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter book Title:
        </label>
        <input
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
          type="text"
          id="year"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Year"
        />
      </div>
    </form>
  );
}
