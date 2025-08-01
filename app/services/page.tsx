import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/services-blixcwLOcry8GYLaCvyDBcFK2WCJL9.jpg"
            alt="Contact Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 mb-8">Comprehensive Solutions to Drive Your Business Forward</p>
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section id="it-solutions" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">IT Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive IT solutions are designed to help businesses leverage technology for growth and
                efficiency. From custom application development to digital transformation initiatives, we provide
                end-to-end services tailored to your specific needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Custom Apps</h3>
                    <p className="text-gray-600">
                      Tailored mobile and web applications that optimize business processes and enhance user
                      experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Website Development</h3>
                    <p className="text-gray-600">
                      Expertly crafted websites that showcase your brand, engage your audience, and drive growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">E-commerce Integration</h3>
                    <p className="text-gray-600">
                      Seamless integration with e-commerce platforms like Shopify, Magento, and WooCommerce.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Digital Transformation</h3>
                    <p className="text-gray-600">
                      Innovative solutions that modernize your operations and position your business for long-term
                      success.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border-l-4 border-teal-400 shadow-lg">
              <Image
                src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/IT_Solutions_ServicesPage-pGGNFMylyWqr94Tj5Dqr3x7HradkGe.jpg"
                alt="IT Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Section */}
      <section id="ecommerce" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden border-l-4 border-purple-600 shadow-lg">
              <Image
                src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/Ecommerce-TVf8QU2ClaKJv1HagmzsmgmyiMQU2H.jpg"
                alt="E-Commerce Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">E-Commerce</h2>
              <p className="text-gray-700 mb-6">
                Our eCommerce solutions empower businesses to build and scale their online presence. From website
                development and product sourcing to order fulfillment, vendor coordination, client management, and
                marketing, we offer end-to-end support to drive your eCommerce success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Online Presence</h3>
                    <p className="text-gray-600">
                      We design and develop eCommerce websites and establish integration with storefronts on Amazon,
                      Walmart, and eBay, enabling clients to expand their reach across top online marketplaces and
                      maximize their business opportunities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Product Development</h3>
                    <p className="text-gray-600">
                      We identify high-potential products poised for market success, giving you a competitive edge by
                      selling what consumers will demand next. Additionally, we help you develop and launch your
                      private-label products, creating opportunities to establish and grow your unique brand.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">SEO Optimization</h3>
                    <p className="text-gray-600">
                      Enhance your online presence with our expert SEO optimization services. We enhance your search
                      rankings, drive organic traffic, and maximize conversions with data-driven strategies. Stay ahead
                      of the competition with our cutting-edge SEO techniques.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Product Sourcing and Procurement</h3>
                    <p className="text-gray-600">
                      Find the right products and reliable suppliers with our expert sourcing and procurement solutions.
                      We streamline vendor management, negotiate the best deals, and ensure a seamless supply chain.
                      Maximize efficiency and profitability with our end-to-end procurement support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Back-Office Management</h3>
                    <p className="text-gray-600">
                      Optimize your operations with our expert back-office management solutions. From inventory tracking
                      and order processing to customer support and financial management, we handle the behind-the-scenes
                      work so you can focus on growth. Streamline your workflows and enhance efficiency with our
                      comprehensive back-office support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Brand & Social Media Management</h3>
                    <p className="text-gray-600">
                      Effective product launch, promotions, branding, and comprehensive social media planning and
                      execution. Drive sales and brand awareness with our robust product marketing and social media
                      management solutions. We craft compelling campaigns, engage your audience, and optimize
                      multi-channel strategies to maximize reach and conversions. Elevate your brand’s presence and turn
                      followers into loyal customers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Consulting Section */}
      <section id="consulting" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Business Consulting</h2>
              <p className="text-gray-700 mb-6">
                Transform your business with our expert consulting services designed to drive growth, efficiency, and
                innovation. We help organizations navigate challenges and seize opportunities through strategic
                planning, process optimization, change management, and business process outsourcing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Planning</h3>
                    <p className="text-gray-600">
                      We craft data-driven strategies to help businesses define goals, identify opportunities, and build
                      a roadmap for sustainable success.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Process Optimization</h3>
                    <p className="text-gray-600">
                      Our experts streamline workflows, eliminate inefficiencies, and implement automation to enhance
                      productivity and reduce costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Change Management</h3>
                    <p className="text-gray-600">
                      We help organizations navigate transitions smoothly, ensuring minimal disruption, faster adoption,
                      and a culture of continuous improvement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Business Process Outsourcing (BPO)</h3>
                    <p className="text-gray-600">
                      Outsource non-core tasks with our cost-effective BPO solutions, allowing you to focus on growth
                      while we handle operations seamlessly. Our BPO services provide cost-effective and scalable
                      solutions for back-office operations, customer support, finance, HR, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border-l-4 border-magenta-600 shadow-lg">
              <Image
                src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/Business_Consluting_ServicesPage-qZKfJii3jUV9il1JjWbJXRE823GmKS.jpg"
                alt="Business Consulting"
                fill
                className="object-cover"
              />
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
