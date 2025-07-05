import React, { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phoneNumber: '',
    deliveryAddress: '',
    paymentMethod: 'Bank Transfer'
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price).replace('NGN', '₦');
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const handleSendOrder = () => {
    if (!customerInfo.fullName || !customerInfo.phoneNumber || !customerInfo.deliveryAddress) {
      alert('Please fill in all required fields');
      return;
    }

    const orderItems = state.items.map(item => 
      `${item.name} - ${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    const message = `🛍️ NEW ORDER

📋 Order Details:
${orderItems}

💰 Total: ${formatPrice(state.total)}

👤 Customer Information:
Name: ${customerInfo.fullName}
Phone: ${customerInfo.phoneNumber}
Address: ${customerInfo.deliveryAddress}
Payment Method: ${customerInfo.paymentMethod}

Please confirm this order and provide further instructions.`;

    window.open(`https://wa.me/2349077587619?text=${encodeURIComponent(message)}`, '_blank');
    
    // Clear cart and close modal
    dispatch({ type: 'CLEAR_CART' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Order Items */}
          <div className="space-y-4 mb-8">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{formatPrice(item.price)} × {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-white hover:bg-gray-100 rounded-full p-1 transition-colors"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-medium px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-white hover:bg-gray-100 rounded-full p-1 transition-colors"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="text-right mb-8 pb-4 border-b">
            <p className="text-2xl font-bold text-gray-800">
              Total: {formatPrice(state.total)}
            </p>
          </div>

          {/* Customer Information Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={customerInfo.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={customerInfo.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="deliveryAddress" className="block text-gray-700 font-medium mb-2">Delivery Address</label>
              <textarea
                id="deliveryAddress"
                name="deliveryAddress"
                value={customerInfo.deliveryAddress}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your delivery address"
                required
              />
            </div>

            <div>
              <label htmlFor="payment-method-bank-transfer" className="block text-gray-700 font-medium mb-4">Payment Method</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Bank Transfer', 'Cash on Delivery', 'Credit Card'].map((method, idx) => (
                  <button
                    key={method}
                    id={idx === 0 ? "payment-method-bank-transfer" : undefined}
                    onClick={() => handlePaymentMethodChange(method)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      customerInfo.paymentMethod === method
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-300 text-gray-700 hover:border-pink-300'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={handleSendOrder}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2"
            >
              <span>📱 Send via WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-pink-500 hover:text-pink-600 transition-all duration-300 font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;