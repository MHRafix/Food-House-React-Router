import React, { useEffect, useState } from 'react';
import Card from '../FoodCard/Card';
import './Shop.css';
const Shop = () => {
    // Let's take am useState for store data to state 
    let [foods, setFoods] = useState([]);

    // Let's take a state for setDisplaySearchResult
    let [displaySearchResult, setDisplaySearchResult] = useState([]);
    // Let's use useEffect to load data from API
    useEffect( () => {
        // Let's make an url to load data from  Api
        fetch('./foods.json')
        .then(response => response.json())
        .then(foodsData => {
            setFoods(foodsData);
            setDisplaySearchResult(foodsData);
        });
    }, []);

    // Search event impletement 
    let handleSearch = (e) => {
    let handleSearchText = e.target.value;
    // console.log(handleSearchText);
    let searchResult = foods.filter(food => food.name.toLowerCase().includes(handleSearchText.toLowerCase()));
    setDisplaySearchResult(searchResult);    
}
    return (
      <section>
          <div className="shopSection">
              <div className="container px-4">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                         <h3 className="totalData">Total Food : {displaySearchResult.length}</h3>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                          <input type="search" onChange={handleSearch} placeholder="Search your food here..." className="searchIput" />
                      </div>
                  </div>
                  <div className="row">
                    {
                       displaySearchResult.map(food => <Card key={food.id} foodInfo={food} />)
                    }
                  </div>
              </div>
          </div>
      </section>
    );
};

export default Shop;