import { SiteLayout } from "@/components/site-layout";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-600 text-lg mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    Ice Mount'n collects information you provide directly to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Request a quote or consultation</li>
                    <li>Schedule a service appointment</li>
                    <li>Contact us via phone, email, or our website</li>
                    <li>Use our online booking system</li>
                  </ul>
                  <p className="text-gray-700">
                    This may include your name, phone number, email address, home address,
                    service preferences, and details about your TV mounting or home theater needs.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide TV mounting and home theater installation services</li>
                    <li>Schedule and confirm service appointments</li>
                    <li>Communicate with you about your service requests</li>
                    <li>Send service reminders and follow-up communications</li>
                    <li>Improve our services and customer experience</li>
                    <li>Process payments and manage billing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or rent your personal information to third parties.
                    We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>With service providers who help us operate our business (scheduling software, payment processing)</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses the following third-party services:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Housecall Pro:</strong> For scheduling and lead management</li>
                    <li><strong>Google Analytics:</strong> For website analytics (when implemented)</li>
                    <li><strong>Google Maps:</strong> For location services</li>
                  </ul>
                  <p className="text-gray-700">
                    These services have their own privacy policies that govern their use of your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However,
                    no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access the personal information we have about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
                  <p className="text-gray-700">
                    Our website may use cookies to enhance your browsing experience and analyze
                    website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Ice Mount'n</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      Phone: <a href="tel:(323) 863-8146" className="text-blue-600 hover:text-blue-700">(323) 863-8146</a>
                    </p>
                    <p className="text-gray-700">
                      Email: <a href="mailto:hello@icemountn.com" className="text-blue-600 hover:text-blue-700">hello@icemountn.com</a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any
                    material changes by posting the new Privacy Policy on this page and updating
                    the "Last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
