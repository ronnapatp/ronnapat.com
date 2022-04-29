import React, { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Container from "../layout/container";

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
  if (theme == "dark") {
    themeimage = "ri-moon-clear-line";
  } else if (theme == "light") {
    themeimage = "ri-sun-line";
  } else {
    themeimage = "ri-computer-line";
  }
  return (
    <div className="bg-white dark:bg-slate-700">
      <Container>
        <nav className="flex items-center justify-between w-full py-6 my-0">
          <div className="flex">
            <img src="/logo-no-bg.png" className="w-9 h-9" />
            <a
              href="/"
              className="flex p-3 text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white font-bold"
            >
              <h1>Ronnapat</h1>
            </a>
            <span className="hidden sm:block py-3">
              <a
                href="/about"
                className="p-3 text-gray-500 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              >
                About
              </a>
              <a
                href="/blog"
                className="p-3 text-gray-500 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="p-3 text-gray-500 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              >
                Contact
              </a>
            </span>
          </div>
          <div className="text-sm">
            <div className=" -my-2 flex">
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
              <Menu
                as="div"
                className="relative inline-block text-left sm:hidden"
              >
                <div>
                  <Menu.Button className="inline-flex justify-center p-2">
                    <i
                      className={`ri-menu-3-line text-xl dark:text-gray-400 dark:hover:text-gray-200`}
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
                            href="/about"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            About
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/blog"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            Blog
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/contact"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-200",
                              "block px-4 py-1 text-md select-none cursor-pointer"
                            )}
                          >
                            Contact
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
      </Container>
    </div>
  );
}
