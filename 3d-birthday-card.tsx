import React, { useState } from 'react';
import { Heart, Gift, Cake } from 'lucide-react';

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100 perspective-1000">
      <div 
        className={`relative w-96 h-[500px] transition-transform duration-700 transform-style-3d 
        ${isOpen ? 'rotate-y-180' : ''} 
        hover:scale-105 cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Front of Card */}
        <div className={`absolute w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-2xl p-6 backface-hidden ${isOpen ? 'rotate-y-180 z-0' : 'z-10'}`}>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Happy Birthday</h1>
            <h2 className="text-3xl font-semibold text-white/90">Siddhi!</h2>
            <div className="flex justify-center mt-8">
              <Cake size={120} className="text-white/80" />
            </div>
            <p className="mt-6 text-sm text-white/70">Click to open the card</p>
          </div>
        </div>

        {/* Inside of Card */}
        <div className={`absolute w-full h-full bg-white rounded-xl shadow-2xl p-6 rotate-y-180 backface-hidden ${isOpen ? 'z-10' : 'z-0'}`}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Siddhi</h2>
            <div className="flex justify-center space-x-4 mb-6">
              <Heart size={40} className="text-red-500" />
              <Gift size={40} className="text-purple-500" />
            </div>
            <p className="text-gray-700 mb-6">
              Wishing you a day filled with joy, 
              laughter, and magical moments. 
              May this year bring you 
              everything your heart 