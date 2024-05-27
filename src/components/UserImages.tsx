import React from 'react'
import Image from "next/image";
const UserImages = () => {
  return (
     <div className="flex -space-x-4 ">
                  {/* user images */}
                   <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user1"
                    width={40}
                    height={40}
                    />
                 <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user2"
                    width={40}
                    height={40}
                    />
                 
                    <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user3"
                    width={40}
                    height={40}
                    />
                     <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user4"
                    width={40}
                    height={40}
                    />
                     <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                    src="/users/user-5.jpg"
                    alt="user5"
                    width={40}
                    height={40}
                    />
                </div>
  )
}

export default UserImages