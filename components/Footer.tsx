"use client"
import React, { useState } from 'react'
import { LuArrowUp, LuGithub, LuLinkedin, LuMail, LuSend } from 'react-icons/lu'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
  message: z.string().min(1, 'Message cannot be empty.'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Footer = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [K in keyof ContactFormData]?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof ContactFormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        formattedErrors[fieldName] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#0E1117] text-zinc-500 py-12 px-4 border-t border-violet-950/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-violet-950/20">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Let's build something <span className="text-violet-500">together.</span>
            </h2>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Have a project in mind, a job opportunity, or just want to say hello? Drop a message and I'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-[#13111F]/30 text-zinc-200 placeholder-zinc-600 focus:bg-[#13111F]/60 focus:outline-none transition-all duration-200 text-sm ${
                    errors.name 
                      ? 'border-rose-500/50 focus:border-rose-500' 
                      : 'border-violet-950/40 focus:border-violet-500/50'
                  }`}
                />
                {errors.name && <span className="text-xs text-rose-500 px-1">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-[#13111F]/30 text-zinc-200 placeholder-zinc-600 focus:bg-[#13111F]/60 focus:outline-none transition-all duration-200 text-sm ${
                    errors.email 
                      ? 'border-rose-500/50 focus:border-rose-500' 
                      : 'border-violet-950/40 focus:border-violet-500/50'
                  }`}
                />
                {errors.email && <span className="text-xs text-rose-500 px-1">{errors.email}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border bg-[#13111F]/30 text-zinc-200 placeholder-zinc-600 focus:bg-[#13111F]/60 focus:outline-none transition-all duration-200 text-sm resize-none ${
                  errors.message 
                    ? 'border-rose-500/50 focus:border-rose-500' 
                    : 'border-violet-950/40 focus:border-violet-500/50'
                }`}
              />
              {errors.message && <span className="text-xs text-rose-500 px-1">{errors.message}</span>}
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                {status === 'success' && (
                  <p className="text-xs text-emerald-500 font-medium">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-rose-500 font-medium">Something went wrong. Please try again.</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center space-x-2 px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-violet-950/20 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <LuSend size={14} />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-center sm:text-left">
            <div className="font-bold text-white tracking-wide select-none">
              Faisal Abbas<span className="text-violet-500">.</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <p className="text-xs text-zinc-600">
              &copy; 2026 All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kaze1-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuLinkedin size={16} />
            </a>
            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-zinc-500 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200"
            >
              <LuMail size={16} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-violet-950/20 pt-4">
          <p className="text-xs text-zinc-600 select-none">
            Built with Next.js & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-violet-950/40 bg-[#13111F]/30 text-violet-400 hover:text-violet-300 hover:border-violet-500/20 hover:bg-[#13111F]/60 transition-all duration-200 group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <LuArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer