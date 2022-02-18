import Container from "./container";
import { Collapse } from "@nextui-org/react";
import { useState } from "react";

const faq = [
  { id: "1", title: "Option 1", description: "Coming soon!" },
  { id: "2", title: "Option 1", description: "Coming soon!" },
  { id: "3", title: "Option 1", description: "Coming soon!" },
  { id: "4", title: "s", description: "Coming soon!" },
  { id: "5", title: "Option 1", description: "Coming soon!" },
  { id: "6", title: "Option 1", description: "Coming soon!" },
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
          <input type='text' placeholder="text" value={search} onChange={(event)=> {setSearch(event.target.value)}} />
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
