import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="overflow-hidden ">
    <div className="container px-4 mx-auto">
      <div className="mb-16 relative bg-indigo-50 overflow-hidden rounded-3xl">

        <div className="relative z-20 flex flex-wrap items-end -m-8">
          <div className="w-full lg:w-1/2 p-20 lg:pr-0 lg:pl-28 lg:py-28">
            <h2 className="mb-7 text-5xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">Understand customers better than anyone</h2>
            <p className="mb-10 text-lg text-gray-900 font-medium">Get the best-in-className group mentoring plans and professional benefits for your team</p>
            <div className="mb-6 md:inline-block">
              <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Get 1 Month Free Access</button>
            </div>
            <ul>
              <li className="inline-flex text-sm text-gray-500 font-medium">No credit card required</li>
              <li className="inline-flex text-black px-1">&bull;</li>
              <li className="inline-flex text-sm text-gray-500 font-medium">Cancel anytime</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <img src="flaro-assets/images/headers/profiles.png" alt=""/>
          </div>
        </div>
      </div>   
    </div>
  </div>
  )
}

export default Hero