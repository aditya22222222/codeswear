import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link'
import { BsFillBagCheckFill } from "react-icons/bs"


const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    return (
        <div className='container m-auto'>
            <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
            <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className="mx-auto flex">
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div class="px-2 w-full mb-2">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>

                <textarea cols="30" rows="2" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="mx-auto flex">
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">city</label>
                    <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="mx-auto flex">
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="px-2 w-1/2 mb-2">
                    <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">Pin Code</label>
                    <input type="text" id="pinCode" name="pinCode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
            <div className="sideCart  transform w-full  bg-pink-100 p-6 m-2">
                {/* <h2 className='font-bold text-xl text-center'>Shopping Cart</h2> */}

                <ol className='list-decimal font-semibold'>

                    {Object.keys(cart).length == 0 && <div >No Items in the cart</div>}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex my-5">
                                    <div className=' font-semibold'>{cart[k].name}</div>
                                    <div className='w-1/3 font-semibold items-center justify-center flex text-lg'> <AiFillMinusCircle onClick={() => {
                                        removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);

                                    }} className='text-pink-500 cursor-pointer ' /><span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => {
                                        addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);

                                    }} className='text-pink-500 cursor-pointer' /> </div>


                                </div>
                            </li>)
                    })}
                    <span className="total font-bold ">Subtotal : ₹{subTotal}</span>
                </ol>




            </div>
            <div className="mx-8">

                <Link href={"/checkout"}>   <button className="flex w-1/10 text-center  my-4  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded "> Pay ₹{subTotal}</button></Link>
            </div>
        </div>
    )
}

export default Checkout
