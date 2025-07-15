import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XIcon, MinusIcon, PlusIcon, ShoppingBagIcon, RefreshCwIcon, ArrowRightIcon, TruckIcon, ShieldCheckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([{
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    quantity: 5
  }, {
    id: '3',
    name: 'Professional Cordless Drill Set',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    quantity: 1,
    discount: 15
  }, {
    id: '6',
    name: 'Steel Reinforcement Bars (10mm, Bundle of 10)',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    quantity: 2
  }]);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
    return total + itemPrice * item.quantity;
  }, 0);
  // Shipping cost calculation
  const shippingCost = subtotal >= 500 ? 0 : 25;
  // Apply coupon
  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'TAMAB20') {
      setCouponApplied(true);
      setCouponDiscount(subtotal * 0.2);
    }
  };
  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  // Remove item
  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  return <div className="bg-gray-50 w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
          <div className="flex items-center text-sm text-gray-300 mt-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">
                    Shopping Cart ({cartItems.length} items)
                  </h2>
                  <button onClick={clearCart} className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                    <RefreshCwIcon className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>
                {/* Cart Items List */}
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => {
                const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
                return <div key={item.id} className="py-6 flex flex-col sm:flex-row">
                        {/* Product Image */}
                        <div className="flex-shrink-0 sm:w-24 h-24 mb-4 sm:mb-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                        </div>
                        {/* Product Details */}
                        <div className="flex-1 sm:ml-6">
                          <div className="flex flex-col sm:flex-row justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                <Link to={`/product/${item.id}`} className="hover:text-amber-600">
                                  {item.name}
                                </Link>
                              </h3>
                              <div className="mt-1 mb-4 sm:mb-0">
                                {item.discount ? <div className="flex items-center">
                                    <span className="text-lg font-medium text-gray-900">
                                      $
                                      {(item.price * (1 - item.discount / 100)).toFixed(2)}
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500 line-through">
                                      ${item.price.toFixed(2)}
                                    </span>
                                  </div> : <span className="text-lg font-medium text-gray-900">
                                    ${item.price.toFixed(2)}
                                  </span>}
                              </div>
                            </div>
                            {/* Quantity Controls */}
                            <div className="flex items-center">
                              <div className="flex border border-gray-300 rounded-md">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-l-md">
                                  <MinusIcon className="h-4 w-4" />
                                </button>
                                <input type="text" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)} className="w-12 text-center border-x border-gray-300" />
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-r-md">
                                  <PlusIcon className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="ml-4 sm:ml-6 text-right">
                                <div className="font-medium text-gray-900">
                                  ${(itemPrice * item.quantity).toFixed(2)}
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-sm text-red-600 hover:text-red-800 flex items-center mt-1">
                                  <XIcon className="h-4 w-4 mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>;
              })}
                </div>
                <div className="mt-6 flex justify-between">
                  <Link to="/products" className="flex items-center text-amber-600 hover:text-amber-700">
                    <ArrowRightIcon className="h-4 w-4 mr-1 transform rotate-180" />
                    Continue Shopping
                  </Link>
                  <Button variant="primary">Update Cart</Button>
                </div>
              </Card>
            </div>
            {/* Order Summary */}
            <div>
              <Card>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                      items)
                    </span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    {shippingCost > 0 ? <span className="font-medium">
                        ${shippingCost.toFixed(2)}
                      </span> : <span className="text-green-600 font-medium">Free</span>}
                  </div>
                  {couponApplied && <div className="flex justify-between text-green-600">
                      <span>Coupon Discount (TAMAB20)</span>
                      <span className="font-medium">
                        -${couponDiscount.toFixed(2)}
                      </span>
                    </div>}
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>
                      ${(subtotal + shippingCost - couponDiscount).toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* Coupon Code */}
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input type="text" id="coupon" value={couponCode} onChange={e => setCouponCode(e.target.value)} placeholder="Enter coupon code" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    <button onClick={applyCoupon} disabled={couponApplied} className={`px-4 py-2 bg-amber-600 text-white rounded-r-md text-sm font-medium ${couponApplied ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-700'}`}>
                      Apply
                    </button>
                  </div>
                  {couponApplied && <p className="mt-1 text-sm text-green-600">
                      Coupon applied successfully!
                    </p>}
                </div>
                {/* Checkout Button */}
                <Link to="/checkout">
                  <Button variant="primary" fullWidth>
                    Proceed to Checkout
                  </Button>
                </Link>
                {/* Shipping & Guarantee */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Free shipping on orders over $500</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </Card>
              {/* You might also like */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">
                  You might also like
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <img src="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Ceramic Floor Tiles" className="w-full h-24 object-cover mb-2" />
                    <h4 className="text-sm font-medium">Ceramic Floor Tiles</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium">$89.99</span>
                      <button className="text-amber-600 hover:text-amber-700 text-sm">
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Premium Interior Wall Paint" className="w-full h-24 object-cover mb-2" />
                    <h4 className="text-sm font-medium">Interior Wall Paint</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium">$45.99</span>
                      <button className="text-amber-600 hover:text-amber-700 text-sm">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <ShoppingBagIcon className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </div>}
      </div>
    </div>;
};
export default Cart;