import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    'Programming languages': [
      {
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        id: 2,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      },
    ],
  })

  return (
    <div className="w-full max-w-screen-xl px-2 py-16 sm:px-0">
    <span className='text-3xl md:text-6xl mb-5 font-semibold'>
        My skill
    </span>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-sky-900/20 rounded-xl mt-6">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-sky-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-sky-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-sky-900 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 bg-gray-200 rounded">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3',
                'focus:outline-none '
              )}
            >
              <ul>
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100 inline-flex"
                  >
                    <img src={item.image} className='w-24 h-24' />


                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
