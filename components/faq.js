import Container from './container'
import { Collapse } from '@nextui-org/react';

const faq = [
  { id: '1', title: 'Option 1', description: 'Coming soon!'},
  { id: '2', title: 'Option 1', description: 'Coming soon!'},
  { id: '3', title: 'Option 1', description: 'Coming soon!'},
  { id: '4', title: 'Option 1', description: 'Coming soon!'},
  { id: '5', title: 'Option 1', description: 'Coming soon!'},
]

export default function (){
    return(
        <div className="bg-white dark:bg-slate-700 text-black dark:text-white py-24">
          <h1 className='text-center text-5xl mb-4'>
            Ronnapat Srivoravilai FAQ
            <p className='text-xl'>
              If you have more question you can contact me at <a href='/contact'>Contact page</a>
            </p>
          </h1>
          <Container>
            <Collapse.Group>
            {faq.map((faq) => (
              <Collapse key={faq.id} title={<h1 className='text-black dark:text-white text-3xl'>{faq.title}</h1>} >
                {faq.description}
              </Collapse>
            ))}
            </Collapse.Group>
          </Container>
        </div>
    )
}