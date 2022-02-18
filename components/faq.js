import Container from "./container";
import { Collapse } from "@nextui-org/react";
import { useState } from "react";

const faq = [
  { id: "1", title: "who am i", description: "Hello my name is Ronnapat Srivoravilai and I am a student in Bangkok,Thailand. Learn more about me at about page!" },
  { id: "2", title: "Option 2", description: "Coming soon!" },
  { id: "3", title: "Option 3", description: "Coming soon!" },
  { id: "4", title: "s", description: "Coming soon!" },
  { id: "5", title: "Option 4", description: "Coming soon!" },
  { id: "6", title: "Option 5", description: "Coming soon!" },
];

export default function () {
  const [ search, setSearch ] = useState('')

  const filtersearch = faq.filter((faq) => {
    return faq.title.includes(search);
  })

  return (
    <div className="bg-white dark:bg-slate-700 text-black dark:text-white py-24">
      <h1 className="text-center text-5xl mb-4">
        Ronnapat Srivoravilai FAQ
        <p className="text-xl">
          If you have more question you can contact me at{" "}
          <a href="/contact">Contact page</a>
          <Container>
          <input 
          type='text' 
          placeholder="Search... " 
          value={search} 
          onChange={(event)=> {setSearch(event.target.value)}}
          className="mt-3 rounded-md block shadow-sm border-gray-300 dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 w-full focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 mb-2"
          />
          </Container>
        </p>
      </h1>
      <Container>
        <Collapse.Group>
          {filtersearch.map((faq) => (
            <Collapse
              key={faq.id}
              title={
                <h1 className="text-black dark:text-white text-3xl">
                  {faq.title}
                </h1>
              }
            >
              {faq.description}
            </Collapse>
          ))}
        </Collapse.Group>
      </Container>
    </div>
  );
}
