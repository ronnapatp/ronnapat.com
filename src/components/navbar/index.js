import React, { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
    MenuIcon,
  } from "@heroicons/react/outline";

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
export default function () {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    let themeimage = "ri-computer-line";
    let themeactive =
      "text-sky-700 dark:text-sky-300 hover:text-sky-500 dark:hover:text-sky-200 text-xl";
    let themesd =
      "text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 text-xl";
    let themesl =
      "text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 text-xl";
    let themess =
      "text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 text-xl";
    if (theme == "dark") {
      themeimage = "ri-moon-clear-line";
      themesd = themeactive;
    } else if (theme == "light") {
      themeimage = "ri-sun-line";
      themesl = themeactive;
    } else {
      themeimage = "ri-computer-line";
      themess = themeactive;
    }
  return(
  <nav className="container px-5 max-w-3xl mx-auto xl:max-w-2xl flex items-center justify-between w-full py-6 my-0 sticky-nav md:mt-4">
    <div className="flex">
        <a href="/" className="flex p-3 text-gray-700 transition hover:text-gray-900">
          <h1>Ronnapat</h1>
        </a>
        <a href="/about" className="p-3 text-gray-500 transition hover:text-gray-600">
          About
        </a>
        <a href="/blog" className="p-3 text-gray-500 transition hover:text-gray-600">Blog</a>
        <a href="/contact" className="p-3 text-gray-500 transition hover:text-gray-600">Contact</a>
    </div>
    <div className="w-4 mr-3 text-sm">
      <div className="-mr-2 -my-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center p-2">
                    <i
                      className={`${themeimage} text-xl dark:text-gray-400 dark:hover:text-gray-200`}
                    ></i>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => setTheme("light")}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            <i class="ri-sun-line text-md mr-2"></i>
                            Light
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => setTheme("dark")}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            <i class="ri-moon-clear-line text-md mr-2"></i>
                            Dark
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => setTheme("system")}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            <i class="ri-computer-line text-md mr-2"></i>
                            System
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
    </div>
  </nav>
  )
}