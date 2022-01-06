import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
    FacebookShareButton,
    LineShareButton,
    TwitterShareButton,
    TelegramShareButton,
    RedditShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LineIcon,
    TelegramIcon,
    RedditIcon,
    LinkedinIcon,
    EmailIcon,
} from "react-share";

export default function footer({
  paht
}){
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    let privacy = 'Privacy'
    let blog = 'Blog'
    let repo = 'Github'
    let share = 'Share'
      console.log(paht)
    if ( paht == 'th-th' ){
      privacy = 'ความเป็นส่วนตัว'
      blog = 'บทความ'
      repo = 'Github'
      share = 'แชร์'
    } else {
      privacy = 'Privacy'
      blog = 'Blog'
      repo = 'Github'
      share = 'Share'
    }

    return(
    <footer className="bg-gray-100 dark:bg-slate-900 w-full py-8 border-t dark:border-none">
        <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200 dark:text-sky-400 dark:hover:text-sky-500" href="?=notfound">
                        {privacy}
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200 dark:text-sky-400 dark:hover:text-sky-500" href="https://blog.ronnapat.com/" target='_blank'>
                        {blog}
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200 dark:text-sky-400 dark:hover:text-sky-500" href="https://github.com/ronnapatp/ronnapat.com" target='_blank'>
                        {repo}
                    </a>
                </li>
                <li className="my-2">
                    <button className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200 dark:text-sky-400 dark:hover:text-sky-500"onClick={openModal}>
                        {share}
                    </button>
                </li>
            </ul>
                <div className="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center dark:text-gray-300">
                    Ronnapat Srivoravilai © 2020 - {new Date().getFullYear()}
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          className="fixed inset-0 z-10 overflow-y-auto bg-opacity-70 bg-gray-400"
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
              <div className="inline-block w-full max-w-md  opacity-100 p-6 my-16 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-700 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Share my website
                </Dialog.Title>
                <div className="mt-2 space-x-2">
                  <span>
                    <FacebookShareButton
                    url="https://ronnapat.com/"
                    quote={`Ronnapat personal website`}
                    >
                    <FacebookIcon size={46} />
                    </FacebookShareButton>
                </span>
                <span>
                    <TwitterShareButton
                    url="https://ronnapat.com/"
                    title={`Ronnapat personal website`}
                    >
                    <TwitterIcon size={46} />
                    </TwitterShareButton>
                </span>
                <span>
                    <LineShareButton url="https://ronnapat.com/">
                    <LineIcon size={46} />
                    </LineShareButton>
                </span>
                <span>
                    <TelegramShareButton url='https://ronnapat.com/' title={`Ronnapat personal website`}>
                        <TelegramIcon size={46} />
                    </TelegramShareButton>
                </span>
                <span>
                    <RedditShareButton url='https://ronnapat.com/' title={`Ronnapat personal website`}>
                        <RedditIcon size={46} />
                    </RedditShareButton>
                </span>
                <span>
                    <LinkedinShareButton url='https://ronnapat.com/' title={`Ronnapat personal website`}>
                        <LinkedinIcon size={46} />
                    </LinkedinShareButton>
                </span>
                <span>
                    <EmailShareButton url='https://ronnapat.com/' >
                        <EmailIcon size={46} />
                    </EmailShareButton>
                </span>
                </div>

                <div className="mt-4 space-x-2">
                  <button
                    type="button"
                    className="inline-flex float-right justify-center px-4 py-2 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
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