import React from 'react'

const Boards = () => {
  return (
    <div>
    <div className="w-1/4 h-screen p-6 overflow-y-auto fixed">
    <button className="btn border-transparent text-2xl text-white bg-orange-400 hover:bg-orange-500 w-[413px] mb-6">Create a Post!</button>
        <div className='bg-gray-700 rounded-xl text-white p-10 overflow-y-hidden'>

            <h2 className='text-2xl font-semibold'>Boards you can join</h2>
            <div className='mt-10'>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">16 Types
                    </div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">12k</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 ml-2 shadow bg-base-100 rounded-box w-52 text-gray-800 text-[16px]">
                        <li><a>INTP</a></li>
                        <li><a>INTJ</a></li>
                        <li><a>ENTP</a></li>
                        <li><a>ENTJ</a></li>
                        <li><a>...</a></li>
                    </ul>
                    </div>
                </div>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">Enneagram</div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">6k</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 ml-2 shadow bg-base-100 rounded-box w-52 text-gray-800 text-[16px]">
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>...</a></li>
                    </ul>
                    </div>
                </div>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">Anime</div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">20k</div>
                    </div>
                </div>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">Music</div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">10k</div>
                    </div>
                </div>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">Books</div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">10k</div>
                    </div>
                </div>
                <div className="mb-1 -ml-4"><div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-transparent hover:bg-gray-600 text-xl text-white">Friends</div>
                    <div className="badge badge-md font-semibold bg-gray-100 border-transparent">10k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Boards