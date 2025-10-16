import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - The Mental Health Program</title>
        <meta name="description" content="Terms of Service for The Mental Health Program - Legal terms and conditions for using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="bg-white text-dark-900 min-h-screen">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold text-dark-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using The Mental Health Program website and services (operated through our RedCap Media division), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Mental Health Program, through its RedCap Media division, provides educational content, documentaries, and media resources focused on mental health awareness and psychoeducation. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Educational videos and documentaries produced by RedCap Media</li>
                  <li>Newsletters and written content</li>
                  <li>School presentations and workshops</li>
                  <li>Online resources and materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">3. Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily access our materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">4. User Conduct</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                  <li>Transmit any harmful, threatening, or inappropriate content</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, materials, and intellectual property on our website, including but not limited to text, graphics, logos, images, audio clips, video, and software, are the property of The Mental Health Program (holding company) and RedCap Media (operating division) or their content suppliers and are protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">6. Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, The Mental Health Program:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> Our content is for educational purposes only and should not be considered as professional medical, psychological, or therapeutic advice. Always consult with qualified healthcare professionals for medical or mental health concerns.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">7. Limitations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In no event shall The Mental Health Program or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">8. Accuracy of Materials</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">9. Links to Other Websites</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to third-party websites that are not owned or controlled by The Mental Health Program. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">10. Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">11. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms shall be interpreted and governed by the laws of the United Kingdom, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-dark-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
