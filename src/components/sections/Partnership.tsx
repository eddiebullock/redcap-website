import React from 'react'

interface Guest {
  name: string
  title: string
  institution?: string
}

const guests: Guest[] = [
  {
    name: 'Prof Sir Simon Baron-Cohen',
    title: 'Professor of Developmental Psychopathology',
    institution: 'University of Cambridge'
  },
  {
    name: 'Prof Robert Plomin',
    title: 'Professor of Behavioural Genetics',
    institution: 'King\'s College London'
  },
  {
    name: 'Dr Lucy Cheke',
    title: 'Senior Lecturer in Psychology',
    institution: 'University of Cambridge'
  },
  {
    name: 'Prof Edmund Sonuga-Barke',
    title: 'Professor of Developmental Psychology',
    institution: 'King\'s College London'
  },
  {
    name: 'Prof Martin Gleave OC',
    title: 'Professor of Urologic Sciences',
    institution: 'University of British Columbia'
  }
]

const Partnership: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="partnership" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
              Seeking Media Partnership
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              We have a fully-produced podcast ready to partner with the right media outlet. All the work is done—we're offering a turnkey opportunity to bring cutting-edge science to wider audiences.
            </p>
          </div>

          {/* Production Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-dark-900 text-center mb-8">
              In Conversation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/Eddie%20%26%20Edmund.jpg" 
                  alt="Eddie in conversation with Prof Edmund Sonuga-Barke" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/Eddie%20and%20Lucy%20Wide.jpg" 
                  alt="Eddie in conversation with Dr Lucy Cheke" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/Eddie%20%26%20Robert.jpg" 
                  alt="Eddie in conversation with Prof Robert Plomin" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300" />
              </div>
            </div>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto leading-relaxed mt-8">
              Our podcast features in-depth conversations with world-leading academics, translating complex research into accessible stories. We've already interviewed some of the most respected voices in science—the content is produced, edited, and ready to go. This is a ready-made opportunity for media outlets looking to add high-quality science content to their portfolio.
            </p>
          </div>

          {/* Featured Guests Section */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold text-dark-900 text-center mb-3">
              Featured Guests
            </h3>
            <p className="text-center text-dark-600 mb-6 max-w-2xl mx-auto text-sm">
              We've had the privilege of interviewing some of the world's most influential academics, bringing their groundbreaking research to life through engaging conversations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guests.map((guest, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="text-lg font-serif font-semibold text-dark-900 mb-1">
                    {guest.name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-1 text-sm">
                    {guest.title}
                  </p>
                  {guest.institution && (
                    <p className="text-dark-500 text-xs">
                      {guest.institution}
                    </p>
                  )}
                </div>
              ))}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <p className="text-lg font-serif font-semibold text-dark-900 text-center">
                  Plus Additional Distinguished Guests
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-serif font-semibold text-dark-900 mb-4">
              Interested in Partnering With Us?
            </h3>
            <button
              onClick={scrollToContact}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Partnership

