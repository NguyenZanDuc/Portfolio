import React from 'react'
import Animate from '../Navbar/Animate'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="relative overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className="relative mb-16 overflow-hidden bg-indigo-50 rounded-3xl">

        <div className="relative z-20 flex flex-wrap items-end -m-8">
          <div className="w-full p-20 lg:w-1/2 lg:pr-0 lg:pl-28 lg:py-28">
            <h2 className="text-5xl font-bold leading-none mb-7 md:text-8xl xl:text-10xl font-heading tracking-px-n">Understand customers better than anyone</h2>
            <p className="mb-10 text-lg font-medium text-gray-900">Get the best-in-className group mentoring plans and professional benefits for your team</p>
            <div className="mb-6 md:inline-block">
              <button className="w-full px-6 py-4 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700" type="button">Get 1 Month Free Access</button>
            </div>
            <ul>
              <li className="inline-flex text-sm font-medium text-gray-500">No credit card required</li>
              <li className="inline-flex px-1 text-black">&bull;</li>
              <li className="inline-flex text-sm font-medium text-gray-500">Cancel anytime</li>
            </ul>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <img src="flaro-assets/images/headers/profiles.png" alt=""/>
          </div>
        </div>
      </div>   
    </div>
    <div className='absolute top-0 left-0 z-10 '>
      <Animate />
    </div>
  </div>
  )
}

export default Hero