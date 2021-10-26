import React, {useState} from 'react'
import Image from "next/image";
import Currency from 'react-currency-formatter';

function Product({ title, id, category, description, image, price, rating}) {

    const [hasPrime] = useState(Math.random() < 0.5);
    return (
        <div className="relative full-screen flex-col bg-white m-5  z-30 p-10">
            <p className='absolute top-2 right-2'>{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain"/>
           <h4 className="my-3">{title}</h4>
           <p className="text-yellow-500">{rating.rate}</p>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
               <Currency quantity={price} currency="GBP"/>
            </div>

           {hasPrime && (
               <div className="flex items-center space-x-2 -mt-5">
                 <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                 <p className="text-xs text-gray-500">Free Next-day Delivery</p>
               </div>
             
           )} 
           <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
