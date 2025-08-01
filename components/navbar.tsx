"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm py-3 shadow-md" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="https://innovatorsinternationalcopy.vercel.app/logo.png"
                alt="Innovators International"
                width={400}
                height={100}
                className="w-auto h-[60px] md:h-[80px] object-contain -ml-3"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-teal-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-teal-400 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-teal-400 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-teal-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/locations" className="text-white hover:text-teal-400 transition-colors">
              Locations
            </Link>
            <Link href="/contact" className="text-white hover:text-teal-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:text-teal-400 hover:bg-transparent">
              <Link href="tel:+971508946620" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +971 50 894 6620
              </Link>
            </Button>
            <Button asChild className="teal-gradient-bg hover:bg-teal-500 text-white">
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://innovatorsinternationalcopy.vercel.app/logo.png"
                      alt="Innovators International"
                      width={280}
                      height={70}
                      className="w-auto h-[50px] object-contain -ml-3"
                    />
                  </Link>
                </div>

                <nav className="flex flex-col space-y-6 mb-8">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/locations"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    Locations
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium hover:text-teal-400 transition-colors"
                    onClick={closeDrawer}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto space-y-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-white teal-gradient-bg hover:bg-teal-500"
                    onClick={closeDrawer}
                  >
                    <Link href="tel:+971508946620" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +971 50 894 6620
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full teal-gradient-bg hover:bg-teal-500 text-white"
                    onClick={closeDrawer}
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
