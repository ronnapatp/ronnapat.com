import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Head from "@/components/meta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { langenus } from "@/script/languages";
import Script from "next/script";

function ContactForm() {
  if (typeof window !== "undefined") {
    window.onload = function () {
      var el = document.getElementById("g-recaptcha-response");
      if (el) {
        el.setAttribute("required", "required");
      }
    };
  }
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MY_FORM);
  if (state.succeeded) {
    return (
      <>
        <div className="my-20 md:my-52">
          <h1 className="text-center text-4xl md:text-6xl font-semibold">
            Contact me
            <p className="text-xl md:text-2xl font-normal">
              I will respond in your email as soon as possible
            </p>
          </h1>
          <h1 className="text-center text-4xl md:text-5xl text-sky-600 dark:text-sky-200 mt-5">
            Thanks for sending me message!
          </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="max-w-md mx-auto py-2 my-20 px-2 md:my-40">
        <Script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></Script>
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-4xl font-semibold text-black dark:text-white">
            Contact me
            <p className="text-xl mt-2 font-normal text-gray-500 dark:text-gray-300">
              I will respond in your email as soon as possible
            </p>
          </h1>
          <div className="mt-5">
            <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-md dark:text-white">
              Name
            </p>
            <input
              className="rounded-md block shadow-sm border-gray-300 dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 w-full focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 mb-2"
              type="text"
              name="name"
              id="name"
              placeholder="John Dany"
              required
            />
            <ValidationError prefix="Name" field="Name" errors={state.errors} />
          </div>
          <div>
            <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-md dark:text-white">
              Email Address
            </p>
            <input
              className="rounded-md block shadow-sm border-gray-300 w-full dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="me@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-md dark:text-white">
              Message
            </p>
            <textarea
              className="rounded-md block shadow-sm border-gray-300 w-full dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
              name="message"
              id="message"
              placeholder="Hello Ronnapat..."
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div
            className="g-recaptcha"
            data-sitekey="6LcDDgMeAAAAABTnPxOBNNpe3MQNnaoWIcF8GokR"
          ></div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="rounded text-sky-500 focus:border-sky-300 mr-1"
              required
            />
            By click submit you're agree with{" "}
            <a
              href="/en-us/terms"
              className="underline hover:text-gray-600 dark:hover:text-gray-300"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/en-us/privacy"
              className="underline hover:text-gray-600 dark:hover:text-gray-300"
            >
              Privacy
            </a>
            .
          </div>
          <button
            type="submit"
            className="block w-full bg-sky-500 hover:bg-sky-400 mt-4 py-2 rounded-2xl focus:border-sky-300 focus:ring focus:ring-sky-200 text-white font-semibold mb-2"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
function App() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <Head title="Contact" image="/meta.png" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/contact" />
      <ContactForm />
      <Footer paht="en-us" />
    </div>
  );
}
export default App;
