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
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="w-full">
            <iframe
              src="https://114b9353.sibforms.com/serve/MUIFAEVHG6iE8KaKadtgydYP8wxVRBcykjcOutn1dfXRhzubUUEM6MKpLz5ahnglwFphriUSkhcmw-s2hoOluUfqo2PdTa50mKxJsAO1GQb1uvefOa2wqEjxk1fatRjPhstvLsaso6uCKuxTTTVoS6aNPYymj1zEnf7WDcWry9YdffEi1G0JmcKphEDrcj0V5a0P-PBVIHVIkPEL"
              width="640"
              height="705"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              className="w-full mx-auto"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

