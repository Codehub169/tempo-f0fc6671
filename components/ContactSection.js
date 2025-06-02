import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(result.message || 'Your message has been sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('An unexpected error occurred. Please try again later.');
    }
  };

  const inputClass = "w-full px-4 py-3 bg-hueneu-light-bg border border-hueneu-secondary rounded-md focus:ring-2 focus:ring-hueneu-accent focus:border-hueneu-accent outline-none transition-colors duration-200 placeholder-hueneu-primary/70 text-hueneu-dark-text";

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 bg-hueneu-light-bg flex flex-col justify-center items-center">
      <div className="container mx-auto max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-interactive relative"
        >
          <h2 className="text-3xl md:text-4xl font-secondary text-hueneu-dark-text text-center mb-8">Let's Work Together</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-hueneu-dark-text mb-1">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hueneu-dark-text mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-hueneu-dark-text mb-1">Subject</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Project Idea / Inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-hueneu-dark-text mb-1">Your Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} required className={`${inputClass} resize-none`} placeholder="Tell us about your story..."></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center px-8 py-3 bg-hueneu-accent text-white font-medium rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-hueneu-accent focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Let's design your story <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </div>
          </form>

          {feedbackMessage && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`mt-6 p-4 rounded-md text-sm flex items-center ${status === 'success' ? 'bg-hueneu-success/20 text-hueneu-success' : 'bg-hueneu-error/20 text-hueneu-error'}`}
            >
              {status === 'success' ? <CheckCircle2 size={20} className="mr-2" /> : <AlertCircle size={20} className="mr-2" />}
              {feedbackMessage}
            </motion.div>
          )}

          <div className="mt-12 text-center">
            <p className="text-hueneu-dark-text mb-2">Connect with us</p>
            <a 
              href="https://instagram.com/hueneu_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-hueneu-primary hover:text-hueneu-accent transition-colors duration-200 group"
            >
              <Instagram size={24} className="mr-2" /> 
              <span className="font-medium group-hover:underline">@hueneu_</span>
            </a>
          </div>
           <div className="mt-6 text-center text-xs text-hueneu-primary/80">
             <a href="#" className="hover:underline hover:text-hueneu-accent">View our Services Deck (PDF)</a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
