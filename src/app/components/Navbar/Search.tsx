"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
    const route = useRouter()
    const searchPramma = useSearchParams()

  return (
    <div className='flex gap-2'>
         <input type="number" className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" placeholder="width" />
    </div>
    
  )
}

export default Search