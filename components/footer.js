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
import about from './about';

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
    let pages = 'Pages'
    let homepage = 'Home'
    let blogpage = 'Blog'
    let aboutpage = 'About'
    let contactpage = 'Contact'
    let privacy = 'Privacy'
    let blog = 'Blog'
    let repo = 'Github'
    let share = 'Share'
    if ( paht == 'th-th' ){
      pages = 'หน้าต่างๆ'
      homepage = 'หน้าหลัก'
      blogpage = 'บทความ'
      aboutpage = 'เกี่ยวกับ'
      privacy = 'ความเป็นส่วนตัว'
      contactpage = 'ติดต่อ'
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
      <footer class="bg-gray-200 dark:bg-slate-900">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left pt-10">
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <div class="text-xs uppercase text-gray-700 dark:text-gray-400 font-medium mb-6">
                  {pages}
              </div>
  
              <a href={`${paht}`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {homepage}
              </a>
              <a href={`${paht}/blog`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {blogpage}
              </a>
              <a href={`${paht}/about`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {aboutpage}
              </a>
              <a href={`${paht}/contact`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {contactpage}
              </a>
          </div>
  
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <div class="text-xs uppercase text-gray-700 dark:text-gray-400 font-medium mb-6">
                useful link
              </div>
  
              <a href={`${paht}/privacy`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Privacy Policy
              </a>
              <a href={`${paht}/cookie`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Cookie Policy
              </a>
              <a href={`${paht}/terms`} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Terms of service
              </a>
          </div>
  
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <div class="text-xs uppercase text-gray-700 dark:text-gray-400 font-medium mb-6">
                  Build with
              </div>
  
              <a href="https://nextjs.org/" target='_blank' class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Next.js
              </a>
              <a href="https://tailwindcss.com/" target='_blank' class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Tailwindcss
              </a>
              <a href="https://heroicons.com/" target='_blank' class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Heroicons
              </a>
              <a href="https://remixicon.com/" target='_blank' class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  Remix icons
              </a>
          </div>
  
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <div class="text-xs uppercase text-gray-700 dark:text-gray-400 font-medium mb-6">
                  other
              </div>
              <a href="https://github.com/ronnapatp/ronnapat.com" target='_blank' class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {repo}
              </a>
              <button onClick={openModal} class="my-3 block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-sm font-medium duration-700">
                  {share}
              </button>
          </div>
      </div>
  
      <div class="pt-2">
          <div class="flex pb-5 px-3 m-auto pt-5 
              border-t border-gray-500 text-gray-700 dark:text-gray-400 text-sm 
              flex-col md:flex-row max-w-6xl">
              <div class="mt-2">
                  © Copyright 2020 - {new Date().getFullYear()}. All Rights Reserved.
              </div>
  
              <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                  <a href="#" class="w-6 mx-1">
                      <i class="uil uil-facebook-f"></i>
                  </a>
                  <a href="#" class="w-6 mx-1">
                      <i class="uil uil-twitter-alt"></i>
                  </a>
                  <a href="#" class="w-6 mx-1">
                      <i class="uil uil-youtube"></i>
                  </a>
                  <a href="#" class="w-6 mx-1">
                      <i class="uil uil-linkedin"></i>
                  </a>
                  <a href="#" class="w-6 mx-1">
                      <i class="uil uil-instagram"></i>
                  </a>
              </div>
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