'use client'
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {useInView} from 'framer-motion'
import { cn } from '@/lib/utils'

const PHONES = [
  "/testimonials/1.jpg",
   "/testimonials/2.jpg",
    "/testimonials/3.jpg",
     "/testimonials/4.jpg",
      "/testimonials/5.jpg",
       "/testimonials/6.jpg"
]

function ReviewColumn({
    reviews,className,reviewClassName,msPerPixel=0
}:{
  reviews: string[],
  className?: string,
  reviewClassName?:(reviewIndex: number)=> string,
  msPerPixel?: number
}){
  const columnRef = useRef<HTMLDivElement | null>(null)
  const [columnHeight,setColumnHeight] =useState(0) 
  const duration =`${columnHeight * msPerPixel}ms`

  useEffect(()=>{
    if(!columnRef.current) return

    const resizeObserver = new window.ResizeObserver(()=>{
      setColumnHeight(columnRef.current?.offsetHeight?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return ()=>{
      resizeObserver.disconnect()
    }
  },[])
  return <div ref={columnRef} className={cn("animate-marquee space-y-8 py-4",className)} style={{"--marquee-duration": duration} as React.CSSProperties}>
    {reviews.concat(reviews).map(imgSrc,reviewIndex)=>(
      <Review/>
    )}
  </div>
}
interface ReviewProps extends HTMLAttributes<HTMLDivElement>{
  imgSrc: string
}
function Review({imgSrc,className,...props}:ReviewProps){
  return <div className={cn("animate-fade-in rounded-[2.25rem] bg-white  p-6 opacity-0 shadow-xl shadow-slate-900/5",className)} {...props}> </div>
}
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
  // 3 columns
  const columns = splitArray(PHONES,3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2],2)


  return <div ref={containerRef} className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'>
    {isInView? <>
    <ReviewColumn reviews={[]}/>
    </>:null}

  </div>
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