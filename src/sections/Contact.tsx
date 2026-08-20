import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Reveal'

const EMAIL = 'okellorighan3@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Hi Righan,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    )
    const subject = encodeURIComponent(form.subject || `Project inquiry from ${form.name}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value })

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          subtitle="I'd love to hear from you. Reach out for projects, collaborations, or opportunities — I reply within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-blue-500/40"
              >
                <span className="rounded-xl bg-blue-500/15 p-3 text-blue-400">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                  <span className="font-medium text-slate-200 group-hover:text-blue-300">{EMAIL}</span>
                </span>
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-emerald-500/40"
              >
                <span className="rounded-xl bg-emerald-500/15 p-3 text-emerald-400">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">WhatsApp</span>
                  <span className="font-medium text-slate-200 group-hover:text-emerald-300">Chat with me directly</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="rounded-xl bg-violet-500/15 p-3 text-violet-400">
                  <Clock size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">Response time</span>
                  <span className="font-medium text-slate-200">Within 24 hours</span>
                </span>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/defna2018', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/righan-okello-874072405/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/am_alphii/', label: 'Instagram' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-blue-500/40 hover:text-blue-300"
                  >
                    <s.icon size={16} /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Your name</label>
                  <input
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Your email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Subject</label>
                <input
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="e.g. New website for my business"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500"
                />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell me about your project, goals and timeline..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-blue-600/40"
              >
                <Send size={18} /> Send Message
              </button>
              {sent && (
                <p className="mt-3 text-center text-sm text-emerald-400">
                  Your email app should open with the message ready to send.
                </p>
              )}
              <p className="mt-4 text-center text-xs text-slate-500">
                The form opens your email client with everything pre-filled — no data is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
