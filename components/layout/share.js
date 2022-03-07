import Link from "next/link";

export default function () {
  return (
    <div>
      <div className="max-w-2xl select-none py-5 text-2xl">
        Share : &nbsp;
        <Link href="sd">
          <a target="_blank">
            <div className="bg-[#1877f2] px-2 py-2 rounded-md text-2xl inline-flex text-white">
              <i className="bi bi-facebook"></i>
              <span className="hidden md:block">&nbsp; Facebook</span>
            </div>
          </a>
        </Link>
        &nbsp;
        <Link href="sd">
          <a target="_blank">
            <div className="bg-[#1DA1F2] px-2 py-2 rounded-md text-2xl inline-flex text-white">
              <i className="bi bi-twitter"></i>
              <span className="hidden md:block">&nbsp; Twitter</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
