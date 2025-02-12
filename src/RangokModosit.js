import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from "./Navbar";

export default function RangokModosit({ navigation }) {
  const [username, setUsername] = useState('');
  const [rang, setRang] = useState('');
  const [error, setError] = useState('');



  return (
    <div>
        <Navbar />
      <h1>Rangok Módosítása</h1>
    
    </div>
  );
};
