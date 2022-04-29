export default function footer({ paht }) {
  return (
    <footer class="p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center mb-4 sm:mb-0 space-x-1">
          <a href="https://github.com/ronnapatp">
            <i class="ri-github-fill text-xl"></i>
          </a>
          <a href="https://twitter.com/ronnapatp">
            <i class="ri-twitter-fill text-xl"></i>
          </a>
        </div>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li></li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Terms
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Cookies
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://ronnapat.com" class="hover:underline">
          Ronnapat Srivoravilai
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
