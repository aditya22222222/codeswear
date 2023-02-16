import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { icons } from 'react-icons';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from "react-icons/bs"
import { MdAccountCircle } from "react-icons/md"


const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')

        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')

        }

    }
    const ref = useRef();
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 sticky top-0 z-10 shadow-md bg-white'>
            <div className="logo">
                <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mx-5" >


                    <Image src="/logo.png" alt="" width={200} height={40}></Image>
                </Link>
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-6 font-bold md:text-md ' >
                    <Link href={"/tshirts"}><li>T-shirts</li></Link>
                    <Link href={"/hoodies"}><li>Hoodies</li></Link>
                    <Link href={"/stickers"}><li>Stickers</li></Link>
                    <Link href={"/mugs"}><li>Mugs</li></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 top-2 mx-5 cursor-pointer flex">
                <Link href={"/login"}> <MdAccountCircle className='text-3xl md:text-2xl mr-6' /></Link>
                <AiOutlineShoppingCart onClick={toggleCart} className='text-3xl md:text-2xl' />
            </div>
            <div ref={ref} className={`sideCart transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} transform fixed w-72 h-full  top-0 right-0 bg-pink-100 px-8 py-10`}>
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>

                    {Object.keys(cart).length == 0 && <div >No Items in the cart</div>}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex my-5">
                                    <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                    <div className='w-1/3 font-semibold items-center justify-center flex text-lg'> <AiFillMinusCircle onClick={() => {
                                        removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);

                                    }} className='text-pink-500 cursor-pointer ' /><span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => {
                                        addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant);

                                    }} className='text-pink-500 cursor-pointer' /> </div>

                                </div>
                            </li>)
                    })}

                </ol>
                <span className="total font-bold my-3 ">Subtotal : ₹{subTotal}</span>

                <Link href={"/checkout"}>   <button className="flex w-full text-center  my-4  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded "> <BsFillBagCheckFill className='my-1 mx-2 ' />Checkout</button></Link>
                <button onClick={clearCart} className=" flex w-full text-center text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"> Clear Cart</button>

            </div>
        </div>
    )
}

export default Navbar
