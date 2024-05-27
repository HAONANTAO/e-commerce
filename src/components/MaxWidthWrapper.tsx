import { cn } from '@/lib/utils'
import React from 'react'

type MaxWidthWrapperProps = { 
   className?: string,
  children?: React.ReactNode
}

const MaxWidthWrapper = ({className,children}:MaxWidthWrapperProps) => {
  return (
    // combine the classname
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>{children}</div>
  )
}

export default MaxWidthWrapper