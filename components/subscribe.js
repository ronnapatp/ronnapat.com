import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
export default function () {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_MY_SUB_FORM);
    if (state.succeeded) {
        return (
        <div class="w-full bg-white dark:bg-slate-800 px-5 py-16 md:py-24 text-gray-800 dark:text-gray-50 font-light">
            <div class="w-full max-w-6xl mx-auto pb-5">
                <div class="-mx-3 md:flex items-center">
                    <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                        <h1 class="text-4xl md:text-6xl font-bold mb-5 leading-tight">Get Update <br /> From us</h1>
                        <h3 class="text-gray-600 dark:text-gray-400 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
                        <div>
                            <span class="inline-block w-40 h-1 rounded-full bg-sky-500 dark:text-sky-300"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-sky-500 dark:text-sky-300 ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-sky-500 dark:text-sky-300 ml-1"></span>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <h1 className='text-4xl'>
                            You are Subscribe
                            <p className='text-sm mt-2'>
                                We will send you an email when we have an update.
                            </p>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    return (
            <div class="w-full bg-white dark:bg-slate-800 px-5 py-16 md:py-24 text-gray-800 dark:text-gray-50 font-light">
                <div class="w-full max-w-6xl mx-auto pb-5">
                    <div class="-mx-3 md:flex items-center">
                        <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                            <h1 class="text-4xl md:text-6xl font-bold mb-5 leading-tight">Get Update <br /> From us</h1>
                            <h3 class="text-gray-600 dark:text-gray-400 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
                            <div>
                                <span class="inline-block w-40 h-1 rounded-full bg-sky-500 dark:text-sky-300"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-sky-500 dark:text-sky-300 ml-1"></span>
                                <span class="inline-block w-1 h-1 rounded-full bg-sky-500 dark:text-sky-300 ml-1"></span>
                            </div>
                        </div>
                        <div class="px-3 md:w-1/3">
                            <form onSubmit={handleSubmit} >
                                    <input id='email' type="email" name='email' class="pr-3 py-2 rounded-md block shadow-sm border-gray-300 w-full dark:bg-slate-600 dark:text-white dark:border-sky-400 dark:placeholder-gray-400 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 mb-2" placeholder="me@domain.com" required />
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <button class="block w-full bg-sky-500 hover:bg-sky-400 focus:bg-sky-300 transition-colors text-white rounded-lg px-3 py-2 font-semibold" type='submit' disabled={state.submitting}>Subscribe now.</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}