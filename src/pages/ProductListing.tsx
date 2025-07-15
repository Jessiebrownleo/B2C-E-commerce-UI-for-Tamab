import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterIcon, XIcon, ChevronDownIcon, GridIcon, ListIcon, SlidersIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProductCard from '../components/products/ProductCard';
const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('popular');
  // Sample products data
  const products = [{
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 128,
    category: 'Cement'
  }, {
    id: '2',
    name: 'Red Clay Bricks (Pack of 500)',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1618501352097-8f0a64a2a673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 94,
    category: 'Bricks'
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
    category: 'Paint'
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
  }, {
    id: '8',
    name: 'Electric Circular Saw (1200W)',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 76,
    category: 'Tools',
    discount: 10
  }];
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return <div className="bg-gray-50 w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Construction Materials
          </h1>
          <div className="flex items-center text-sm text-gray-300 mt-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Products</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Filters</h2>
                <button className="text-sm text-amber-600 hover:text-amber-700">
                  Reset All
                </button>
              </div>
              {/* Categories Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {['All Categories', 'Cement', 'Bricks & Blocks', 'Tiles', 'Steel', 'Plumbing', 'Paint', 'Tools'].map((category, index) => <div key={index} className="flex items-center">
                      <input type="checkbox" id={`category-${index}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={index === 0} />
                      <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>)}
                </div>
              </div>
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center">
                  <input type="text" placeholder="Min" className="w-full p-2 border border-gray-300 rounded-md text-sm mr-2" />
                  <span className="text-gray-500">-</span>
                  <input type="text" placeholder="Max" className="w-full p-2 border border-gray-300 rounded-md text-sm ml-2" />
                </div>
                <div className="mt-3">
                  <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
              </div>
              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {['All Brands', 'BuildWell', 'ConstructPro', 'MasterCraft', 'TileMaster', 'SteelForge'].map((brand, index) => <div key={index} className="flex items-center">
                      <input type="checkbox" id={`brand-${index}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={index === 0} />
                      <label htmlFor={`brand-${index}`} className="ml-2 text-sm text-gray-700">
                        {brand}
                      </label>
                    </div>)}
                </div>
              </div>
              {/* Material Type */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Material Type</h3>
                <div className="space-y-2">
                  {['All Materials', 'Concrete', 'Clay', 'Ceramic', 'Steel', 'PVC', 'Wood', 'Metal'].map((material, index) => <div key={index} className="flex items-center">
                      <input type="checkbox" id={`material-${index}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={index === 0} />
                      <label htmlFor={`material-${index}`} className="ml-2 text-sm text-gray-700">
                        {material}
                      </label>
                    </div>)}
                </div>
              </div>
              {/* Apply Filters Button */}
              <Button variant="primary" fullWidth>
                Apply Filters
              </Button>
            </Card>
          </aside>
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button variant="outline" onClick={toggleFilter} icon={<FilterIcon className="h-4 w-4" />} className="w-full">
              Filter Products
            </Button>
          </div>
          {/* Mobile Filter Sidebar */}
          {isFilterOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-80 h-full overflow-y-auto p-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button onClick={toggleFilter} className="text-gray-500 hover:text-gray-700">
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                {/* Filter content - same as desktop but in a modal */}
                {/* Categories Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {['All Categories', 'Cement', 'Bricks & Blocks', 'Tiles', 'Steel', 'Plumbing', 'Paint', 'Tools'].map((category, index) => <div key={index} className="flex items-center">
                        <input type="checkbox" id={`mobile-category-${index}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={index === 0} />
                        <label htmlFor={`mobile-category-${index}`} className="ml-2 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>)}
                  </div>
                </div>
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="flex items-center">
                    <input type="text" placeholder="Min" className="w-full p-2 border border-gray-300 rounded-md text-sm mr-2" />
                    <span className="text-gray-500">-</span>
                    <input type="text" placeholder="Max" className="w-full p-2 border border-gray-300 rounded-md text-sm ml-2" />
                  </div>
                  <div className="mt-3">
                    <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  </div>
                </div>
                {/* Brand Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Brand</h3>
                  <div className="space-y-2">
                    {['All Brands', 'BuildWell', 'ConstructPro', 'MasterCraft', 'TileMaster', 'SteelForge'].map((brand, index) => <div key={index} className="flex items-center">
                        <input type="checkbox" id={`mobile-brand-${index}`} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" defaultChecked={index === 0} />
                        <label htmlFor={`mobile-brand-${index}`} className="ml-2 text-sm text-gray-700">
                          {brand}
                        </label>
                      </div>)}
                  </div>
                </div>
                {/* Apply Filters Button */}
                <div className="mt-6">
                  <Button variant="primary" fullWidth onClick={toggleFilter}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>}
          {/* Products Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing <span className="font-medium">{products.length}</span>{' '}
                  results
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-48">
                  <select value={sortOption} onChange={e => setSortOption(e.target.value)} className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="popular">Sort by: Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                {/* View Toggle */}
                <div className="hidden sm:flex items-center space-x-2 border border-gray-300 rounded-md">
                  <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-amber-600' : 'text-gray-500'}`}>
                    <GridIcon className="h-5 w-5" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-amber-600' : 'text-gray-500'}`}>
                    <ListIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                Category: Cement
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                Price: $10 - $200
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                Brand: BuildWell
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Products Grid */}
            {viewMode === 'grid' ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => <ProductCard key={product.id} {...product} />)}
              </div> : <div className="space-y-4">
                {products.map(product => <Card key={product.id} className="flex flex-col sm:flex-row overflow-hidden">
                    <div className="sm:w-48 h-48">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col">
                      <div>
                        <h3 className="text-sm text-gray-500">
                          {product.category}
                        </h3>
                        <Link to={`/product/${product.id}`}>
                          <h2 className="text-lg font-medium text-gray-900 mb-2">
                            {product.name}
                          </h2>
                        </Link>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
                          <span className="ml-1 text-xs text-gray-500">
                            ({product.reviewCount})
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          High-quality construction material perfect for your
                          building projects. Durable and reliable.
                        </p>
                      </div>
                      <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="mb-3 sm:mb-0">
                          {product.discount ? <div className="flex items-center">
                              <span className="text-lg font-medium text-gray-900">
                                $
                                {(product.price * (1 - product.discount / 100)).toFixed(2)}
                              </span>
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ${product.price.toFixed(2)}
                              </span>
                            </div> : <span className="text-lg font-medium text-gray-900">
                              ${product.price.toFixed(2)}
                            </span>}
                        </div>
                        <Button variant="primary" size="sm" icon={<ShoppingCartIcon className="h-4 w-4" />}>
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>)}
              </div>}
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center">
                <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 bg-amber-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductListing;