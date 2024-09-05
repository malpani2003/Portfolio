import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      setLoading(true);
      setTimeout(() => {
        
        // Clear form fields
        setEmail("");
        setMessage("");
        setLoading(false);
        alert("Message sent successfully!");
      }, 2000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Contact Me
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Feel free to reach out to me with any questions or inquiries. I look
          forward to connecting with you!
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
