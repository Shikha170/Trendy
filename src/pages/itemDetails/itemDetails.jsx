import React, { useState,ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { cloth_list } from '../../assets/assets';
import './itemDetails.css'
import Products from '../../components2/Products/Products';
import Recommended from '../../components2/Recommended/Recommended';
import Sidebar from '../../components2/Slidebar/Sidebar';
import Card from '../../components2/Card';
import Navbar from '../../components/Navbar/Navbar';

const ItemDetails = () => {
 
  const { itemName } = useParams();
  const item = cloth_list.find((cloth) => cloth.menu_name === itemName);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = item.col.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filteredData = (items, selected, searchQuery) => {
    let filteredProducts = items;

    if (searchQuery) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star,reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(item.col, selectedCategory, query);

let categories=[];
if(item.menu_name==="Women 's Ethenic Wear"){
  categories=["Cotton","Georgette","Chiffon","Dupatta","Jacket","Shrug"]
}
if(item.menu_name==="Casual wear"){
  categories=["Cotton","Denim","Top","Jeans"]
}
if(item.menu_name==="Men's Activewear"){
  categories=["Trackpant","T-Shirt","Shorts"]
}
if(item.menu_name==="Men's Footwear"){
  categories=["Sneakers","Flats","Sandals","Heels"]
}
let companies=[];
if(item.menu_name==="Women 's Ethenic Wear"){
  companies=["Top-Brands","SuperTrendy-Brands","Premium-Brands"]
}
if(item.menu_name==="Casual wear"){
  companies=["Top-Brands","SuperTrendy-Brands","Premium-Brands"]
}
if(item.menu_name==="Men's Activewear"){
  companies=["Jockey","Vimal-Jonney","Us-POLO","Van-Heusen","Top-Clothes"]
}
if(item.menu_name==="Men's Footwear"){
  companies=["Nike","Puma","Adidas","Vans"]
}

  return (
    <div >
      <Sidebar handleChange={handleChange} categories={categories}/>
      <Navbar query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} companies={companies}/>
      <Products result={result}/>
    </div>

  );
};

export default ItemDetails;