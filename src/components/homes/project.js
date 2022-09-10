export default function () {
  const project = [
    {
      id: 1,
      title: "My twitter bot with typescript",
      description:
        "I build my first twitter bot to update my bio using twitter api with typescript",
      href: "https://ronnapat.com/b/tw-bot",
    },
    {
      id: 2,
      title: "My website ronnapat.com",
      description:
        "Since last year I create 2 version of my website and in this year I create version 1.2.0",
      href: "https://ronnapat.com/b/my-web",
    },
  ];
  return (
    <div className="">
      <div className="py-20">
        <div className="text-3xl md:text-4xl text-slate-800 dark:text-gray-200 mb-4">
          Blog & Project
        </div>
        Blog & Project not found
        {/* {project.map((project) => (
          <div
            key={project.id}
            className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100"
          >
            <a href={project.href} target="_blank" rel="noopener">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </a>
          </div>
        ))} */}
      </div>
    </div>
  );
}
