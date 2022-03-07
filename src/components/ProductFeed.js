import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    // console.log(products);
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {/* <h1>product here...</h1> */}

            {products
                .slice(0, 4)
                .map(({ title, id, category, description, image, price, rating }) => (

                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))}

            <img className="md:col-span-full justify-self-center" src="https://links.papareact.com/dyz" alt="" />

            <div className="md:col-span-2">
                {products
                    .slice(4, 5)
                    .map(({ title, id, category, description, image, price, rating }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            rating={rating}
                        />
                    ))
                }
            </div>

            {products
                .slice(5, products.length)
                .map(({ title, id, category, description, image, price, rating }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))
            }
        </div>
    )
}

export default ProductFeed
