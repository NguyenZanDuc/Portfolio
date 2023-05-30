"use client"
import React from 'react'

type Props = {
    data: string
}

const Client = ({data}: Props) => {
  return (
    <div>{data}</div>
  )
}

export default Client