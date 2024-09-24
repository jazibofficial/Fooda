import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import { foodData } from './Data/Data';

export default function App() {
  const [filteredData, setFilteredData] = useState(foodData);
  const [selectedData, setSelectedData] = useState("all");

  const selectType = (type) => {
    setSelectedData(type);

    if (type === "all") {
      setFilteredData(foodData);
    } else {
      const selectedData = foodData?.filter((item) => item.type.toLowerCase() === type.toLowerCase());
      setFilteredData(selectedData);
    }
  };

  return (
    <div>
      <Navigation setFilteredData={setFilteredData} selectType={selectType} />
      <Search foodData={filteredData} />
    </div>
  );
} 
