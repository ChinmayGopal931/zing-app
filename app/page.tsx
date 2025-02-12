"use client"
import Image from "next/image"
import Link from "next/link"
import SlidingBanner from "./components/Banner"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <SlidingBanner />

      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-100">
        <Link href="/" className="w-32 transition-transform hover:scale-105 duration-300">
          <Image
            src="/zing.svg"
            alt="ZING"
            width={128}
            height={48}
            priority
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/contact" 
            className="px-6 py-2 text-gray-600 hover:text-black transition-colors duration-300 rounded-full hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Tobacco Free
                  <br />
                  Nicotine Pouches
                  <br />
                  for India
                </h1>
                <p className="text-lg text-gray-600 mt-6 max-w-md">
                  Experience the future of nicotine consumption with our premium, tobacco-free pouches.
                </p>
                {/* Add Waitlist Button */}
                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                  >
                    <span>Join the Waitlist</span>
                    <svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-delayed">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="ZING Mint Nicotine Pouches"
                width={600}
                height={400}
                className="w-full max-w-lg drop-shadow-2xl"
                priority
              />
              <div className="absolute -top-4 -right-1 md:-top-6 md:-right-0">
                <Image
                  src="/comingsoon.svg"
                  alt="Coming Soon"
                  width={120}
                  height={1200}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain animate-bounce"
                />
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* E-commerce Platforms */}
        <div className="w-full relative mt-16 bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Coming Soon To Your Favorite Platforms
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="relative group animate-fade-in"
                  >
                    <div className="h-16 relative transition-all duration-300 transform hover:scale-105">
                      <Image
                        src={platform.logo}
                        alt={platform.name}
                        width={platform.name === "Swiggy Instamart" ? 180 : 140}
                        height={64}
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        style={{
                          maxHeight: platform.name === "TATA 1mg" ? "40px" : "64px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-500">
            © 2025 ZING. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  )
}

const platforms = [
  {
    name: "Swiggy Instamart",
    logo: "/swiggyinstamart.svg",
  },
  {
    name: "Blinkit",
    logo: "/blinkit.svg",
  },
  {
    name: "Zepto",
    logo: "/zepto.svg",
  },
  {
    name: "Amazon.in",
    logo: "/azn.svg",
  },
  {
    name: "TATA 1mg",
    logo: "/tata.svg",
  },
  {
    name: "Flipkart",
    logo: "/flipkart.svg",
  },
];
