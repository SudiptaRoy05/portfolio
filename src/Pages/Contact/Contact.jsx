import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
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
        <div className="flex items-center justify-center min-h-screen py-8" id='contact'>
            <div className="px-6 py-8 lg:py-12 w-full max-w-screen-xl bg-[#003C43] rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-10">
                        <span className="bg-[#E3FEF7] py-3 px-5 rounded-full shadow-md inline-block text-[#003C43]">Contact</span>
                    </h2>
                    <p className="text-xl text-[#E3FEF7]">I would love to hear from you! Whether you have a question, suggestion, or just want to connect, feel free to reach out. I am always happy to discuss new opportunities, collaborations, or anything else you’d like to chat about.</p>
                </div>

                <div className="lg:flex justify-between gap-8 lg:pl-32">
                    <div className="flex flex-col items-start text-white space-y-6 w-full lg:w-1/2 px-6 lg:px-8">
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-[#E3FEF7] text-2xl" />
                            <p className="text-lg">ballavesudipta@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-[#E3FEF7] text-2xl" />
                            <p className="text-lg">+8801580311924</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaWhatsapp className="text-[#E3FEF7] text-2xl" />
                            <p className="text-lg">+8801580311924</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#"><FaFacebook className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" /></a>
                            <a href="#"><FaLinkedin className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" /></a>
                            <a href="#"><FaGithub className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" /></a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                        <div className="bg-[#E3FEF7] p-6 lg:p-8 rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-[#003C43] font-semibold mb-2">Your Name</label>
                                    <input type="text" name="name" className="w-full px-4 py-2 rounded-lg border border-[#003C43] text-[#003C43]" value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-[#003C43] font-semibold mb-2">Your Email</label>
                                    <input type="email" name="email" className="w-full px-4 py-2 rounded-lg border border-[#003C43] text-[#003C43]" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-[#003C43] font-semibold mb-2">Your Message</label>
                                    <textarea name="message" className="w-full px-4 py-2 rounded-lg border border-[#003C43] text-[#003C43]" rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#003C43] text-[#E3FEF7] px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#E3FEF7] hover:text-[#003C43]" disabled={sending}>
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
