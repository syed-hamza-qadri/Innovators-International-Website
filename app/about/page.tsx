import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CounterSection from "@/components/counter-section"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/about-gUvfS0xQKjGsU3MVPiuBa6IUwO0yW5.jpg"
            alt="About Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Innovators International</h1>
            <p className="text-lg text-gray-300 mb-8">Empowering Global Transformation Through Innovation</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Innovators International is a leading global technology and consulting firm dedicated to driving
                innovation and inspiring change across industries. With a presence in the United Kingdom, United Arab
                Emirates, United States of America, and Pakistan, we empower businesses through our expertise in IT
                Solutions, E-Commerce, business consulting, and business process outsourcing, enabling them to navigate
                growth, streamline operations, and shape the future.
              </p>
              <p className="text-gray-700 mb-6">
                Established in 2014, Innovators International offers comprehensive IT solutions, encompassing the
                development of mobile apps and websites, as well as consulting services for establishing IT solutions.
                Our expert E-Commerce division specializes in developing e-commerce websites, identifying products,
                creating private label products, branding, marketing, and social media management, as well as
                establishing a complete end-to-end online presence, including order fulfillment, customer service, and
                supply chain management.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/logo%20main-Yga3gGkbrJvHcGJkB5oceLQNqRcOvA.jpg"
                alt="About Innovators International"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mission and Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Driving Innovation, Inspiring Change</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-teal-400">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Our Mission</h3>
              <p className="text-gray-700">
                To be the trusted partner that empowers organizations to embrace digital transformation, streamline
                operations, and achieve sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in innovative technology solutions and strategic consulting, enabling our
                clients to thrive in an ever-evolving business landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client First Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Putting Clients First</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our client-centric approach ensures we deliver exceptional value and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tailored Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-teal-400">
              <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                We take the time to deeply understand your unique needs and challenges, crafting bespoke solutions that
                deliver maximum value.
              </p>
            </div>

            {/* Collaborative Partnerships */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-purple-600">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Partnerships</h3>
              <p className="text-gray-600">
                Our consultants work hand-in-hand with your teams, fostering a shared sense of ownership and commitment
                to success.
              </p>
            </div>

            {/* Exceptional Service */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-4 border-magenta-600">
              <div className="h-16 w-16 bg-magenta-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-magenta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                We are dedicated to exceeding your expectations, providing responsive support and ongoing strategic
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Reach, Local Impact</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our international presence allows us to serve clients worldwide while understanding local market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* UK */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">United Kingdom</h3>
              <p className="text-gray-300 mb-4">
                Headquartered in London, our UK office serves as the global center of our operations since 2014.
              </p>
            </div>

            {/* Pakistan */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Pakistan</h3>
              <p className="text-gray-300 mb-4">
                Our Karachi-based team delivers world-class services and innovative solutions since 2022.
              </p>
            </div>

            {/* UAE */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">United Arab Emirates</h3>
              <p className="text-gray-300 mb-4">
                Our Dubai office caters to clients across the Middle East and North Africa region since 2024.
              </p>
            </div>

            {/* US */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">United States</h3>
              <p className="text-gray-300 mb-4">
                Our US presence will be in Dallas in Q2 2025. It will help connect us to the world's technology hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

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
