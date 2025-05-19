"use client";
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatWhatsApp  = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="916200309399" // Your WhatsApp number in international format
      accountName="PrianDigitech"
      chatMessage="Hello! How can we assist you today?"
      placeholder="Type your message..."
    />
  );
};

export default FloatWhatsApp;
