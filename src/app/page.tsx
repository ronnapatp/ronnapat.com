import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h2 className="text-2xl mb-2">
          Hello, I'm
        </h2>
        <h1 className="font-bold text-4xl">
          Ronnapat Srivoravilai
        </h1>
        <p className="mt-1">
          science enthusiast, math lover, and programming geek
        </p>
      </main>
    </div>
  );
}
