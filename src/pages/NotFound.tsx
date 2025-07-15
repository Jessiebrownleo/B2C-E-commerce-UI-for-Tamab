import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, SearchIcon } from 'lucide-react';
import Button from '../components/ui/Button';
const NotFound = () => {
  return <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-amber-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" icon={<HomeIcon className="h-5 w-5" />}>
              Go Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" icon={<SearchIcon className="h-5 w-5" />}>
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default NotFound;