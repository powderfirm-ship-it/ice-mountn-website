'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openBooking } from "@/utils/housecall-pro";

const faqs = [
  {
    question: "How much does TV mounting cost in Los Angeles?",
    answer: "Our TV mounting services start at $149 for standard wall mounts up to 65\". Over-fireplace installations and in-wall cable concealment are priced separately. We offer free estimates and competitive pricing throughout Los Angeles."
  },
  {
    question: "Do you provide same-day TV mounting service?",
    answer: "Yes! We offer same-day TV mounting service throughout most of Los Angeles. Call us before 2 PM and we can often schedule your installation for the same day, subject to availability."
  },
  {
    question: "What's included with TV mounting service?",
    answer: "Every TV mounting service includes: wall mount hardware, professional installation, basic cable management, tilt adjustment, and safety testing. We bring all necessary tools and equipment to complete your installation."
  },
  {
    question: "Can you mount TVs above fireplaces safely?",
    answer: "Absolutely! We specialize in over-fireplace TV installations using heat-resistant mounts and proper clearances. We ensure your TV is safely positioned and protected from heat damage with pull-down bracket options available."
  },
  {
    question: "Do you hide cables and wires during installation?",
    answer: "Yes, we offer complete cable concealment services. This includes in-wall fishing for power and HDMI cables, installing new outlets behind your TV, and ensuring a completely clean, wire-free appearance."
  },
  {
    question: "What areas of Los Angeles do you serve?",
    answer: "We serve all of Greater Los Angeles including Beverly Hills, Santa Monica, Hollywood, Downtown LA, Pasadena, and the San Fernando Valley. If you're unsure about your area, give us a call to confirm service availability."
  },
  {
    question: "Is this renter-friendly? Will it damage my walls?",
    answer: "Absolutely! We specialize in renter-friendly TV mounting solutions that protect your security deposit. Our damage-free mounting options include removable systems, landlord-safe hardware, and techniques that leave no permanent marks on walls."
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes! All our TV mounting installations come with a 100% satisfaction guarantee and warranty on workmanship. We're licensed, insured, and stand behind every installation we complete."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our TV mounting and home theater services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly team is here to help. Get in touch for personalized answers
              and a free estimate for your TV mounting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(323) 863-8146"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Now: (323) 863-8146
              </a>
              <button
                onClick={openBooking}
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                aria-haspopup="dialog"
                aria-controls="hcp-booking"
                data-analytics="hcp-book"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
