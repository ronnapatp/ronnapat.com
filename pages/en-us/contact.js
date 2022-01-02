import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from '../../components/meta'
import Navbar from '../../components/navbar'
import {
  langenus
} from '../../script/languages'

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MY_FORM);
  if (state.succeeded) {
      return (
        <>
          <div className='my-20 md:my-52'>
                <h1 className='text-center text-4xl md:text-6xl font-semibold'>
                  Contact me
                  <p className='text-xl md:text-2xl font-normal'>
                    I will respond in your email as soon as possible
                  </p>
                </h1>
                <h1 className='text-center text-4xl md:text-6xl text-sky-600 mt-5'>
                  Thanks for sending me message!
                </h1>
                {/* <div className='mt-10 text-center'>
                  <p className='text-xl'>
                    Follow me
                  </p>
                  <a href='https://facebook.com/pieronnapatp'>
                    <i class="ri-facebook-circle-fill text-3xl"></i>
                  </a>
                  <a href='https://twitter.com/ronnapatp'>
                    <i class="ri-twitter-fill text-3xl"></i>
                  </a>
                  <a href='https://github.com/ronnapatp'>
                    <i class="ri-github-fill text-3xl"></i>
                  </a>
                </div> */}
          </div>
        </>
        )
  }
  return (
    <>
          <div className='max-w-md mx-auto my-20 md:my-52'>
            <form onSubmit={handleSubmit} >
                <h1 className='text-center text-4xl md:text-6xl font-semibold'>
                  Contact me
                  <p className='text-xl md:text-2xl font-normal'>
                    I will respond in your email as soon as possible
                  </p>
                </h1>
                  <div className='mt-5'>
                    <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-md md:text-xl">
                      Email Address
                    </p>
                    <input className="rounded-md border-gray-400 focus:border-sky-500 w-full mb-2" type="email" name="email" id="email" placeholder="Email Address" required />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      />
                  </div>
                  <div>
                    <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-md md:text-xl">
                      Message
                    </p>
                    <textarea class="rounded-md border-gray-400 w-full" name="message" id="message" placeholder="Hello Ronnapat..." required />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      />
                  </div>
                  {/* <div className='mt-5'>
                    <input type='checkbox' className='mr-2 rounded text-sky-400 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50' required />
                    You need to agree with Privacy & Policy first
                  </div> */}
                <button type="submit" class="block w-full bg-sky-500 hover:bg-sky-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" disabled={state.submitting}>Submit</button>
            </form>
          </div>
        </>
  );
}
function App() {
  return (
      <>
      <Head title='Contact' image='/meta.png' />
      <Navbar lantoshow={langenus} pathname='en-us' />
      <ContactForm />
      </>
  );
}
export default App;