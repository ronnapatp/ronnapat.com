import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkywnyj");
  if (state.succeeded) {
    return <p>Thanks for contact!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="
        mt-1
        block
        w-full
        rounded-md
        dark:bg-slate-800
        border-gray-300
        shadow-sm
        focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50
        "
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <span>Message</span>
      <textarea
        id="message"
        name="message"
        className="                    mt-1
        block
        w-full
        rounded-md
        dark:bg-slate-800
        border-gray-300
        shadow-sm
        focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" className="w-full bg-sky-500 dark:bg-sky-400 dark:text-black rounded-md mt-5" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
