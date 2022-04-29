import Link from "next/link";

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a
          {...otherProps}
          className="no-underline text-black hover:text-sky-400 hover:underline dark:text-white dark:hover:text-sky-300"
        />
      </Link>
    </>
  );
}
