import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Utensils, Flame, Sparkles } from 'lucide-react';

import { categories, foodItems } from './data/foodData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Filtering
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Add to Cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // 3. Update Quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 4. Remove Item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 5. Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 flex flex-col justify-between font-sans">
      <div>
        {/* Navbar */}
        <Navbar 
          cartCount={totalCartCount} 
          onOpenCart={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          
          {/* HERO BANNER SECTION */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-8 sm:p-12 shadow-xl shadow-orange-500/10">
            <div className="relative z-10 max-w-xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Special Weekend Offer</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Delicious Food, <br />
                <span className="text-yellow-300">Delivered To You.</span>
              </h1>
              
              <p className="text-orange-100 text-sm sm:text-base font-medium">
                Order your favorite meals from top chefs and enjoy fast delivery straight to your doorstep.
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <a 
                  href="#dishes" 
                  className="bg-white text-orange-600 font-bold px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-50 transition transform hover:-translate-y-0.5"
                >
                  Order Now
                </a>
                <div className="flex items-center space-x-2 text-xs font-semibold bg-black/10 px-4 py-3 rounded-2xl">
                  <Flame className="w-4 h-4 text-yellow-300" />
                  <span>Free Delivery over $30</span>
                </div>
              </div>
            </div>

            {/* Decorative Overlay Icon */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Utensils className="w-96 h-96 text-white" />
            </div>
          </div>

          {/* CATEGORIES FILTER TABS */}
          <div id="dishes" className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                    : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-100 shadow-xs"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* TITLE & ITEM COUNT */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {selectedCategory === "All" ? "Popular Dishes" : selectedCategory}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Explore our fresh & tasty menu items</p>
            </div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
              {filteredItems.length} Items Available
            </span>
          </div>

          {/* FOOD GRID */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium text-lg">Wafaqid lama helin. Fadlan raadi cunto kale!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <FoodCard 
                  key={item.id} 
                  item={item} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          )}

        </main>
      </div>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}