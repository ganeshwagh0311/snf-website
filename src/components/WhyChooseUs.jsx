import { Award, Users, BookOpen, Shield, Zap, Package } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products meet international quality standards'
    },
    {
      icon: Users,
      title: 'Expert Veterinary Support',
      description: 'Professional guidance from experienced veterinarians'
    },
    {
      icon: BookOpen,
      title: 'Live Training',
      description: 'Regular training sessions for farmers'
    },
    {
      icon: Shield,
      title: '100% Branch Backup',
      description: 'Reliable support across all branches'
    },
    {
      icon: Zap,
      title: 'Direct Company Supply',
      description: 'Direct supply from our farms'
    },
    {
      icon: Package,
      title: 'Modern Equipment',
      description: 'Latest farming equipment and technology'
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-snf-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-snf-gray-dark mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions for all your poultry and agriculture needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="fade-in bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-snf-green/10 rounded-lg mb-4 group-hover:bg-snf-green/20 transition-colors">
                  <Icon className="text-snf-green" size={28} />
                </div>
                <h3 className="text-xl font-bold text-snf-gray-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
