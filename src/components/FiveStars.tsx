import React from 'react'
import { Star } from 'lucide-react';
const FiveStars = () => {
  return (
  <div className="flex gap-0.5">
                    {/* filled */}
                      <Star className="h-4 w-4 text-green-600 fill-green-600"/>
      <Star className="h-4 w-4 text-green-600 fill-green-600"/>
      <Star className="h-4 w-4 text-green-600 fill-green-600"/>
      <Star className="h-4 w-4 text-green-600 fill-green-600"/>
      <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  </div>
  )
}

export default FiveStars