// add input validation to form
//look into react-rainbow components
import React, { useState } from "react";


function ContactForm() {
  // Hook that'll manage the form data
  // clear the input fields on the component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const containerStyles = {
    maxWidth: 700,
  };

  //sync the internal state of the component formState with the user input from the DOM
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <form className="flex w-full space-x-3">
    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact me !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                    <input required type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input required type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                            <textarea required className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
  );
}

export default ContactForm;
