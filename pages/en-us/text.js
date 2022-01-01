export default function () {
    return(
<section class="py-20 bg-stone-100 my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto">
      <div class="px-4 md:mr-6">
        <h3 class="text-8xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
          Ronnapat Srivoraivlai
        </h3>
        <p class="mt-4 text-stone-800 text-3xl font-medium">
          My personal website
        </p>
      </div>
      <div>
        <div class="absolute bg-sky-500 transform -translate-x-10 relative h-64">
        </div>
        <div class="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
                        <img src="/cover.jpeg" />
        </div>
      </div>
    </div>
  </section>
    )
}