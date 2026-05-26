"use client"

import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // no-op: form can be wired to an API route later
    alert(`Thanks ${name || "there"}! (This is a demo submit)`)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-black text-white">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-white"
              placeholder="you@example.com"
              type="email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-white min-h-[120px]"
              placeholder="Say hi..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-block px-6 py-2 bg-white text-black rounded font-medium"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
