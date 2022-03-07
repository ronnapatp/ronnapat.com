import {
  DownloadIcon
} from "@heroicons/react/outline"
export default function () {
  return (
    <div className="md:inline-flex md:space-x-5">
      <div class="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src="/favicon.ico" className="mx-auto" />
        <h2 class="mb-2 px-3 font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Logo with background
        </h2>
        <p class="font-normal text-gray-700 dark:text-gray-200 text-center bg-gray-200 dark:bg-slate-600  ">
          <a href="/logo-with-bg.zip" download className="inline-flex">
              Download
              <DownloadIcon className="w-6 h-6" />
          </a>
        </p>
      </div>
      <div class="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img src="/favicon.ico" className="mx-auto" />
        <h2 class="mb-2 px-3 font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Logo with background
        </h2>
        <p class="font-normal text-gray-700 dark:text-gray-200 text-center bg-gray-200 dark:bg-slate-600  ">
          <a href="/logo-with-bg.zip" download className="inline-flex">
              Download
              <DownloadIcon className="w-6 h-6" />
          </a>
        </p>
      </div>
    </div>
  );
}
