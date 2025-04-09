import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ade Shortlet Apartments</h3>
            <p className="text-gray-300 mb-4">
              Luxury and comfort in the heart of Lagos. Perfect for short stays and indoor events.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="https://v0-ade-shortlet-apartment-caslnr.vercel.app/#booking" className="text-gray-300 hover:text-white">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="https://v0-ade-shortlet-apartment-caslnr.vercel.app/#location" className="text-gray-300 hover:text-white">
                  Location
                </Link>
              </li>
              <li>
                <Link href="https://v0-ade-shortlet-apartment-caslnr.vercel.app/#contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>No 10a olufunmilola okikiolu str off toyin, Lagos, Nigeria</li>
              <li>Phone: 08058781774, 09056035383, 08133459000</li>
              <li>Email: tj_balogun212@yahoo.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Ade Shortlet Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
