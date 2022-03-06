export default function () {
  return (
    <div className="inline-flex space-x-5">
      <div class="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src="/favicon.ico" className="mx-auto" />
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Favicon logo (.ico)
        </h1>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Download as :{" "}
          <a href="/favicon.ico" download>
            ICO
          </a>
        </p>
      </div>
      <a
        href="#"
        class="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </div>
  );
}
