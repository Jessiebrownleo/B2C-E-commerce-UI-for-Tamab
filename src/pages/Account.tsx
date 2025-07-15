import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { UserIcon, PackageIcon, MapPinIcon, HeartIcon, BellIcon, LogOutIcon, ShoppingBagIcon, CreditCardIcon, ChevronRightIcon, StarIcon, TruckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
const Account = () => {
  // Sample data - in a real app, this would come from an API
  const user = {
    name: 'Sopheak Chen',
    email: 'sopheak.chen@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    memberSince: 'January 2023',
    totalOrders: 12
  };
  const recentOrders = [{
    id: 'ORD-2023-1234',
    date: '2023-11-15',
    total: 299.99,
    status: 'Delivered',
    items: 3
  }, {
    id: 'ORD-2023-1233',
    date: '2023-11-10',
    total: 149.5,
    status: 'In Transit',
    items: 2
  }, {
    id: 'ORD-2023-1232',
    date: '2023-11-05',
    total: 89.99,
    status: 'Processing',
    items: 1
  }];
  const wishlistItems = [{
    name: 'Premium Portland Cement',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3'
  }, {
    name: 'Professional Tool Set',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?ixlib=rb-4.0.3'
  }];
  const recentActivity = [{
    type: 'order',
    message: 'Your order ORD-2023-1234 has been delivered',
    date: '2 hours ago'
  }, {
    type: 'review',
    message: 'You left a review for Premium Portland Cement',
    date: '1 day ago'
  }, {
    type: 'wishlist',
    message: 'Added Professional Tool Set to your wishlist',
    date: '3 days ago'
  }];
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                {user.avatar ? <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover" /> : <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <UserIcon className="w-8 h-8 text-amber-600" />
                  </div>}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {user.memberSince}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" icon={<BellIcon className="w-4 h-4" />}>
                Notifications
              </Button>
              <Button variant="outline" size="sm" icon={<LogOutIcon className="w-4 h-4" />}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-amber-50">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-lg">
                <ShoppingBagIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Orders</p>
                <h3 className="text-xl font-bold text-gray-900">
                  {user.totalOrders}
                </h3>
              </div>
            </div>
          </Card>
          <Card className="bg-emerald-50">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <TruckIcon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">In Transit</p>
                <h3 className="text-xl font-bold text-gray-900">2</h3>
              </div>
            </div>
          </Card>
          <Card className="bg-blue-50">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <HeartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Wishlist</p>
                <h3 className="text-xl font-bold text-gray-900">8 items</h3>
              </div>
            </div>
          </Card>
          <Card className="bg-purple-50">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <StarIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Reviews</p>
                <h3 className="text-xl font-bold text-gray-900">5</h3>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Orders */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Orders
                </h2>
                <Link to="/account/orders" className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                  View All
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {recentOrders.map(order => <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-md">
                        <PackageIcon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">
                          {order.items} items • ${order.total}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                        {order.status}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                    </div>
                  </div>)}
              </div>
            </Card>
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/account/profile">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-amber-100 rounded-lg mb-3">
                      <UserIcon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-medium">Edit Profile</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Update your information
                    </p>
                  </div>
                </Card>
              </Link>
              <Link to="/account/addresses">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-amber-100 rounded-lg mb-3">
                      <MapPinIcon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-medium">Addresses</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Manage delivery addresses
                    </p>
                  </div>
                </Card>
              </Link>
              <Link to="/account/payment-methods">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-amber-100 rounded-lg mb-3">
                      <CreditCardIcon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-medium">Payment Methods</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Update payment options
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wishlist Preview */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Wishlist</h2>
                <Link to="/account/wishlist" className="text-sm text-amber-600 hover:text-amber-700 flex items-center">
                  View All
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {wishlistItems.map((item, index) => <div key={index} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-amber-600">${item.price}</p>
                    </div>
                  </div>)}
              </div>
            </Card>
            {/* Recent Activity */}
            <Card>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full
                      ${activity.type === 'order' ? 'bg-amber-100' : activity.type === 'review' ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {activity.type === 'order' ? <PackageIcon className="w-4 h-4 text-amber-600" /> : activity.type === 'review' ? <StarIcon className="w-4 h-4 text-green-600" /> : <HeartIcon className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        {activity.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>)}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Account;