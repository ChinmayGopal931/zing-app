'use client'

import ContactForm from "../components/contact"



export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Warning Banner */}
      <div className="bg-black text-white text-xs py-1 px-4 text-center">
        <p>
          This product is intended for Nicotine Replacement Therapy, please use responsibly! • Zing contains nicotine
          which is addictive • Do not promote Zing to minors
        </p>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>
    </div>
  )
}