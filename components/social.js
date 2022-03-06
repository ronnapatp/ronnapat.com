import Container from "./layout/container";

export default function () {
  const project = [
    {
      id: 1,
      icon: "ri-twitter-fill",
      title: "Twitter",
      href: "https://ronnapat.com//s/twitter",
    },
    {
      id: 2,
      icon: "ri-facebook-circle-fill",
      title: "Facebook",
      href: "https://ronnapat.com/s/facebook",
    },
    {
      id: 3,
      icon: "ri-github-fill",
      title: "Github",
      href: "https://ronnapat.com/s/github",
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-700">
      <div className="text-center p-10 text-4xl">
        Ronnapat Srivoravilai Social media
      </div>
      <Container>
        {project.map((project) => (
          <div
            key={project.id}
            className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100"
          >
            <a href={project.href} target="_blank" rel="noopener">
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <i className={project.icon}></i> {project.title}
              </h5>
            </a>
          </div>
        ))}
      </Container>
    </div>
  );
}
