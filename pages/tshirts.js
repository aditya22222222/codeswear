import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Tshirts = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-4">
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Wear the code</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </Link>

                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Wear the code</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-4 my-4">
                            <Link className="block relative  rounded overflow-hidden" href='/product/wear-the-code'>
                                <img alt="ecommerce" className="h-[36vh] block" src="https://m.media-amazon.com/images/I/71WmwSot-vL._UX569_.jpg" />
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tshirts
