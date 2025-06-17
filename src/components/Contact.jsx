import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iwz293w',
        'template_dfjh55h',
        form.current,
        'HPP30q12kz9C0blXi'
      )
      .then(
        () => {
          toast.success('Message sent successfully! 📤', { duration: 5000 });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message ❌', { duration: 7000 });
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen p-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-none dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 transition-all"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-gray-700 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-semibold text-gray-700 dark:text-gray-200"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
