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

      // Optimize animation by using fewer intervals and faster completion
      const animationDuration = 1000 // 1 second total animation
      const continentsTarget = 4
      const countriesTarget = 10
      const yearsTarget = 10
      const clientsTarget = 100

      const steps = 10 // Fewer steps for smoother but less CPU-intensive animation
      const interval = animationDuration / steps

      const continentsStep = continentsTarget / steps
      const countriesStep = countriesTarget / steps
      const yearsStep = yearsTarget / steps
      const clientsStep = clientsTarget / steps

      let currentStep = 0

      const animationInterval = setInterval(() => {
        currentStep++

        setContinents(Math.min(Math.round(continentsStep * currentStep), continentsTarget))
        setCountries(Math.min(Math.round(countriesStep * currentStep), countriesTarget))
        setYears(Math.min(Math.round(yearsStep * currentStep), yearsTarget))
        setClients(Math.min(Math.round(clientsStep * currentStep), clientsTarget))

        if (currentStep >= steps) {
          clearInterval(animationInterval)
          // Ensure final values are exact
          setContinents(continentsTarget)
          setCountries(countriesTarget)
          setYears(yearsTarget)
          setClients(clientsTarget)
        }
      }, interval)

      return () => clearInterval(animationInterval)
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
