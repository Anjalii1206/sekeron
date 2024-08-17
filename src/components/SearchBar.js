import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop:'30px'}}>
      <Input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} style={{ marginRight: '10px',width:'25%' }} />
      <Button type="submit" bg="#AD49E1" color="white" style={{ width:'15%' }}>Search</Button>
    </form>
  );
}

export default SearchBar;
