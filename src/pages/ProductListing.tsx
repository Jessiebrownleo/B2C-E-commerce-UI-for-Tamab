import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilterIcon, XIcon, ChevronDownIcon, GridIcon, ListIcon, SlidersIcon, StarIcon, ShoppingCartIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProductCard from '../components/products/ProductCard';
const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('popular');
  const location = useLocation();

  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  // Categories data as JSON
  const categoriesData = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'cement', name: 'Cement', count: 3 },
    { id: 'bricks', name: 'Bricks & Blocks', count: 3 },
    { id: 'tiles', name: 'Tiles', count: 2 },
    { id: 'steel', name: 'Steel', count: 2 },
    { id: 'plumbing', name: 'Plumbing', count: 2 },
    { id: 'paint', name: 'Paint', count: 2 },
    { id: 'tools', name: 'Tools', count: 3 },
    { id: 'concrete', name: 'Concrete', count: 2 },
    { id: 'roofing', name: 'Roofing', count: 2 },
    { id: 'insulation', name: 'Insulation', count: 2 },
    { id: 'lumber', name: 'Lumber', count: 2 }
  ];

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
  }, {
    id: '9',
    name: 'Quick-Setting Concrete Mix (25kg)',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f1e1e4f3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 65,
    category: 'Concrete'
  }, {
    id: '10',
    name: 'Asphalt Roof Shingles (Bundle)',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 48,
    category: 'Roofing'
  }, {
    id: '11',
    name: 'Fiberglass Insulation Roll (15m²)',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1620293023555-272e1a661b26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviewCount: 37,
    category: 'Insulation'
  }, {
    id: '12',
    name: 'Pressure-Treated Lumber (2x4, 8ft)',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1520618821905-d7fb6008a1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviewCount: 82,
    category: 'Lumber'
  }, {
    id: '13',
    name: 'White Portland Cement (25kg)',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviewCount: 45,
    category: 'Cement'
  }, {
    id: '14',
    name: 'Concrete Blocks (8x8x16, Pack of 50)',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 63,
    category: 'Bricks'
  }, {
    id: '15',
    name: 'Exterior Acrylic Paint (10L)',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 72,
    category: 'Paint',
    discount: 5
  }, {
    id: '16',
    name: 'Copper Plumbing Pipes (15mm, 3m)',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 41,
    category: 'Plumbing'
  }, {
    id: '17',
    name: 'Structural Steel I-Beam (6m)',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 28,
    category: 'Steel',
    isNew: true
  }, {
    id: '18',
    name: 'Ceramic Wall Tiles (30x60cm, Pack of 10)',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1575652471646-d37bcc4e9d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 52,
    category: 'Tiles'
  }, {
    id: '19',
    name: 'Power Hammer Drill (1500W)',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1616321507403-9e5d4c0c9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 94,
    category: 'Tools',
    discount: 12
  }, {
    id: '20',
    name: 'Ready-Mix Concrete (1 cubic yard)',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1604080072035-97c6b6460c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 58,
    category: 'Concrete'
  }, {
    id: '21',
    name: 'Metal Roofing Sheets (10ft, Pack of 5)',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1620653702611-9d5e62c28484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 39,
    category: 'Roofing'
  }, {
    id: '22',
    name: 'Spray Foam Insulation Kit (600 sq ft)',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1591019052241-e4d95a5dc3fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 47,
    category: 'Insulation',
    discount: 8
  }, {
    id: '23',
    name: 'Cedar Wood Planks (1x6, 8ft)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviewCount: 76,
    category: 'Lumber'
  }, {
    id: '24',
    name: 'Masonry Cement (25kg)',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviewCount: 53,
    category: 'Cement'
  }, {
    id: '25',
    name: 'Concrete Paving Blocks (Pack of 100)',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 68,
    category: 'Bricks',
    isNew: true
  }];

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
                  {categoriesData.map((category) => (
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
              {/* Apply Filters Button */}
              <Button variant="primary" fullWidth onClick={resetFilters}>
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
                    {categoriesData.map((category) => (
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
                    const category = categoriesData.find(c => c.id === catId);
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
                {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)}
              </div> : <div className="space-y-4">
                {filteredProducts.map(product => <Card key={product.id} className="flex flex-col sm:flex-row overflow-hidden">
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
