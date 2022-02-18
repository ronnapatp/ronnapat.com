import Container from './container'
import { Collapse } from '@nextui-org/react';

export default function (){
    return(
        <div className="bg-white dark:bg-slate-700 text-black dark:text-white py-24">
          <h1 className='text-center text-5xl'>
            Ronnapat Srivoravilai FAQ
          </h1>
          <Container>
            <Collapse.Group>
              <Collapse title={<h1 className='text-black dark:text-white text-3xl'>Option 1</h1>} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Collapse>
              <Collapse title={<h1 className='text-black dark:text-white text-3xl'>Option 1</h1>} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Collapse>
              <Collapse title={<h1 className='text-black dark:text-white text-3xl'>Option 1</h1>} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Collapse>
            </Collapse.Group>
          </Container>
        </div>
    )
}