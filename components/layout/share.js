import Link from "next/link";

export default function ({ href, title }) {
  return (
    <div>
      <div className="py-5 text-xl">
        Share : &nbsp;
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=https://ronnapat.com/en-us/blog/posts/${href}`}
        >
          <a target="_blank">
            <div className="bg-[#1877f2] px-2 py-2 rounded-md text-2xl inline-flex text-white">
              <i className="bi bi-facebook"></i>
            </div>
          </a>
        </Link>
        &nbsp;
        <Link
          href={`https://twitter.com/intent/tweet?url=https://ronnapat.com/en-us/blog/posts/${href}%20via%20@ronnapatp&text=${title}`}
        >
          <a target="_blank">
            <div className="bg-[#1DA1F2] px-2 py-2 rounded-md text-2xl inline-flex text-white">
              <i className="bi bi-twitter"></i>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
