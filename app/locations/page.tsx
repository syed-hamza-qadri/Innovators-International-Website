import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/location-dnM1MaxMWi7cUNGqtyUXh6aueF81O0.jpg"
            alt="Locations Hero"
            fill
            className="object-cover brightness-50"
            priority
            quality={80}
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Global Locations</h1>
            <p className="text-lg text-gray-300 mb-8">Serving Clients Worldwide with Local Expertise</p>
          </div>
        </div>
      </section>

      {/* Global Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden mb-16">
            <Image
              src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/logo%20main-Yga3gGkbrJvHcGJkB5oceLQNqRcOvA.jpg"
              alt="Global Locations Map"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
              className="object-cover object-center"
              loading="eager"
              quality={80}
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Reach, Local Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our international presence allows us to serve clients worldwide while understanding local market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* UK Office */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-teal-400">
              <div className="relative h-64">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/UK_Office-yo1xWNXMxBKPlhp9PJPQcDnZzCHNyq.jpg"
                  alt="London Office"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">United Kingdom</h3>
                <p className="text-gray-600 mb-4">
                  Headquartered in London, our UK office serves as the global center of our operations since 2014.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700">123 Business Avenue, London, UK</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-gray-700">+44 203 034 0024</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-700">uk@innovatorsint.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UAE Office */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-600">
              <div className="relative h-64">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/UAE_Office-b39cCYmd9ThiQOGcmNH9qlGmfEF7go.jpg"
                  alt="Dubai Office"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">United Arab Emirates</h3>
                <p className="text-gray-600 mb-4">
                  Our Dubai office caters to clients across the Middle East and North Africa region since 2024.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-purple-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700">Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-purple-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-gray-700">+971 50 894 6620</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-purple-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-700">info@innovatorsint.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pakistan Office */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-magenta-600">
              <div className="relative h-64">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/Pakistan_Office-8WxtB21uXAAEsc9TE2VWxA0E0eFcgA.jpg"
                  alt="Karachi Office"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  className="object-cover object-top"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pakistan</h3>
                <p className="text-gray-600 mb-4">
                  Our Karachi-based team delivers world-class services and innovative solutions since 2022.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-magenta-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700">456 Tech Park, Karachi, Pakistan</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-magenta-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-gray-700">+92 300 123 4567</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-magenta-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-700">pk@innovatorsint.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* US Office */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-orange-400">
              <div className="relative h-64">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/US_Office-3x6YhHP3JmeEzmVpCHJe0NhFoyCihm.jpg"
                  alt="Dallas Office"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">United States (Coming Soon)</h3>
                <p className="text-gray-600 mb-4">
                  Our US presence will be in Dallas in Q2 2025. It will help connect us to the world's technology hubs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-orange-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700">789 Innovation Drive, Dallas, TX, USA</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-orange-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-gray-700">Coming Soon</p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-orange-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-700">us@innovatorsint.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-400">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
            Connect with us today to explore how our innovative solutions can help your business thrive in the digital
            age.
          </p>
          <Button
            asChild
            className="purple-gradient-bg hover:bg-purple-700 text-white font-medium px-8 py-6 rounded-full"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
