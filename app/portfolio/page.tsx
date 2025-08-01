import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/port-5dny4Uj9wylp21RpCSCxBeWpl5A1qB.jpg"
            alt="Portfolio Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-300 mb-8">Showcasing Our Success Stories and Client Achievements</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/Ecommerce-TVf8QU2ClaKJv1HagmzsmgmyiMQU2H.jpg"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="teal-gradient-bg hover:bg-teal-500 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-teal-400">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600">
                  A comprehensive e-commerce solution for a global retail brand, featuring custom product management and
                  integrated payment systems.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/App-NqAM2cwkwkKtd6wB35kOCM65CMxqpb.jpg"
                  alt="Mobile Banking App"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="purple-gradient-bg hover:bg-purple-700 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-purple-600">
                <h3 className="text-xl font-bold mb-2">Mobile Banking App</h3>
                <p className="text-gray-600">
                  A secure and user-friendly mobile banking application with advanced features for account management
                  and transactions.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/HospitalManagement-keEhgFsRlTSeynY2BPxuH7SvrJCqcf.jpg"
                  alt="Healthcare Management System"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="magenta-gradient-bg hover:bg-magenta-700 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-magenta-600">
                <h3 className="text-xl font-bold mb-2">Healthcare Management System</h3>
                <p className="text-gray-600">
                  A comprehensive healthcare management solution for a leading hospital chain, streamlining patient care
                  and administrative processes.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/SupplyChain-SLp49gdooPILrmdnEBgwdbMpPPe8Dm.jpg"
                  alt="Supply Chain Optimization"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="teal-gradient-bg hover:bg-teal-500 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-teal-400">
                <h3 className="text-xl font-bold mb-2">Supply Chain Optimization</h3>
                <p className="text-gray-600">
                  A digital transformation initiative for a manufacturing company, optimizing their supply chain
                  operations and reducing costs.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Educational Platform"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="purple-gradient-bg hover:bg-purple-700 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-purple-600">
                <h3 className="text-xl font-bold mb-2">Educational Platform</h3>
                <p className="text-gray-600">
                  An interactive online learning platform for a leading educational institution, featuring course
                  management and student engagement tools.
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Real Estate Portal"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="magenta-gradient-bg hover:bg-magenta-700 text-white">View Project</Button>
                </div>
              </div>
              <div className="p-6 border-t-4 border-magenta-600">
                <h3 className="text-xl font-bold mb-2">Real Estate Portal</h3>
                <p className="text-gray-600">
                  A comprehensive real estate portal for property listings, featuring advanced search capabilities and
                  virtual property tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've had the privilege of working with some of the most respected organizations across various
              industries.
            </p>
          </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Client Logo 1 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>

            {/* Client Logo 2 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>

            {/* Client Logo 3 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>

            {/* Client Logo 4 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>

            {/* Client Logo 5 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>

            {/* Client Logo 6 */}
            <div className="flex items-center justify-center p-4">
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Client Logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 p-8 rounded-lg h-full flex flex-col">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 flex-grow">
                "We are amazed by how Innovators International transformed our website! Their creativity and attention
                to detail are unmatched. The team's dedication to customer satisfaction truly shines through."
              </p>
              <div>
                <p className="font-semibold">Sophie Thompson</p>
                {/* <p className="text-gray-400 text-sm">Marketing Director</p>*/}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 p-8 rounded-lg h-full flex flex-col">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 flex-grow">
                "Working with Innovators International was a game-changer for our business. The web design surpassed all
                our expectations, and their professionalism and communication made the entire process seamless."
              </p>
              <div>
                <p className="font-semibold">John Anderson</p>
                {/* <p className="text-gray-400 text-sm">CEO, Tech Solutions</p>*/}
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
