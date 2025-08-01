"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function CounterSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [continents, setContinents] = useState(0)
  const [countries, setCountries] = useState(0)
  const [years, setYears] = useState(0)
  const [clients, setClients] = useState(0)

  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true

      const continentsInterval = setInterval(() => {
        setContinents((prev) => {
          if (prev < 4) return prev + 1
          clearInterval(continentsInterval)
          return prev
        })
      }, 300)

      const countriesInterval = setInterval(() => {
        setCountries((prev) => {
          if (prev < 10) return prev + 1
          clearInterval(countriesInterval)
          return prev
        })
      }, 100)

      const yearsInterval = setInterval(() => {
        setYears((prev) => {
          if (prev < 10) return prev + 1
          clearInterval(yearsInterval)
          return prev
        })
      }, 100)

      const clientsInterval = setInterval(() => {
        setClients((prev) => {
          if (prev < 100) return prev + 5
          clearInterval(clientsInterval)
          return prev
        })
      }, 50)

      return () => {
        clearInterval(continentsInterval)
        clearInterval(countriesInterval)
        clearInterval(yearsInterval)
        clearInterval(clientsInterval)
      }
    }
  }, [inView])

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Continents */}
          <div className="teal-card p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{continents}</div>
            <p className="text-gray-600 font-medium">Continents</p>
          </div>

          {/* Countries */}
          <div className="purple-card p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{countries}+</div>
            <p className="text-gray-600 font-medium">Countries</p>
          </div>

          {/* Years */}
          <div className="magenta-card p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-magenta-600 mb-2">{years}+</div>
            <p className="text-gray-600 font-medium">Years of Experience</p>
          </div>

          {/* Clients */}
          <div className="orange-card p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{clients}+</div>
            <p className="text-gray-600 font-medium">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
