import { Header } from "@/components/header"
import { Gallery } from "@/components/gallery"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Gallery />
      <Features />
      <Footer />
    </main>
  )
}
