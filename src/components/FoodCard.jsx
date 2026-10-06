import React from 'react';
import { Star, Clock, Plus } from 'lucide-react';

export default function FoodCard({ item, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group">
      <div>
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
            {item.category}
          </span>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
            <div className="flex items-center space-x-1 bg-amber-50 px-2 py-0.5 rounded text-xs font-semibold text-amber-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{item.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 space-x-1 mt-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>{item.prepTime}</span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0 flex items-center justify-between border-t border-gray-50 mt-2">
        <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-orange-600 text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 hover:bg-orange-700 transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}