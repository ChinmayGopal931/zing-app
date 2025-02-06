"use client"
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ZING Nicotine Pouches",
          description: "Premium tobacco-free nicotine pouches for the Indian market",
          brand: {
            "@type": "Brand",
            name: "ZING"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/ComingSoon",
            price: "0",
            priceCurrency: "INR"
          },
          category: "Health & Beauty > Health Care > Smoking Cessation",
          audience: {
            "@type": "Audience",
            audienceType: "Adult Smokers seeking alternatives"
          }
        })
      }}
    />
  )
}