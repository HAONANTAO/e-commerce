import React from 'react'
import FiveStars from './FiveStars'
import { Check } from 'lucide-react'

const CustomersReview = () => {
  return (
    <>
     <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:Pr-20">
              <div className="flex gap-0.5 mb-2">
                <FiveStars/>
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on the design. Had the case for two and half months now and
                  <span className="p-0.5 bg-orange-500 text-white">the image is super clear</span>,on the case i had before the image was already fading after a month. I&apos;m very happy with my purchase.&quot;
              </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-1.png" alt="user"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    {/* stroke描边 */}
                    <Check className="h-4 w-4 stroke-[3px] text-green-600 "/>
                    <p className="text-sm"> Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
     </div>
     <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:Pr-20">
              <div className="flex gap-0.5 mb-2">
                <FiveStars/>
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I usually keep my phone  together with my keys in my pocket and that let to some pretty heavy scratch marks on ally my last phone case. This one, besides a barely noticeable scratch on the corner
                  <span className="p-0.5 bg-orange-500 text-white">looks brand new after few months</span>I dig it&quot;
              </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-4.jpg" alt="user"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    {/* stroke描边 */}
                    <Check className="h-4 w-4 stroke-[3px] text-green-600 "/>
                    <p className="text-sm"> Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
     </div>
      </>
  )
}

export default CustomersReview