import Container from "./container";
export default function () {

  const project = [
    { id: 1, title: 'My twitter bot with typescript', description: 'I build my first twitter bot to update my bio using twitter api with typescript', href: 'https://ronnapat.com/b/tw-bot'},
    { id: 2, title: 'My website ronnapat.com', description: 'Since last year I create 2 version of my website and in this year I create version 1.2.0', href: 'https://ronnapat.com/b/my-web'}
  ]
  return (
    <div className="bg-gray-50 dark:bg-slate-800">
      <Container>
        <div className="py-10">
          <div className="text-4xl md:text-6xl text-slate-800 dark:text-gray-200 font-semibold mb-4">
            My project
          </div>
          <div className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100">
          {project.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </a>
          ))}
          </div>
        </div>
      </Container>
      <div className="text-center pb-10">
        <a
          className="after:content-['_↗'] text-gray-600 dark:text-gray-200"
          href="https://blog.ronnapat.com/tags/project"
          target="_blank"
          rel="noopener"
        >
          View all in project blog
        </a>
      </div>
    </div>
  );
}
