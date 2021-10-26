import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import './Single.css';
const Single = () => {
    // Let's take the selected food unique id
    let {foodId} = useParams();

    // Let's  call useState 
    let [singleFood, setSingleFood] = useState([]);

    // Use useEffect to load data 
    useEffect( () => {
       fetch("../foods.json")
       .then(response => response.json())
       .then(data => setSingleFood(data));
    }, []);

    if(singleFood.length){
        let selFood = singleFood.find(food => food.id === foodId);
        setSingleFood(selFood);
        
    }

    let handleCartBtn = () => {
        alert("I am currently working on it!");
    }

    return (
        <div className="singleFood">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="foodImage">
                            <img src={singleFood.image} alt="foodSingleImage" />
                        </div>
                    </div>
                     <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="detailsOfFood">
                            <h2 className="foodName">{singleFood.name}</h2>
                            <span className="salePrice">$ {singleFood.salePrice}</span>
                             <Rating className="foodRatting" readonly
                              initialRating={singleFood.ratting}
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                           /> <br />
                           <span className="stock">Stock : {singleFood.stock}</span> 
                            <span className="cat">Category : {singleFood.category}</span> <br /> 
                            <input type="number" value={"1"} className="quantity" /> <br />
                           
                           <button onClick={handleCartBtn} className="viewBtn">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 shortDesc">
                    <h2 className="descHeadline">Description</h2>
                    <p>{singleFood.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;