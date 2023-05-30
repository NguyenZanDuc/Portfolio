
import React from 'react'
import Search from './Search'
// import { motion } from 'framer-motion'
type Props = {}

const Navbar = (props: Props) => {

  return (
    <nav className="relative py-4 mb-4 bg-transparent shadow-sm">
    <div className="container px-4 mx-auto">
      <div className="flex items-center">
        <p>Logo</p>
        <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
          <li 
          className="relative " >
            <a className="inline-block text-sm font-medium text-gray-900 hover:text-orange-900 hover:scale-110" href="#">Featured</a>
          </li>
          <li><a className="inline-block text-sm font-medium text-gray-900 hover:text-orange-900" href="#">Solutions</a></li>
          <li><a className="inline-block text-sm font-medium text-gray-900 hover:text-orange-900" href="#">Products</a></li>
          <li><a className="inline-block text-sm font-medium text-gray-900 hover:text-orange-900" href="#">Articles</a></li>
        </ul>
        <div className="hidden ml-auto lg:block">
          
          <div className="flex items-center">
            <Search />
            <a className="inline-block text-sm font-semibold text-orange-900 mr-9 hover:text-gray-900" href="#">Sign In</a>
            <a className="relative inline-block px-4 py-3 overflow-hidden text-sm font-semibold text-orange-900 transition duration-300 border border-gray-200 rounded-md group hover:text-white" href="#">
              <div className="absolute top-0 w-full h-full transition duration-500 transform bg-orange-900 right-full group-hover:translate-x-full group-hover:scale-102"></div>
              <span className="relative">Create an account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar