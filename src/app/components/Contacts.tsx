import { useState } from 'react';
import { User, Phone, Mail, MessageCircle, Facebook } from "lucide-react";

export function Contacts() {
    const whatsappMessage = encodeURIComponent('Hello IntoreTech');
    const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;
    const emailLink = 'mailto:intoretech@gmail.com';
    const facebookLink = 'https://www.facebook.com/IntoreTech';
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black py-16" id="contact">
      <div className="rounded-lg p-8 max-w-md w-full bg-[#000000]/30 border border-[#B08D57]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#FFFFFF]">
          Contact Us
        </h2>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center py-2 bg-green-600 rounded-lg px-3 mb-4 font-bold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Whatsapp
                </a>
            <a href={emailLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center py-2 bg-blue-600 rounded-lg px-3 mb-4 font-bold">
                  <Mail className="w-5 h-5 mr-2" />
                  intoretech@gmail.com
                </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-white transition-colors flex items-center py-2 bg-blue-600 rounded-lg px-3 font-bold">
                  <Facebook className="w-5 h-5 mr-2 " />
                  Facebook
                </a>
                <div className="bg-[#00ff00]/60 border border-[#ffffff] rounded-lg p-4 mt-6 text-center text-[#ffffff]/80 font-bold flex items-center justify-center hover:bg-[#00ff00]/80 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  0791905573
                </div>
      </div>
    </div>
  );
}