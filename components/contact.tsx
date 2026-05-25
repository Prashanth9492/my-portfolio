'use client'

import Script from 'next/script'

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen relative flex flex-col items-center justify-center bg-[#050505] pt-20 pb-32">
      <div 
        className="visme_d" 
        data-title="Guide Download 2" 
        data-url="g0oqnrv0-untitled-project" 
        data-domain="forms" 
        data-full-page="false" 
        data-min-height="600px" 
        data-form-id="181325"
      ></div>
      <Script src="https://static-bundles.visme.co/forms/vismeforms-embed.js" strategy="lazyOnload" />
    </section>
  )
}
