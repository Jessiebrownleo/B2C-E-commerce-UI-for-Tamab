import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilterIcon, XIcon, ChevronDownIcon, GridIcon, ListIcon, SlidersIcon, StarIcon, ShoppingCartIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProductCard from '../components/products/ProductCard';
import products from "../data/Products.ts";
import categories from "../data/Categories.ts";
const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page
  const location = useLocation();

  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';




  // State for selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState<typeof products>(products);

  // Filter products based on selected categories and search query
  useEffect(() => {
    let filtered = products;

    // Filter by categories if not "All Categories"
    if (!selectedCategories.includes('all')) {
      filtered = filtered.filter(product => {
        // Convert product category to lowercase and remove spaces for comparison
        const normalizedCategory = product.category.toLowerCase().replace(/\s+/g, '');

        // Check if any selected category matches the product category
        return selectedCategories.some(cat => {
          // Special case for "Bricks & Blocks" category
          if (cat === 'bricks' && normalizedCategory.includes('brick')) {
            return true;
          }
          return normalizedCategory.includes(cat);
        });
      });
    }

    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, products, searchQuery]);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Handle category selection
  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    if (categoryId === 'all' && isChecked) {
      // If "All Categories" is selected, deselect all other categories
      setSelectedCategories(['all']);
    } else if (isChecked) {
      // If any other category is selected, remove "All Categories" and add the selected category
      setSelectedCategories(prev => {
        const newSelected = prev.filter(cat => cat !== 'all').concat(categoryId);
        return newSelected.length > 0 ? newSelected : ['all']; // If no categories selected, default to "All Categories"
      });
    } else {
      // If a category is deselected, remove it from the selected categories
      setSelectedCategories(prev => {
        const newSelected = prev.filter(cat => cat !== categoryId);
        return newSelected.length > 0 ? newSelected : ['all']; // If no categories selected, default to "All Categories"
      });
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories(['all']);
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
                <button 
                  className="text-sm text-amber-600 hover:text-amber-700"
                  onClick={resetFilters}
                >
                  Reset All
                </button>
              </div>
              {/* Categories Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${category.id}`} 
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" 
                        checked={selectedCategories.includes(category.id)}
                        onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                      />
                      <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                        {category.name} {category.count > 0 && `(${category.count})`}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
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
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`mobile-category-${category.id}`} 
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" 
                          checked={selectedCategories.includes(category.id)}
                          onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                        />
                        <label htmlFor={`mobile-category-${category.id}`} className="ml-2 text-sm text-gray-700">
                          {category.name} {category.count > 0 && `(${category.count})`}
                        </label>
                      </div>
                    ))}
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
              </div>
            </div>}
          {/* Products Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing <span className="font-medium">{filteredProducts.length}</span>{' '}
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
              {selectedCategories.length > 0 && !selectedCategories.includes('all') && (
                <>
                  {selectedCategories.map(catId => {
                    const category = categories.find(c => c.id === catId);
                    return category ? (
                      <div key={catId} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                        Category: {category.name}
                        <button 
                          className="ml-1 text-gray-500 hover:text-gray-700"
                          onClick={() => handleCategoryChange(catId, false)}
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                    ) : null;
                  })}
                </>
              )}
              {/* Example of other filters that could be implemented */}
              {/* <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                Price: $10 - $200
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <XIcon className="h-4 w-4" />
                </button>
              </div> */}
            </div>
            {/* Products Grid */}
            {viewMode === 'grid' ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts
                .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
                .map(product => <ProductCard key={product.id} {...product} />)}
              </div> : <div className="space-y-4">
                {filteredProducts
                  .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
                  .map(product => <Card key={product.id} className="flex flex-col sm:flex-row overflow-hidden">
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
            {filteredProducts.length > productsPerPage && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border border-gray-300 rounded-l-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 border-t border-b border-gray-300 ${currentPage === index + 1 ? 'bg-amber-600 text-white' : 'hover:bg-gray-100'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
                    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                    className={`px-3 py-1 border border-gray-300 rounded-r-md ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductListing;
