import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, StarIcon } from 'lucide-react';
import Button from '../ui/Button';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  rating,
  reviewCount,
  category,
  isNew = false,
  isFeatured = false,
  discount
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const formattedDiscountedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(discountedPrice);
  return <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      {/* Badge */}
      {(isNew || discount) && <div className="absolute top-2 left-2 z-10">
          {isNew && <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md mr-2">
              NEW
            </span>}
          {discount && <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {discount}% OFF
            </span>}
        </div>}
      {/* Image */}
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
          <img src={image} alt={name} className="h-48 w-full object-cover object-center group-hover:opacity-90 transition-opacity" />
        </div>
      </Link>
      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm text-gray-500 mb-1">{category}</h3>
          <h2 className="text-base font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
            {name}
          </h2>
        </Link>
        {/* Price */}
        <div className="mt-2 mb-2">
          {discount ? <div className="flex items-center">
              <span className="text-lg font-medium text-gray-900">
                {formattedDiscountedPrice}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                {formattedPrice}
              </span>
            </div> : <span className="text-lg font-medium text-gray-900">
              {formattedPrice}
            </span>}
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />)}
          </div>
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>
        {/* Add to cart button */}
        <Button variant="primary" size="sm" fullWidth icon={<ShoppingCartIcon className="h-4 w-4" />}>
          Add to Cart
        </Button>
      </div>
    </div>;
};
export default ProductCard;