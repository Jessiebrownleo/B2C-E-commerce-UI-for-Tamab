import React from 'react';
import { ShieldCheckIcon, TruckIcon, UsersIcon } from 'lucide-react';
const AboutUs = () => {
  return <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Tamab</h1>
          <p className="text-xl text-gray-300">
            Your trusted partner in construction materials since 2010
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Tamab has grown from a small local supplier in
              Phnom Penh to one of Cambodia's leading construction materials
              providers. Our commitment to quality, reliability, and customer
              service has earned us the trust of contractors, homeowners, and
              DIY enthusiasts across the country.
            </p>
            <p className="text-gray-600">
              We believe in providing not just products, but complete solutions
              for all construction needs. Our team of experts is always ready to
              assist you in finding the right materials for your project.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-600">
                  We source our products from trusted manufacturers and conduct
                  rigorous quality checks.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <TruckIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Our efficient logistics network ensures timely delivery of
                  your orders.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <UsersIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Our knowledgeable team is always ready to help you with
                  product selection and technical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="CEO" className="w-48 h-48 rounded-full mx-auto object-cover" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Sopheak Chheng
              </h3>
              <p className="text-amber-600 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Leading Tamab's vision and strategy with over 15 years of
                industry experience.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="COO" className="w-48 h-48 rounded-full mx-auto object-cover" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Channary Sok
              </h3>
              <p className="text-amber-600 mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Overseeing daily operations and ensuring excellent service
                delivery.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-4">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Technical Director" className="w-48 h-48 rounded-full mx-auto object-cover" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Vuthy Tep</h3>
              <p className="text-amber-600 mb-2">Technical Director</p>
              <p className="text-gray-600 text-sm">
                Ensuring product quality and technical excellence across all
                operations.
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mb-4">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Sales Director" className="w-48 h-48 rounded-full mx-auto object-cover" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Virak Meas</h3>
              <p className="text-amber-600 mb-2">Sales Director</p>
              <p className="text-gray-600 text-sm">
                Driving business growth and managing key client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutUs;