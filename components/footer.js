import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function footer(){
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    return(
    <footer className="bg-gray-100 w-full py-8 border-t">
        <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Privacy
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Blog
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Repository
                    </a>
                </li>
                <li className="my-2">
                    <button className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200"onClick={openModal}>
                        Share
                    </button>
                </li>
            </ul>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className="relative">
                        <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-sky-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="Email"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Ronnapat Srivoravilai © 2020 - {new Date().getFullYear()}
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          className="fixed inset-0 z-10 overflow-y-auto bg-opacity-70 bg-gray-400 "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl  opacity-100 p-6 my-16 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Share my website
                </Dialog.Title>
                <div className="mt-2">
                  <textarea className='w-[100%] resize-none border border-zinc-400 rounded cursor-text' disabled></textarea>
                  
                </div>

                <div className="mt-4 space-x-2">
                <button
                    type="button"
                    className="inline-flex left-0 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Copy
                  </button>
                  <button
                    type="button"
                    className="inline-flex float-right justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
        </footer>
    )
}