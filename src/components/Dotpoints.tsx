import React from 'react'
import { Check } from 'lucide-react';
const Dotpoints = () => {
  return (
     <div className="space-y-2">
                  {/* dot points */}
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Hight-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    5 years print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Modern iPhone models supported
                  </li>
                </div>
              
  )
}

export default Dotpoints