'use client'
import React, { useRef } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {useInView} from 'framer-motion'

const PHONES = [
  "/testimonials/1.jpg",
   "/testimonials/2.jpg",
    "/testimonials/3.jpg",
     "/testimonials/4.jpg",
      "/testimonials/5.jpg",
       "/testimonials/6.jpg"
]
// <T>泛型 代表任何
function splitArray<T>(array: Array<T>, numParts:number){
    const result: Array<Array<T>> = [];

    for (let i = 0; i < array.length; i++) {
      const index = i%numParts
      if(!result[index]){
        result[index]=[]
      }
      result[index].push(array[i])
    }
    return result
}
function ReviewGrid(){
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef,{once:true,amount:0.4})

  const columns = splitArray(PHONES,3)
  return <div ref={containerRef} className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'></div>
}
const Reviews = () => {
  return (
    <MaxWidthWrapper className='relative max-w-5xl'>
      {/* 被屏幕阅读器忽略 */}
      <img aria-hidden="true" src="/what-people-are-buying.png" className="absolute select-none hidden xl:block -left-32 top-1/3"/>

    <ReviewGrid/>
    </MaxWidthWrapper>
  )
}

export default Reviews