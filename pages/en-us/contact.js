import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from '../../components/meta'
import Navbar from '../../components/navbar'
import {
  langenus
} from '../../script/main'

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MY_FORM);
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div class="h-screen md:flex">
	        <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-sky-800 to-purple-700 justify-around items-center hidden">
		        <div>
              <h1 class="text-white font-bold text-4xl font-sans">Contact me</h1>
              <p class="text-white mt-1">I will respond in your email as soon as possible</p>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <form onSubmit={handleSubmit}>
                <h1 className='block md:hidden text-3xl font-semibold'>
                  Contact me
                </h1>
                <span className='block md:hidden text-sm mb-5'>
                  I will respond in your email as soon as possible
                </span>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-5">
                    <input class="pl-2 outline-none border-none focus:ring-white" type="email" name="email" id="email" placeholder="Email Address" />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <textarea class="pl-2 outline-none border-none focus:ring-white" name="message" id="message" placeholder="Message..." />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                </div>
                <button type="submit" class="block w-full bg-sky-500 hover:bg-sky-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" disabled={state.submitting}>Login</button>
            </form>
          </div>
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