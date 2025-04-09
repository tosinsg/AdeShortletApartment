"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="https://v0-ade-shortlet-apartment-caslnr.vercel.app/" className="font-bold text-xl md:text-2xl text-black">
            Ade Shortlet
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="#gallery" className="text-sm font-medium text-black hover:text-gray-600">
            Gallery
          </Link>
          <Link href="#features" className="text-sm font-medium text-black hover:text-gray-600">
            Features
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b p-4 md:hidden shadow-md">
            <nav className="flex flex-col gap-2">
              <Link
                href="#gallery"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#booking"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link
                href="#location"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
