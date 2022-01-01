import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from '../../components/meta'

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MY_FORM);
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='text-2xl'>
        Email Address
      </label><br />
      <input
        id="email"
        type="email" 
        name="email"
        className="
          w-[30%]
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        "
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><br />
      <label className='text-2xl'>
          Message
      </label><br />
      <textarea
        id="message"
        name="message"
        className="
        w-[30%]
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        "
        rows="3"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /><br />
      <button type="submit" className='text-2xl py-3 px-3 bg-sky-500' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
      <>
      <Head title='Contact' image='/favicon.ico' />
        <div className='text-center mt-20 text-4xl md:text-7xl'>
            Contact me
            <ContactForm />
        </div>
      </>
  );
}
export default App;