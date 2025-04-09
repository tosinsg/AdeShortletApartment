import { Wifi, Tv, Wind, Utensils, Car, Music } from "lucide-react"

const features = [
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the apartment",
  },
  {
    icon: <Tv className="h-6 w-6" />,
    title: "Smart TV",
    description: "Enjoy your favorite shows on our large smart TV",
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Air Conditioning",
    description: "Stay cool with air conditioning in every room",
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "Fully Equipped Kitchen",
    description: "Modern kitchen with all necessary appliances",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Parking Space",
    description: "Convenient parking available for guests",
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Event-Ready",
    description: "Perfect space for hosting small indoor events",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Apartment Features</h2>
          <p className="text-gray-600 mt-2">Everything you need for a comfortable stay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-gray-100 p-3 rounded-full w-fit mb-4 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
