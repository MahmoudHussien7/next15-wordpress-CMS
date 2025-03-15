import Breadcrumbs from "@/Components/Breadcrumbs";
import Navbar from "@/Components/Navbar";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Breadcrumbs />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have questions or feedback? We&apos;d love to hear from you!
        </p>
        <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
