import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Warning Banner */}
      <div className="bg-black text-white text-xs py-1 px-4 text-center">
        <p>
          This product is intended for Nicotine Replacement Therapy, please use responsibly! • Zing contains nicotine
          which is addictive • Do not promote Zing to minors
        </p>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="w-24">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZING-DsZzAniMrP90Lkw9ELAjHX5kL9ZEpt.svg"
            alt="ZING"
            width={96}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
          <Link href="/shop" className="hover:text-gray-600">
            Shop
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-12 p-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 p-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight ml-4">
                Tobacco Free
                <br />
                Nicotine Pouches
                <br />
                for India
              </h1>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2063.jpg-XKv1CmnObEg5eUkLa3jphrW4R1G2xm.jpeg"
                alt="ZING Mint Nicotine Pouches"
                width={600}
                height={400}
                className="w-full max-w-md"
                priority
              />
            </div>
          </div>
        </div>

        {/* E-commerce Platforms */}
        <div className="w-full flex-1 relative mt-16">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(180deg, #D9FFA4 0%, #B8FAFF 50%, #EAAAFF 100%)",
            }}
          />
          <div className="relative">
            <p className="text-center text-xl mb-8 mt-5">Soon available on</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {platforms.map((platform) => (
                <div 
                  key={platform.name} 
                  className="h-12 relative transition-all hover:opacity-80"
                >
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={platform.name}
                    width={platform.name === "Swiggy Instamart" ? 180 : 140}
                    height={48}
                    className="object-contain"
                    style={{
                      maxHeight: platform.name === "TATA 1mg" ? "32px" : "48px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const platforms = [
  {
    name: "Swiggy Instamart",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swiggyinstamart%201-8qgXmOyyVhIYkoELayYGfjbHGDvN8m.png",
  },
  {
    name: "Blinkit",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blinkit%201-l0KVRmHz10xK1m56spaQp1ijP6Uieo.svg",
  },
  {
    name: "Zepto",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zepto_Logo%201-BADksE9cBxHucJ6TWdc3Uc8clZriwM.svg",
  },
  {
    name: "Amazon.in",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20(1)-JPBz6Km6lN1qaPAZiAGRBzGhO5rXXv.svg",
  },
  {
    name: "TATA 1mg",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TATA_1mg_Logo%201-RmM3nyGCp9K5c09T20UWBN4RBjxzlu.svg",
  },
]

