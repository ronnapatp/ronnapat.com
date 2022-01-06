export default function Example() {
    return (
      <div className="bg-gray-50 dark:bg-slate-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            <span className="block">Read blog?</span>
            <span className="block text-sky-600 dark:text-sky-400">Read my blog to know more about me</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/blog"
                target='_blank'
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:text-gray-100 dark:hover:bg-sky-400"
              >
                Read now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  