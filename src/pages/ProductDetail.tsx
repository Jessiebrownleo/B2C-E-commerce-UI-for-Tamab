import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon, ShareIcon, StarIcon, TruckIcon, ShieldCheckIcon, RefreshCwIcon, CheckIcon, MinusIcon, PlusIcon, ChevronRightIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProductCard from '../components/products/ProductCard';
const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  // Sample product data
  const product = {
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    discount: 0,
    rating: 4.5,
    reviewCount: 128,
    stock: 50,
    sku: 'CM-PORT-50KG',
    brand: 'BuildWell',
    category: 'Cement',
    tags: ['cement', 'building materials', 'construction'],
    description: 'High-quality Portland cement suitable for general construction work. This premium cement offers excellent binding properties, durability, and strength for various construction applications including concrete mixing, mortar preparation, and plastering.',
    features: ['High strength development', 'Excellent workability', '50kg standard packaging', 'Consistent quality', 'Suitable for all general construction work', 'Complies with international standards'],
    specifications: {
      Weight: '50kg',
      Type: 'Portland Cement',
      'Strength Class': '42.5N',
      'Setting Time': '45-60 minutes',
      Application: 'General Construction',
      Storage: 'Keep in dry place',
      'Shelf Life': '3 months when properly stored'
    },
    images: ['https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1607999976047-0867e570e501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1580488741163-9a6683a2aff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1585073759066-29214468eee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80']
  };
  // Sample related products
  const relatedProducts = [{
    id: '2',
    name: 'Red Clay Bricks (Pack of 500)',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1618501352097-8f0a64a2a673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 94,
    category: 'Bricks'
  }, {
    id: '5',
    name: 'Ceramic Floor Tiles (60x60cm, Pack of 10)',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviewCount: 56,
    category: 'Tiles'
  }, {
    id: '6',
    name: 'Steel Reinforcement Bars (10mm, Bundle of 10)',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 42,
    category: 'Steel'
  }, {
    id: '7',
    name: 'PVC Pipes (2 inch, 10ft, Pack of 5)',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviewCount: 38,
    category: 'Plumbing'
  }];
  // Sample reviews
  const reviews = [{
    id: 1,
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: '2023-05-15',
    title: 'Excellent quality cement',
    comment: "I've been using this cement for all my construction projects. The quality is consistent and it sets really well. Highly recommended for both professionals and DIY enthusiasts."
  }, {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    date: '2023-04-22',
    title: 'Good product, fast delivery',
    comment: 'The cement is of good quality and delivery was faster than expected. I would have given 5 stars but one of the bags was slightly damaged during shipping. The cement itself works great though.'
  }, {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 5,
    date: '2023-03-10',
    title: 'Perfect for my patio project',
    comment: 'Used this cement for my backyard patio project and it turned out perfect. Easy to work with and sets just right. Will definitely order again for future projects.'
  }];
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  return <div className="bg-gray-50 w-full">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-amber-600">
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-600 hover:text-amber-600">
              Products
            </Link>
            <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400" />
            <Link to="/products?category=cement" className="text-gray-600 hover:text-amber-600">
              Cement
            </Link>
            <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>
      {/* Product Detail Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                <img src={product.images[mainImage]} alt={product.name} className="w-full h-96 object-contain p-4" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => <div key={index} className={`
                      border rounded-md overflow-hidden cursor-pointer
                      ${mainImage === index ? 'border-amber-600' : 'border-gray-200'}
                    `} onClick={() => setMainImage(index)}>
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                  </div>)}
              </div>
            </div>
            {/* Product Info */}
            <div>
              <div className="mb-2">
                <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-sm text-amber-600 hover:underline">
                  {product.category}
                </Link>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              {/* Price */}
              <div className="mb-6">
                {product.discount > 0 ? <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm font-medium">
                      {product.discount}% OFF
                    </span>
                  </div> : <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>}
              </div>
              {/* Short Description */}
              <p className="text-gray-600 mb-6">
                {product.description.split('.')[0] + '.'}
              </p>
              {/* Product Meta */}
              <div className="space-y-2 mb-6">
                <div className="flex">
                  <span className="text-gray-600 w-24">Availability:</span>
                  {product.stock > 0 ? <span className="text-green-600 flex items-center">
                      <CheckIcon className="h-4 w-4 mr-1" /> In Stock (
                      {product.stock} available)
                    </span> : <span className="text-red-600">Out of Stock</span>}
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Brand:</span>
                  <Link to={`/products?brand=${product.brand.toLowerCase()}`} className="text-amber-600 hover:underline">
                    {product.brand}
                  </Link>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">SKU:</span>
                  <span>{product.sku}</span>
                </div>
              </div>
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                  Quantity
                </label>
                <div className="flex">
                  <button onClick={decrementQuantity} className="bg-gray-100 border border-gray-300 rounded-l-md px-3 py-2 hover:bg-gray-200">
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <input id="quantity" type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value) || 1)} min="1" className="border-t border-b border-gray-300 text-center w-16" />
                  <button onClick={incrementQuantity} className="bg-gray-100 border border-gray-300 rounded-r-md px-3 py-2 hover:bg-gray-200">
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="primary" size="lg" fullWidth icon={<ShoppingCartIcon className="h-5 w-5" />}>
                  Add to Cart
                </Button>
                <Button variant="secondary" size="lg" fullWidth>
                  Buy Now
                </Button>
              </div>
              {/* Wishlist and Share */}
              <div className="flex space-x-4 mb-6">
                <button className="flex items-center text-gray-600 hover:text-amber-600">
                  <HeartIcon className="h-5 w-5 mr-1" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-amber-600">
                  <ShareIcon className="h-5 w-5 mr-1" />
                  <span>Share</span>
                </button>
              </div>
              {/* Shipping Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center">
                  <TruckIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">
                    Free shipping on orders over $500
                  </span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">
                    Quality guarantee on all products
                  </span>
                </div>
                <div className="flex items-center">
                  <RefreshCwIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">
                    Easy returns within 30 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Tabs */}
      <section className="py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button onClick={() => setActiveTab('description')} className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'description' ? 'border-amber-600 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Description
              </button>
              <button onClick={() => setActiveTab('specifications')} className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'specifications' ? 'border-amber-600 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Specifications
              </button>
              <button onClick={() => setActiveTab('reviews')} className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'reviews' ? 'border-amber-600 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>
          {/* Tab Content */}
          <div className="py-6">
            {/* Description Tab */}
            {activeTab === 'description' && <div>
                <div className="prose max-w-none">
                  <p className="mb-4">{product.description}</p>
                  <h3 className="text-lg font-medium mb-3">Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <h3 className="text-lg font-medium mb-3">Applications:</h3>
                  <p>
                    This premium Portland cement is suitable for a wide range of
                    construction applications, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-6">
                    <li>Concrete mixing for foundations, slabs, and columns</li>
                    <li>Mortar preparation for bricklaying and masonry work</li>
                    <li>Plastering and rendering of walls</li>
                    <li>General repair work</li>
                    <li>DIY home improvement projects</li>
                  </ul>
                  <p>
                    For best results, store in a dry place and use within 3
                    months of purchase. Always follow proper mixing ratios
                    according to your specific application requirements.
                  </p>
                </div>
              </div>}
            {/* Specifications Tab */}
            {activeTab === 'specifications' && <div>
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                            {key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-2/3">
                            {value}
                          </td>
                        </tr>)}
                  </tbody>
                </table>
              </div>}
            {/* Reviews Tab */}
            {activeTab === 'reviews' && <div>
                {/* Review Summary */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3">
                    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
                      <div className="text-5xl font-bold text-amber-600 mb-2">
                        {product.rating}
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        Based on {product.reviewCount} reviews
                      </div>
                      <Button variant="primary">Write a Review</Button>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-4">
                      Rating Distribution
                    </h3>
                    {[5, 4, 3, 2, 1].map(star => <div key={star} className="flex items-center mb-2">
                        <div className="flex items-center w-24">
                          <span className="text-sm text-gray-600 mr-2">
                            {star} stars
                          </span>
                        </div>
                        <div className="flex-grow">
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-amber-500 rounded-full" style={{
                        width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`
                      }}></div>
                          </div>
                        </div>
                        <div className="w-16 text-right text-sm text-gray-600">
                          {star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}
                          %
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Review List */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
                  {reviews.map(review => <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full mr-3" />
                          <div>
                            <h4 className="font-medium">{review.name}</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">{review.title}</h5>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>)}
                  <div className="pt-4">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </section>
    </div>;
};
export default ProductDetail;