import {
  DownloadIcon
} from "@heroicons/react/outline"
export default function () {
  return (
    <div className="inline-flex space-x-5">
      <div class="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src="/favicon.ico" className="mx-auto" />
        <h2 class="mb-2 px-3 font-bold tracking-tight text-gray-900 dark:text-white">
          Logo with background
        </h2>
        <p class="font-normal text-gray-700 dark:text-gray-200 text-center bg-gray-200 dark:bg-slate-600  ">
          <a href="/logo-with-bg.zip" download className="inline-flex">
              Download
              <DownloadIcon className="w-6 h-6" />
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
