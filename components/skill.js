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
      {
          id: 3,
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
          id: 4,
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
      },
      {
          id: 5,
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
      },
      {
          id: 6,
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
      }
    ],
    'Framework': [
        {
            id: 1,
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            id: 2,
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
        },
        {
            id: 3,
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
        },
        {
            id: 4,
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
        }
    ],
    'Programming tools': [
      {
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        id: 2,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg',
      },
      {
        id: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' 
      },
      {
        id: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      },
      {
        id: 5,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg'
      },
      {
        id: 6,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        id: 7,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      }
    ],
    Other: [
      {
        id: 1,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      },
      {
        id: 2,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
      },
      {
        id: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
      }
    ],
  })

  return (
    <div className="w-full max-w-screen-xl px-2 py-16 sm:px-0">
    <span className='text-3xl md:text-6xl mb-5 font-semibold'>
        My skill
    </span>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-sky-500/20 rounded-xl mt-6">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-sky-700 rounded-lg',
                  'focus:outline-none ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-sky-900 hover:bg-white/[0.20] hover:text-sky-700'
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
