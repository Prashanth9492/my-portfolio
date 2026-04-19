import Contact from '@/components/contact'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">Contact</p>
          <Link href="/" className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            Back home
          </Link>
        </div>
        <Contact />
      </div>
    </main>
  )
}