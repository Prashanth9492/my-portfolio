import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">Resume</p>
        <h1 className="mt-4 text-4xl font-semibold">A concise view of experience.</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          This route can be expanded into a dedicated resume page, PDF download, or detailed timeline.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-md border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-black">
          Back home
        </Link>
      </div>
    </main>
  )
}