import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, ShieldCheckIcon, CreditCardIcon, HeadphonesIcon, ArrowRightIcon, StarIcon, ChevronRightIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProductCard from '../components/products/ProductCard';
const Home = () => {
  // Sample data for featured products
  const featuredProducts = [{
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 128,
    category: 'Cement',
    isFeatured: true
  }, {
    id: '2',
    name: 'Red Clay Bricks (Pack of 500)',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1618501352097-8f0a64a2a673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 94,
    category: 'Bricks',
    isFeatured: true
  }, {
    id: '3',
    name: 'Professional Cordless Drill Set',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 215,
    category: 'Tools',
    isNew: true,
    discount: 15
  }, {
    id: '4',
    name: 'Premium Interior Wall Paint (5L)',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 87,
    category: 'Paint',
    isFeatured: true
  }];
  // Sample categories
  const categories = [{
    id: 'cement',
    name: 'Cement',
    image: 'https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 24
  }, {
    id: 'bricks',
    name: 'Bricks & Blocks',
    image: 'https://images.unsplash.com/photo-1618501352097-8f0a64a2a673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 36
  }, {
    id: 'tiles',
    name: 'Tiles',
    image: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 48
  }, {
    id: 'steel',
    name: 'Steel',
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 18
  }, {
    id: 'plumbing',
    name: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 42
  }, {
    id: 'tools',
    name: 'Tools',
    image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 64
  }];
  // Sample brands
  const brands = ['https://via.placeholder.com/150x80?text=Brand+1', 'https://via.placeholder.com/150x80?text=Brand+2', 'https://via.placeholder.com/150x80?text=Brand+3', 'https://via.placeholder.com/150x80?text=Brand+4', 'https://via.placeholder.com/150x80?text=Brand+5', 'https://via.placeholder.com/150x80?text=Brand+6'];
  return <div className="bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="relative bg-stone-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Build Better with Tamab
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Quality construction materials for homeowners, contractors, and
              DIY enthusiasts. All in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center p-4">
              <TruckIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Free Delivery</h3>
                <p className="text-gray-500 text-sm">On orders over $500</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <ShieldCheckIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Quality Guarantee</h3>
                <p className="text-gray-500 text-sm">100% quality assurance</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <CreditCardIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Secure Payment</h3>
                <p className="text-gray-500 text-sm">
                  Multiple payment methods
                </p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <HeadphonesIcon className="h-10 w-10 text-amber-600 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">24/7 Support</h3>
                <p className="text-gray-500 text-sm">
                  Dedicated customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Popular Categories
            </h2>
            <Link to="/products" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => <Link to={`/products?category=${category.id}`} key={category.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img src={category.image} alt={category.name} className="h-36 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.count} products
                    </p>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link to="/products" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </section>
      {/* Special Offer Banner */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="bg-amber-600 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="bg-white text-amber-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4 w-fit">
                  Special Offer
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  20% Off All Power Tools
                </h2>
                <p className="text-amber-100 mb-6">
                  Limited time offer. Grab your essential tools now at
                  unbeatable prices.
                </p>
                <div>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600">
                    Shop Now
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Power tools on sale" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See why thousands of contractors,
              homeowners, and DIY enthusiasts choose Tamab for their
              construction needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <Card className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 fill-amber-500" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                "Tamab has been my go-to supplier for all construction
                materials. Their quality is unmatched and delivery is always on
                time. Highly recommended for any serious contractor."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="h-12 w-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Professional Contractor
                  </p>
                </div>
              </div>
            </Card>
            {/* Testimonial 2 */}
            <Card className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 fill-amber-500" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                "As a DIY enthusiast, I appreciate the wide selection and
                helpful advice from the Tamab team. They've helped me complete
                multiple home renovation projects with confidence."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="h-12 w-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Miller</h4>
                  <p className="text-sm text-gray-500">DIY Enthusiast</p>
                </div>
              </div>
            </Card>
            {/* Testimonial 3 */}
            <Card className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 fill-amber-500" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                "We've been sourcing our construction materials from Tamab for
                over 5 years. Their consistent quality and competitive pricing
                keep us coming back for every project."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Customer" className="h-12 w-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Construction Manager</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Trusted Brands Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Trusted Brands We Carry
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <img src={brand} alt={`Brand ${index + 1}`} className="h-12 md:h-16 w-auto" />
              </div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a professional contractor or a DIY enthusiast, Tamab
            has everything you need to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      {/* Blog Preview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Construction Tips & Guides
            </h2>
            <Link to="/blog" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden" padding="none">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Blog post" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  DIY
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">
                  10 Essential Tools Every DIY Enthusiast Should Own
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Discover the must-have tools that will make your home
                  improvement projects easier and more professional.
                </p>
                <Link to="/blog/essential-tools" className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
                  Read More
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Card>
            {/* Blog Post 2 */}
            <Card className="overflow-hidden" padding="none">
              <img src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Blog post" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  Tips
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">
                  How to Choose the Right Paint for Every Room
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Learn about different paint types, finishes, and how to select
                  the perfect color for each space in your home.
                </p>
                <Link to="/blog/paint-selection" className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
                  Read More
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Card>
            {/* Blog Post 3 */}
            <Card className="overflow-hidden" padding="none">
              <img src="https://images.unsplash.com/photo-1581165825597-9aaedcbacfe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Blog post" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  Guide
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">
                  The Ultimate Guide to Kitchen Renovation
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Step-by-step instructions and material recommendations for a
                  successful kitchen remodeling project.
                </p>
                <Link to="/blog/kitchen-renovation" className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
                  Read More
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;