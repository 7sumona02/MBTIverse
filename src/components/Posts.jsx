import React from 'react';
import { Ellipsis, Forward, Heart, MessageCircle } from 'lucide-react';

const Posts = () => {
  return (
    <div className="w-1/2 p-6 ml-[550px]">
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="card card-compact w-[700px] bg-gray-200 pb-6">
          <div className='flex items-start gap-[460px]'>
            <div className="avatar flex items-center ml-4">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
              <div className='flex items-center pt-7 ml-4 leading-4'>
                <h4 className='text-xl font-semibold text-gray-800'>Akito Sora</h4>
                <p className='font-semibold text-gray-400'>6 minutes ago</p>
              </div>
            </div>
            <div>
              <Ellipsis className='mt-6' />
            </div>
          </div>
          <div className="card-body">
            <p className='text-xl text-gray-600 font-semibold leading-6'>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <div className='card-gallery flex gap-2 px-4 pt-4'>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card bg-base-100 image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  /></figure>
            <div className="card-body">
              <h2 className="card-title text-4xl ml-[65px] mt-6">+3</h2>
            </div>
          </div>
          </div>

          <div className='flex items-center gap-10 ml-4 mt-6 text-xl'>
           <div className='flex gap-2'>
            <Heart size={25} />
            <p className='font-semibold'>342</p>
           </div>
           <div className='flex gap-2'>
            <MessageCircle size={25} />
            <p className='font-semibold'>50</p>
           </div> 
           <div className='flex gap-2'>
            <Forward size={25} />
            <p className='font-semibold'>10</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
