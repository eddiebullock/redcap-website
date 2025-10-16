import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Mental Health Program</title>
        <meta name="description" content="Privacy Policy for The Mental Health Program - How we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="bg-white text-dark-900 min-h-screen">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold text-dark-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Mental Health Program ("we," "our," or "us") is the holding company that operates RedCap Media, our documentary content production arm. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-dark-900 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Professional information (job title, organization)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark-900 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you about our programs and content</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send newsletters and educational content (with your consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> eddie@mentalhealthprogram.co.uk</p>
                  <p className="text-gray-700"><strong>Organization:</strong> The Mental Health Program (Holding Company)</p>
                  <p className="text-gray-700"><strong>Operating Division:</strong> RedCap Media (Documentary Content Production)</p>
                </div>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
