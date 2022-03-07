import React, { useState } from 'react'
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { StarIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';  // import action

const MAX_RATING = 5;
const MIN_RATING = 2;
function Product({ title, id, category, description, image, price }) {
    const dispatch = useDispatch()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product = { title, id, category, description, image, price };
        // sending the product as an action to the redux store     .. basket slice
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative full-screen flex-col bg-white m-5  z-30 p-10">
            <p className='absolute top-2 right-2'>{category}</p>

            <div className="flex justify-center">
                <Image src={image} height={200} width={200} objectFit="contain" />
            </div>

            <h4 className="my-3">{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))}
            </div>
            {/* <p className="text-yellow-500">{rating.rate}</p> */}
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="GBP" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                </div>

            )}
            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
