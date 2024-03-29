import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice';
import Currency from 'react-currency-formatter';
// import { useSession } from "next-auth/client"

function checkout() {
    const items = useSelector(selectItems);
    // const session = useSession();
    const total = useSelector(selectTotal);

    return (
        <div className='bg-gray-100'>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-md'>
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit='contain'
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b shadow-sm pl-2 pb-4'>
                            {items.length === 0 ? "Your Amazon Basket is Empty" : "Shopping Basket"}
                        </h1>

                        {items.length > 0 && items.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>

                {/* right */}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>
                                Subtotal ({items.length} items):{" "}
                                <span className='font-bold'>
                                    <Currency quantity={total} Currency="GBP" />
                                </span>
                            </h2>
                            <button
                                // disabled={!session}
                                className={`button mt-2 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'}`}>
                                {/* {!session ? 'Sign in to checkout' : "Proceed to checkout"} */}
                                checkout
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default checkout