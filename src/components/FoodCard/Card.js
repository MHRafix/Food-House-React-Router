import React from 'react';
import Rating from 'react-rating';
import {useHistory} from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    // Let's destructuring the food data 
       let {id, name, image, regularPrice, salePrice, ratting} = props.foodInfo;
       let history = useHistory();
       let handleView = () => {
        history.push(`/foods/${id}`);
       }
       return (
        <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="foodCard">
            {/* <span className="saleBadge">- 45%</span>  <br /> */}
            <img  src={image} alt="foodImage" />
            <h3 className="foodTitle">{name}</h3>
            <span className="regularPrice">$ {regularPrice}</span>
            <span className="salePrice">$ {salePrice}</span> <br />
            <Rating className="foodRatting" readonly
                initialRating={ratting}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
          />
          <br />
          {/* <button className="viewBtn">Quick View</button> */}
          <button onClick={handleView} className="viewBtn">Quick View</button>
        </div>
    </div>
    );
};

export default Card;