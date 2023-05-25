import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative py-4 mb-4  bg-transparent shadow-sm">
    <div className="container px-4 mx-auto">
      <div className="flex items-center">
        <p>Logo</p>
        <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
          <li className=" relative">
            <a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Featured</a>

          </li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Solutions</a></li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Products</a></li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Articles</a></li>
        </ul>
        <div className="hidden lg:block ml-auto">
          <div className="flex items-center">
            <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">Sign In</a>
            <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="#">
              <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
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