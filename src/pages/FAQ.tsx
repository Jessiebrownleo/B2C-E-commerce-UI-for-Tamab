import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import Card from '../components/ui/Card';
const FAQ = () => {
  const faqs = [{
    question: "What's your delivery policy?",
    answer: 'We offer free delivery on orders over $500. For orders under $500, a standard delivery fee of $25 applies. Express delivery is available for $35.'
  }, {
    question: 'How can I track my order?',
    answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or through the shipping carrier, s, website, : ., ',:"
  }, {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase for unused items in their original packaging. Some restrictions apply to custom orders and bulk materials.'
  }, {
    question: 'Do you offer bulk pricing?',
    answer: 'Yes, we offer special pricing for bulk orders. Please contact our sales team for a custom quote.'
  }, {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, Bakong, PayWay, and cash on delivery (COD) for eligible orders.'
  }, {
    question: 'How do I cancel or modify my order?',
    answer: 'You can cancel or modify your order within 1 hour of placing it. Please contact our customer service team for assistance.'
  }];
  return <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <Card key={index} className="mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            </Card>)}
        </div>
        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <a href="mailto:support@tamab.com" className="text-amber-600 hover:text-amber-700 font-medium">
            Contact Support
          </a>
        </div>
      </div>
    </div>;
};
export default FAQ;