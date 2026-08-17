"use client";

import React, { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { LuArrowUp, LuSend } from 'react-icons/lu';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z
    .string()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),
  message: z.string().min(1, 'Message cannot be empty.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Footer = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{
    [K in keyof ContactFormData]?: string;
  }>({});
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-12 text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="grid grid-cols-1 gap-8 border-b border-zinc-800 pb-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              Let's build something <span className="text-zinc-300">together.</span>
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Have a project in mind, a job opportunity, or just want to say
              hello? Drop a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-all duration-200 focus:bg-zinc-900 focus:outline-none ${errors.name
                    ? 'border-rose-500/50 focus:border-rose-500'
                    : 'border-zinc-800 focus:border-zinc-500'
                    }`}
                />
                {errors.name && (
                  <span className="px-1 text-xs text-rose-500">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-all duration-200 focus:bg-zinc-900 focus:outline-none ${errors.email
                    ? 'border-rose-500/50 focus:border-rose-500'
                    : 'border-zinc-800 focus:border-zinc-500'
                    }`}
                />
                {errors.email && (
                  <span className="px-1 text-xs text-rose-500">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-lg border bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-all duration-200 focus:bg-zinc-900 focus:outline-none ${errors.message
                  ? 'border-rose-500/50 focus:border-rose-500'
                  : 'border-zinc-800 focus:border-zinc-500'
                  }`}
              />
              {errors.message && (
                <span className="px-1 text-xs text-rose-500">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                {status === 'success' && (
                  <p className="text-xs font-medium text-zinc-300">
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs font-medium text-rose-500">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="ml-auto flex items-center justify-center space-x-2 rounded-lg bg-white px-5 py-2 text-sm font-medium text-black shadow-lg shadow-black/20 transition-all duration-200 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <LuSend size={14} />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-2 text-center text-sm sm:flex-row sm:gap-6 sm:text-left">
            <div className="select-none font-bold tracking-wide text-white">
              Faisal Abbas<span className="text-zinc-300">.</span>
            </div>
            <span className="hidden text-zinc-700 sm:inline">|</span>
            <p className="text-xs text-zinc-600">&copy; 2026 All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/kaze1-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
            >
              <BsGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/faisal-abbas-codes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
            >
              <BsLinkedin size={16} />
            </a>

            <a
              href="mailto:kaze0001111@gmail.com"
              aria-label="Email"
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
            >
              <HiMail size={16} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
          <p className="select-none text-xs text-zinc-600">
            Built with Next.js & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <LuArrowUp
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;