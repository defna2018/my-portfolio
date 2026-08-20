import { Quote, Star } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Reveal'

const testimonials = [
  {
    quote:
      'Righan rebuilt our company website from scratch and the difference is night and day — faster, sharper, and our clients keep complimenting it.',
    name: 'Project Client',
    role: 'Intex Construction',
  },
  {
    quote:
      'He codes and designs, which meant no gaps between how the product looks and how it works. Communication was excellent throughout.',
    name: 'Startup Founder',
    role: 'Voice of Power',
  },
  {
    quote:
      'Delivered our dashboard ahead of schedule with real-time features we thought were out of budget. Already planning the next project together.',
    name: 'Product Lead',
    role: 'Analytics Dashboard',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Feedback from people I've built with."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-violet-500/40">
                <Quote size={28} className="mb-4 text-violet-400" />
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
