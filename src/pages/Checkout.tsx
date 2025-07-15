import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, ShieldCheckIcon, ChevronDownIcon, CheckIcon, TruckIcon, InfoIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('aba');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  // Sample cart items for order summary
  const cartItems = [{
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    quantity: 5,
    total: 64.95
  }, {
    id: '3',
    name: 'Professional Cordless Drill Set',
    price: 189.99,
    discount: 15,
    discountedPrice: 161.49,
    quantity: 1,
    total: 161.49
  }, {
    id: '6',
    name: 'Steel Reinforcement Bars (10mm, Bundle of 10)',
    price: 149.99,
    quantity: 2,
    total: 299.98
  }];
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.total, 0);
  const shippingCost = deliveryMethod === 'express' ? 35 : subtotal >= 500 ? 0 : 25;
  const total = subtotal + shippingCost;
  return <div className="bg-gray-50 w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
          <div className="flex items-center text-sm text-gray-300 mt-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/cart" className="hover:text-white">
              Cart
            </Link>
            <span className="mx-2">/</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                <Link to="/account/addresses" className="text-sm text-amber-600 hover:text-amber-700">
                  Saved Addresses
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input type="text" id="firstName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input type="text" id="lastName" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input type="text" id="address" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input type="text" id="city" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input type="text" id="postalCode" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province *
                  </label>
                  <div className="relative">
                    <select id="state" className="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="">Select Province/City</option>
                      <option value="PNH">Phnom Penh</option>
                      <option value="SRP">Siem Reap</option>
                      <option value="SHV">Preah Sihanouk</option>
                      <option value="BMC">Battambang</option>
                      <option value="KEP">Kep</option>
                      <option value="KOS">Kratie</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <div className="relative">
                    <select id="country" className="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="KH">Cambodia</option>
                      <option value="TH">Thailand</option>
                      <option value="VN">Vietnam</option>
                      <option value="LA">Laos</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea id="notes" rows={3} placeholder="Notes about your order, e.g. special delivery instructions" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                </div>
              </div>
            </Card>
            {/* Delivery Options */}
            <Card>
              <h2 className="text-xl font-bold mb-6">Delivery Options</h2>
              <div className="space-y-4">
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${deliveryMethod === 'standard' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setDeliveryMethod('standard')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${deliveryMethod === 'standard' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {deliveryMethod === 'standard' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Standard Delivery</h3>
                        <span className="font-medium">
                          {subtotal >= 500 ? 'Free' : '$25.00'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Delivery within 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${deliveryMethod === 'express' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setDeliveryMethod('express')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${deliveryMethod === 'express' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {deliveryMethod === 'express' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Express Delivery</h3>
                        <span className="font-medium">$35.00</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Delivery within 1-2 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Payment Methods */}
            <Card>
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'aba' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('aba')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'aba' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'aba' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">ABA Pay</h3>
                        <img src="https://www.ababank.com/fileadmin/user_upload/aba-logo.png" alt="ABA Pay" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using ABA Mobile app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'wing' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('wing')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'wing' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'wing' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Wing Money</h3>
                        <img src="https://wing.com.kh/wp-content/uploads/2019/03/wing-logo.png" alt="Wing" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using Wing Money app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'pipay' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('pipay')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'pipay' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'pipay' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Pi Pay</h3>
                        <img src="https://play-lh.googleusercontent.com/vQB7RlvyK-ZmgkK-Ox6YrDHjpS9GR3D6yqbdXh6YJHc9GTEinnH3GYbBZoFXYjzFYw" alt="Pi Pay" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using Pi Pay app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'truemoney' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('truemoney')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'truemoney' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'truemoney' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">True Money</h3>
                        <img src="https://play-lh.googleusercontent.com/MO4jVMbqskWrBD5qWed3Q5gNOK0YX1t4tEWjmtpOyRk0Ql8wHFsXIQP0f2BlZr4hGkc" alt="True Money" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using True Money wallet
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'acleda' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('acleda')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'acleda' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'acleda' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">ACLEDA ToanChet</h3>
                        <img src="https://www.acledabank.com.kh/kh/assets/images/logo.png" alt="ACLEDA" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using ACLEDA ToanChet app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'bakong' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('bakong')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'bakong' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'bakong' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Bakong</h3>
                        <img src="https://www.bakong.gov.kh/wp-content/uploads/2020/10/bakong_logo-1.png" alt="Bakong" className="h-6" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay using Bakong mobile app
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`
                    border rounded-md p-4 cursor-pointer
                    ${paymentMethod === 'cod' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}
                  `} onClick={() => setPaymentMethod('cod')}>
                  <div className="flex items-center">
                    <div className={`
                      w-5 h-5 rounded-full border flex items-center justify-center mr-3
                      ${paymentMethod === 'cod' ? 'border-amber-600' : 'border-gray-300'}
                    `}>
                      {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-amber-600"></div>}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Cash on Delivery</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay with cash upon delivery (Phnom Penh only)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Order Summary */}
          <div>
            <Card>
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => <div key={item.id} className="flex justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity} x $
                        {item.discount ? item.discountedPrice.toFixed(2) : item.price.toFixed(2)}
                      </p>
                    </div>
                    <span className="font-medium">
                      ${item.total.toFixed(2)}
                    </span>
                  </div>)}
              </div>
              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {shippingCost > 0 ? <span className="font-medium">
                      ${shippingCost.toFixed(2)}
                    </span> : <span className="text-green-600 font-medium">Free</span>}
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              {/* Terms and Conditions */}
              <div className="mt-6 mb-6">
                <div className="flex items-start">
                  <input id="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 mt-1" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I have read and agree to the website's{' '}
                    <Link to="/terms" className="text-amber-600 hover:text-amber-700">
                      terms and conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-amber-600 hover:text-amber-700">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </div>
              {/* Place Order Button */}
              <Button variant="primary" size="lg" fullWidth>
                Place Order
              </Button>
              {/* Secure Checkout */}
              <div className="mt-6 flex justify-center items-center text-sm text-gray-600">
                <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                <span>Secure Checkout</span>
              </div>
              {/* Need Help */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Need Help?</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Call us at +855 23 123 456 or email at{' '}
                      <a href="mailto:support@tamab.com.kh" className="text-amber-600 hover:text-amber-700">
                        support@tamab.com.kh
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;