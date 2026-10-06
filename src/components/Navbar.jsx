import React from 'react';
import { ShoppingBag, Search, Utensils } from 'lucide-react';

export default function Navbar({ cartCount, searchQuery, setSearchQuery, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-600 p-2 rounded-xl text-white">
            <Utensils className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Tasty<span className="text-orange-600">Dash</span>
          </h1>
        </div>

        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
          />
        </div>

        <button
          onClick={onOpenCart}
          className="relative bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm flex items-center space-x-2 hover:bg-orange-700 transition shadow-xs"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="bg-white text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}