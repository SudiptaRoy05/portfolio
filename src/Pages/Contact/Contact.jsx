import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [sending, setSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.send(
            "service_czajhzf",
            "template_n4whx4b",
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            "2jmcpUPs05wAE61tN"
        ).then(
            () => {
                setSuccessMessage('Your message has been sent successfully!');
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' });
                setSending(false);
            },
            () => {
                setErrorMessage('Failed to send your message. Please try again later.');
                setSuccessMessage('');
                setSending(false);
            }
        );
    };

    return (
        <section
            className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4"
            id="contact"
        >
            <div className="w-full max-w-screen-xl px-6 lg:py-12">
                {/* Header */}
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                        Get in <span className="text-teal-400 font-semibold">Touch</span>
                    </h2>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                        Let’s Connect
                    </h1>
                    <p className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
                        I’m excited to hear from you! Whether it’s about a project, collaboration, or just a friendly chat, feel free to reach out. Let’s create something amazing together.
                    </p>
                </div>

                {/* Content */}
                <div className="lg:flex justify-between gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2 px-6 lg:px-8">
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-[#77B0AA] text-2xl" />
                            <p className="text-lg text-[#E3FEF7]">ballavesudipta@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-[#77B0AA] text-2xl" />
                            <p className="text-lg text-[#E3FEF7]">+8801580311924</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaWhatsapp className="text-[#77B0AA] text-2xl" />
                            <p className="text-lg text-[#E3FEF7]">+8801580311924</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" aria-label="Facebook">
                                <FaFacebook className="text-[#E3FEF7] text-2xl hover:text-teal-400 transition duration-300" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedin className="text-[#E3FEF7] text-2xl hover:text-teal-400 transition duration-300" />
                            </a>
                            <a href="#" aria-label="GitHub">
                                <FaGithub className="text-[#E3FEF7] text-2xl hover:text-teal-400 transition duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0">
                        <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                        <div className="relative bg-gradient-to-br from-[#77B0AA] to-[#003C43] p-6 lg:p-8 rounded-xl shadow-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-[#E3FEF7] font-semibold mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-2 rounded-lg border border-[#E3FEF7] bg-[#002B2E] text-[#E3FEF7] focus:outline-none focus:ring-2 focus:ring-teal-400"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-[#E3FEF7] font-semibold mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 rounded-lg border border-[#E3FEF7] bg-[#002B2E] text-[#E3FEF7] focus:outline-none focus:ring-2 focus:ring-teal-400"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-[#E3FEF7] font-semibold mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        className="w-full px-4 py-2 rounded-lg border border-[#E3FEF7] bg-[#002B2E] text-[#E3FEF7] focus:outline-none focus:ring-2 focus:ring-teal-400"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#77B0AA] text-[#003C43] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition hover:scale-105 disabled:opacity-50"
                                    disabled={sending}
                                >
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                            {successMessage && <p className="mt-4 text-teal-400">{successMessage}</p>}
                            {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}