import React from 'react'
import mbtiverse from '../assets/images/mbtiverse.jpg'
import { Heart } from 'lucide-react';
import { Earth } from 'lucide-react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=" fixed top-0  z-50 navbar bg-gray-900 px-20 py-3">
  <div className="flex-1">
    <a className="btn btn-ghost montserrat-alternates-semibold tracking-wide text-white text-3xl">
      mbtiverse
    </a>
    <div className="form-control">
      <div className='flex items-center'>
        <Search size={32} strokeWidth={3} color="white" className='ml-24' />
        <input type="text" placeholder="Search your mbti..." className="input input-bordered rounded-full w-32 md:w-auto bg-gray-600 text-xl ml-4 " />
      </div>
    </div>
  </div>
  <div className="flex-none gap-2 text-white">
  <div className='flex items-center'>
    <Earth className='-mr-2' />
    <a className="btn btn-ghost text-xl">COMMUNITY</a>
  </div>
  <div className='flex items-center'>
    <Heart className='-mr-2' />
    <a className="btn btn-ghost text-xl">INBOX</a>
  </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-gray-900 text-xl">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar