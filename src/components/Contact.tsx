import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Inquiries
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Get In Touch
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Contact me for software developer internships, research assistant opportunities, or technical community collaborations.
          </p>
        </div>

        {/* Contact layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Info and Google map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Contact Information
              </h4>
              <p className="text-xs sm:text-sm text-slate-505 dark:text-slate-400 leading-relaxed font-sans">
                Feel free to directly message me through the recruiter lead sheet, drop an email, or connect via developer tools.
              </p>

              {/* Detail list item */}
              <div className="space-y-4 pt-2">
                <a
                  id="contact-mail-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex gap-4 items-center group p-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-slate-50/50 dark:hover:bg-white/10 border border-slate-205/65 dark:border-white/10 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-650 dark:text-blue-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-mono tracking-widest text-slate-400">Official email</span>
                    <span className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-205 group-hover:text-blue-500 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex gap-4 items-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-205/65 dark:border-white/10 select-none">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-mono tracking-widest text-slate-400">Postal Hub</span>
                    <span className="block text-xs sm:text-sm font-semibold text-slate-850 dark:text-slate-205">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map integration */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-sm h-56 relative bg-slate-100 dark:bg-slate-900">
              <iframe
                title="Lucknow Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.331718873499!2d80.99974235471464!3d26.861111166708684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2df1b91cfb5%3A0xeebd92f15e8bad9!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale dark:invert opacity-80"
              />
            </div>
          </div>

          {/* Right Panel: Recruiter lead form */}
          <div className="lg:col-span-7 bg-white/50 dark:bg-white/5 p-8 sm:p-10 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm">
            <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Recruiter Inquiry Form
            </h4>

            {isSubmitted ? (
               <div id="contact-success-notification" className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                  <CheckCircle size={36} />
                </div>
                <h5 className="font-display text-base font-bold text-slate-900 dark:text-white">Inquiry Sent Successfully</h5>
                <p className="text-xs text-slate-505 dark:text-slate-400 max-w-sm leading-relaxed">
                  Thank you for connecting! Jaya will respond to your invitation at the provided email address within 24 hours.
                </p>
              </div>
            ) : (
              <form id="lead-recruiter-form" onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Your Name *</label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full p-3 font-sans text-xs sm:text-sm rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full p-3 font-sans text-xs sm:text-sm rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Subject</label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunities / Collaboration"
                    className="w-full p-3 font-sans text-xs sm:text-sm rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Message *</label>
                  <textarea
                    id="message-input"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jaya, we reviewed your projects and would love to invite you to our next interview sprint..."
                    className="w-full p-3 font-sans text-xs sm:text-sm rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 disabled:opacity-50 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer text-xs uppercase tracking-wider font-mono"
                >
                  {isSending ? (
                    <span>Delivering Lead...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
