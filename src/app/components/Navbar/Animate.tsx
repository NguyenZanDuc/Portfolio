"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Animate = (props: Props) => {
  return (
    <motion.div className='w-screen h-screen bg-white' initial={{opacity:0.5}} whileInView={{translateX:"100%", transition:{duration:1,delay:0.2}}} >
    </motion.div>
  )
}

export default Animate