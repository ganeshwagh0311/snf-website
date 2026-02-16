import { Instagram, Youtube, Facebook, Users } from 'lucide-react'

export default function SocialMedia() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-snf-gray-dark mb-4">
            Follow Us On Social Media
          </h2>
          <p className="text-gray-600">
            Stay updated with our latest news and updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram */}
          <div className="fade-in bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <Instagram size={32} />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">@snfarms</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} />
              <span className="text-lg font-semibold">24.5K followers</span>
            </div>
            <p className="text-white/90">Follow us for daily farming tips and product updates</p>
          </div>

          {/* YouTube */}
          <div className="fade-in bg-red-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <Youtube size={32} />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">SNF Channel</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">YouTube</h3>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} />
              <span className="text-lg font-semibold">45.2K subscribers</span>
            </div>
            <p className="text-white/90">Watch tutorials and training videos</p>
          </div>

          {/* Facebook */}
          <div className="fade-in bg-blue-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <Facebook size={32} />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">SNF Farms</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Facebook</h3>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} />
              <span className="text-lg font-semibold">32.8K followers</span>
            </div>
            <p className="text-white/90">Join our community and share experiences</p>
          </div>
        </div>

        {/* Embedded Video */}
        <div className="mt-12 fade-in">
          <h3 className="text-2xl font-bold text-snf-gray-dark mb-6 text-center">Featured Video</h3>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="SNF Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
