import { CheckCircle } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    'Chicks Supply',
    'Poultry Medicine',
    'Premium Feed',
    'Equipment & Training'
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="fade-in">
            <img
              src="/about/about2.png"
              alt="Farm"
              className="w-full rounded-2xl shadow-lg object-cover h-96 sm:h-80"
            />
          </div>

          {/* Right - Content */}
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-snf-gray-dark mb-4">
              About SNF
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SNF - Sandip Natural Farms is a leading provider of poultry and agricultural solutions. 
              With over a decade of experience, we deliver premium products and expert guidance to farmers across the region.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-snf-green flex-shrink-0" size={24} />
                  <span className="text-snf-gray-dark font-semibold">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="bg-snf-green hover:bg-snf-green-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
