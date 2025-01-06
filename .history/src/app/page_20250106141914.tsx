import Image from 'next/image'
import ReservationForm from '@/components/ReservationForm'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Reborn Suadiye Restaurant"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Reborn Suadiye</h1>
            <p className="text-xl md:text-2xl">Experience the finest dining in Suadiye</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600">
                Welcome to Reborn Suadiye, where culinary excellence meets warm hospitality. 
                Our restaurant offers a unique dining experience with a perfect blend of 
                traditional and modern cuisine.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about-image.jpg"
                alt="About Reborn Suadiye"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          <Menu />
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Make a Reservation</h2>
          <ReservationForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600 mb-4">Suadiye, Istanbul</p>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600">Phone: [Your Phone Number]</p>
              <p className="text-gray-600">Email: [Your Email]</p>
              <div className="mt-6">
                <a 
                  href="https://instagram.com/reborn.suadiye" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
            <div className="h-[400px] relative">
              {/* Add Google Maps embed here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1234567890123!2d29.0876543210987!3d40.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE1LjYiTiAyOcKwMDUnMTAuMiJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add Google Reviews component here */}
          </div>
        </div>
      </section>
    </div>
  )
}
