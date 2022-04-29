export default function ({ title, description }) {
  return (
    <div className="bg-gray-300 dark:bg-slate-600 text-center py-32">
      <h1 className="text3xl md:text-5xl text-black dark:text-white font-bold">
        {title}
        <p className="text-md md:text-xl text-gray-700 dark:text-gray-100 font-normal mt-2">
          {description}
        </p>
      </h1>
    </div>
  );
}
