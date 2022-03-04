import Link from "next/link";

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} className="text-black hover:text-sky-400 dark:text-white dark:hover:text-sky-300" />
      </Link>
    </>
  );
}
