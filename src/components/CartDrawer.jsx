import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 2.50 : 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Fadlan soo buuxiya macluumaadka muhiimka ah (Name, Phone, Address)');
      return;
    }
    // Halkan wuxuu u gudbi doonaa xaqiijinta dalabka
    setStep('success');
    if (onClearCart) onClearCart();
  };

  const handleReset = () => {
    setStep('cart');
    setFormData({ name: '', phone: '', address: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={handleReset}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                {step === 'cart' && 'Your Cart'}
                {step === 'checkout' && 'Checkout / Order Info'}
                {step === 'success' && 'Order Placed!'}
              </h2>
            </div>
            <button 
              onClick={handleReset}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6">
            
            {/* STEP 1: CART ITEMS */}
            {step === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                      <ShoppingBag className="w-10 h-10" />
                    </div>
                    <p className="text-gray-500 font-medium">Khaatadaadu waa maran tahay!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded-xl bg-gray-100"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                          <span className="text-orange-600 font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                          
                          <div className="flex items-center space-x-3 mt-2">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-gray-800">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* STEP 2: CHECKOUT FORM */}
            {step === 'checkout' && (
              <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Magacaaga (Full Name) *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Jihaan Abdikadir" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Telefoonka (Phone Number) *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g. +252 61 XXX XXXX" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Ciwaanka / Halka Loo Sido (Address) *</label>
                  <textarea 
                    name="address" 
                    rows="2" 
                    required 
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="E.g. Shibis, Mogadishu" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-orange-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Fariin Dheeraad ah (Notes / Instructions)</label>
                  <input 
                    type="text" 
                    name="notes" 
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="E.g. Fadlan basbaas badan uga dar" 
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </form>
            )}

            {/* STEP 3: SUCCESS CONFIRMATION */}
            {step === 'success' && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mahadsanid! Dalabkaagu waa la helay!</h3>
                <p className="text-sm text-gray-500">
                  Waan ka shaqaynaynaa dalabkaaga. Waxaana kuugu soo hagajinaynaa ciwaankaaga: <strong className="text-gray-800">{formData.address}</strong>.
                </p>
                <div className="bg-gray-50 p-4 rounded-xl text-left text-xs space-y-1 text-gray-600 mt-4 border border-gray-100">
                  <p><strong>Macmiilka:</strong> {formData.name}</p>
                  <p><strong>Telefoonka:</strong> {formData.phone}</p>
                  <p><strong>Total:</strong> ${total.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Actions */}
          {cartItems.length > 0 && step !== 'success' && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-orange-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {step === 'cart' ? (
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => setStep('cart')}
                    className="w-1/3 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    form="order-form"
                    className="w-2/3 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition text-sm flex items-center justify-center space-x-1"
                  >
                    <span>Place Order</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 'success' && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <button
                onClick={handleReset}
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition text-sm"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}