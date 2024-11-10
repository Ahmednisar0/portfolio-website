// components/Contact.js

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData); // Log form data, can be replaced with an API call
        alert('Form submitted!'); // You can replace this with your API request
    };

    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

                {/* Message above the form */}
                <p className="text-center text-lg mb-8 text-gray-700">
                    You can contact me directly through my phone number at <strong>+923187724180</strong> or via email at <strong>aaza60232@gmail.com</strong>.
                </p>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Contact Number Input */}
                    <div>
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Contact Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
