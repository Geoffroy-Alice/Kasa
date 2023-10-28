import React from "react";
import orangeStar from '../../assets/star-orange.png';
import greyStar from '../../assets/star-grey.png';
import '../../style/Accommodation/Rating.css';

function Rating({rating}) {
    const number = [1, 2, 3, 4, 5]

    return (
        <div className="star-rating">
            {number.map((el, i) => 
                rating >= el ? (
                    <img src={orangeStar} key={i} className="star-rating-orange" alt="star-orange"/>
                ) : (
                    <img src={greyStar} key={i} className="star-rating-grey" alt="star-grey"/>
                )           
            )}
        </div>
    )
}

export default Rating;