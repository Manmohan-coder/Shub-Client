

const Contact = () => {
    return (
        <section className="bg-pink-100 py-16">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-pink-600 mb-4">Get in Touch</h3>
                        <p className="text-gray-700 mb-2">📍 123 Gift Lane, Celebration City</p>
                        <p className="text-gray-700 mb-2">📞 +1 (234) 567-890</p>
                        <p className="text-gray-700 mb-2">✉️ support@giftify.com</p>
                        <p className="text-gray-700 mt-4">
                            Our team is always happy to help! Reach out with questions, feedback, or custom orders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
