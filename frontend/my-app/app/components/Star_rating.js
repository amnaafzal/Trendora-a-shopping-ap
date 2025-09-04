
import React from 'react'

const Star_rating = ({ rating }) => {

    const star = []

    for (let i = 1; i <= 5; i++) {
        star.push(
            <span key={i} className={`ri-star${i < rating ? '-fill' : '-line'}`}></span>
        )
    }

    return (
        <div className='product_rating'>
            {star}
        </div>
    )
}

export default Star_rating
