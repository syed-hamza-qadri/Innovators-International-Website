export default function FeaturedLogos() {
  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white font-medium mb-6 md:mb-0">Featured In</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center">
              <span className="text-white font-serif text-xl">Forbes</span>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center">
              <span className="text-white font-serif text-xl">Inc.</span>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center">
              <span className="text-white font-serif text-xl">Forbes</span>
            </div>
            <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center">
              <span className="text-white font-serif text-xl">Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
