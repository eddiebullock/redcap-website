export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/WhatsApp%20Image%202025-08-31%20at%2015.58.38.jpeg"
          alt="Background - Work with us"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
            Work With Us
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Ready to make science accessible? Get in touch to discuss your project.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-md text-center">
            <h3 className="text-2xl font-serif font-semibold text-dark-900 mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p>
                <a
                  href="tel:07527966143"
                  className="text-xl text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                >
                  07527966143
                </a>
              </p>
              <p>
                <a
                  href="mailto:eddie@mentalhealthprogram.co.uk"
                  className="text-xl text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                >
                  eddie@mentalhealthprogram.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
