import { SiteLayout } from "@/components/site-layout";
import Link from "next/link";

export default function TrustAndSupportPage() {
  return (
    <SiteLayout>
      <main className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trust & Support Fee
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Trust & Support Fees ensure a smooth and reliable experience for every client. This charge covers the cost of providing comprehensive insurance, 24/7 customer support, and ongoing quality assurance checks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It also enables us to maintain high safety standards and invest in training to keep our service top-notch. Your peace of mind and satisfaction are our top priorities.
                </p>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                What This Fee Covers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Comprehensive Insurance</h3>
                    <p className="text-sm text-gray-600">Full coverage for your property and our technicians</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">24/7 Customer Support</h3>
                    <p className="text-sm text-gray-600">Round-the-clock assistance when you need us</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Quality Assurance</h3>
                    <p className="text-sm text-gray-600">Ongoing checks to maintain service excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Safety Standards</h3>
                    <p className="text-sm text-gray-600">Investment in training and safety protocols</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Overview */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Service Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ice Mount'n provides professional TV mounting and home theater installation in Los Angeles, focused on safe installation, clean cable management,
                and a reliable finish that looks great in everyday use. Every job includes a quick on-site assessment to confirm wall
                type and mounting hardware, tidy routing of power and A/V lines, and a final level/safety check. If your setup needs
                extras—like soundbar brackets, in-wall routing, or device concealment—we'll explain options and pricing before we start.
                Our goal is a crisp, secure installation that fits your space, preserves manufacturer guidelines, and avoids damage to
                walls or equipment. Customers choose us for same-day availability in much of Los Angeles, insured technicians, and clear,
                upfront communication from booking to cleanup. If you're comparing services or planning a new TV layout, this page covers
                what's included and common questions so you can schedule with confidence.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about our Trust & Support fee?
              </p>
              <a 
                href="tel:(323) 863-8146" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Call (323) 863-8146
              </a>
              <p className="text-sm text-gray-500 mt-4">
                For full service terms, see our <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">Terms & Conditions</Link>.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                For details on how we handle your information, see our <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
