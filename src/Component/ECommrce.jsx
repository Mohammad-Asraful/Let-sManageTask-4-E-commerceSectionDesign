import React from 'react'

import pic1 from '../Image/product.png'
import pic2 from '../Image/product (1).png'
import pic3 from '../Image/product (2).png'
import pic4 from '../Image/product (3).png'
import pic5 from '../Image/product (4).png'
import pic6 from '../Image/product (5).png'

const ECommrce = () => {
   return (
      <section>

         <div className='main w-full p-20'>

            {/* Header start */}
            <div className='text-center mb-20'>
               <p className='text-base mb-4'>Home &#62; What's New</p>

               <h1 className='text-[64px] font-bold mb-8'>New in&#8212;this week</h1>

               <div className='flex items-center justify-center gap-4 text-lg'>
                  <a className='py-[2px] px-4 rounded-full' href="@">All</a>
                  <a className='py-[2px] px-4 border-2 border-black rounded-full' href="@">Men's</a>
                  <a className='py-[2px] px-4 border border-black rounded-full' href="@">Women's</a>
                  <a className='py-[2px] px-4 rounded-full' href="@">Kids</a>
               </div>
            </div>
            {/* Header end */}

            {/* Product with sidabar start */}
            <div className='flex'>

               {/* sidebar start */}
               <div className='w-[300px]'>
                  {/* filter div start */}
                  <div>

                     <div className='mb-4'>
                        <div className='flex justify-between items-center mb-2'>
                           <h3 className='font-bold'>Filter</h3>
                           <p className='font-bold'>&#62;</p>
                        </div>
                        <hr />
                     </div>

                     <div className='mb-4 flex items-center justify-between'>
                        <p className='text-[#87878C]'>Applied filters</p>
                        <p className='text-[#D0011B]'>Clear all ×</p>
                     </div>

                     <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-1 justify-center items-center text-center w-max'>
                        <p className='mb-2 py-[2px] px-3 border border-black rounded-full'>Filter ×</p>
                        <p className='mb-2 py-[2px] px-3 border border-black rounded-full bg-black text-white'>Example ×</p>
                        <p className='mb-2 py-[2px] px-3 border border-black rounded-full'>Filter ×</p>
                        <p className='py-[2px] px-3 border border-black rounded-full'>Example ×</p>
                        <p className='py-[2px] px-3 border border-black rounded-full'>Filter ×</p>
                        <p className='py-[2px] px-3 border border-black rounded-full'>Example ×</p>
                     </div>

                  </div>
                  {/* filter div end */}

                  {/* category div start */}
                  <div className='mt-8 mb-8'>

                     <div className='mb-4'>
                        <div className='flex justify-between items-center mb-2'>
                           <h3 className='font-bold'>Category (2)</h3>
                           <p>⨇</p>
                        </div>
                        <hr />
                     </div>


                     <div className='p-4 flex justify-start items-center mb-2 hover:bg-[#F5F5F7] gap-2'>
                        <input checked type="checkbox" />
                        <p>Category (checked)</p>
                     </div>
                     <div className='p-4 flex justify-start items-center mb-2 hover:bg-[#F5F5F7] gap-2'>
                        <input checked type="checkbox" />
                        <p>Category (checked)</p>
                     </div>
                     <div className='p-4 flex justify-start items-center mb-2 hover:bg-[#F5F5F7] gap-2'>
                        <input type="checkbox" />
                        <p>Category (checked)</p>
                     </div>
                     <div className='p-4 flex justify-start items-center mb-2 hover:bg-[#F5F5F7] gap-2'>
                        <input type="checkbox" />
                        <p>Category (checked)</p>
                     </div>
                     <div className='p-4 flex justify-start items-center mb-2 hover:bg-[#F5F5F7] gap-2'>
                        <input type="checkbox" />
                        <p>Category (checked)</p>
                     </div>
                  </div>
                  {/* category div end */}

                  {/* Gender div start */}

                  <div className='mb-8'>

                     <div className='mb-4'>
                        <div className='flex justify-between items-center mb-2'>
                           <p className='font-bold'>Gender</p>
                           <p>⨇</p>
                        </div>
                        <hr />
                     </div>

                     <div>

                        <div className='flex gap-2 justify-start items-center p-4 hover:bg-[#F5F5F7]'>
                           <input checked type="checkbox" />
                           <p>Men's (checked)</p>
                        </div>

                        <div className='flex gap-2 justify-start items-center p-4 hover:bg-[#F5F5F7]'>
                           <input type="checkbox" />
                           <p>Women's (unchecked hover)</p>
                        </div>

                        <div className='flex gap-2 justify-start items-center p-4 hover:bg-[#F5F5F7]'>
                           <input type="checkbox" />
                           <p>Unless (unchecked)</p>
                        </div>

                     </div>

                  </div>

                  {/* Gender div end */}


                  {/* Price div start */}

                  <div className='pb-8'>
                     <div className='mb-4'>

                        <div className='flex justify-between items-center mb-2'>
                           <p className='font-bold'>price</p>
                           <p>⨇</p>
                        </div>
                        <hr />
                     </div>


                     <div className='flex items-center gap-2 mb-4'>
                        <input className='p-2 rounded inline-block w-1/2' type="text" value='$ 599' />
                        <input className='p-2 rounded inline-block w-1/2 text-gray-200' type="text" placeholder='AUD s' />
                     </div>

                     <div className='w-full h-1 bg-gray-200 flex justify-center items-center'>
                        <div className='w-6 h-6 bg-white border border-black rounded-full'></div>
                        <div className='w-[170px] h-full bg-black'></div>
                        <div className='w-6 h-6 bg-white border border-black rounded-full'></div>
                     </div>
                  </div>

                  {/* Price div end */}


                  {/* Color div start */}

                  <div>
                     <div className='flex justify-between items-center py-2 mb-5'>
                        <p className='font-bold'>Color(2)</p>
                        <p>⨇</p>
                     </div>

                     {/* color start */}
                     <div className='grid grid-cols-3'>

                        <div className='h-20 w-24 flex flex-col justify-center items-center bg-gray-200 rounded-lg p-2'>
                           <div className='w-8 h-8 bg-black rounded-full'></div>
                           <p>Black</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#B3B3B3] rounded-full'></div>
                           <p>Gray</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-white border rounded-full'><span className='flex justify-center items-center'>&#x2713;</span></div>
                           <p>White</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#0066CC] rounded-full'><span className='flex justify-center items-center'>&#x2713;</span></div>
                           <p>Blue</p>
                        </div>

                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-gradient-to-b from-[#F69113] via-yellow-400 to-green-400 rounded-full'></div>
                           <p>MultiColor</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#00A320] rounded-full'></div>
                           <p>Green</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#D0011B] rounded-full'></div>
                           <p>Red</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#F69113] rounded-full'></div>
                           <p>Orange</p>
                        </div>
                        <div className='h-20 w-24 flex flex-col justify-center items-center rounded-lg p-2'>
                           <div className='w-8 h-8 bg-[#F2B90D] rounded-full'></div>
                           <p>Yellow</p>
                        </div>

                     </div>
                     {/* color end */}

                  </div>

                  {/* Color div end */}


               </div>

               {/* sidebar end */}


               {/* products div start */}
               <div className='w-[800px] px-10'>

                  <div className='flex justify-end mb-6'>
                     <p>Sort by ⋁</p>
                  </div>


                  {/* porduct bar start */}

                  <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic1} alt="Product pic" />
                        <p className='text-red-600 text-xs'>Member Access</p>
                        <h3 className='text-lg font-bold'>Product Name</h3>
                        <small>A place of short description goes in here</small>
                        <h4 className='font-bold text-base'>$ 999</h4>
                     </div>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic2} alt="Product pic" />
                        <p className='text-red-600 text-xs'>New in</p>
                        <h3 className='text-lg font-bold'>Product Name</h3>
                        <small>A place of short description goes in here</small>
                        <h4 className='text-base font-bold'>$ 399</h4>
                     </div>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic3} alt="Product pic" />
                        <p className='text-red-600 text-xs'>Member Access</p>
                        <h3 className='text-lg font-bold'>Product Name</h3>
                        <small>A place of short description goes in here</small>
                        <h4 className='font-bold text-base'>$ 999</h4>
                     </div>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic4} alt="Product pic" />
                        <p className='text-red-600 text-sm'>10 Items left</p>
                        <h3 className='text-lg font-bold'>Available in</h3>
                        <small>A place of short description goes in here</small>
                        <h4 className='text-base font-bold'>M,L,XL</h4>
                     </div>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic5} alt="Product pic" />
                        <p className='text-red-600 text-sm'>Trending Now</p>
                        <h3 className='text-lg font-bold'>Product Name</h3>
                        <small>A place of short description goes in here</small>
                        <div className='flex gap-3 justify-start items-center font-bold text-base'>
                           <span className='opacity-60 line-through'>$ 2628</span>
                           <span className='text-red-600'>$ 1618</span>
                        </div>
                     </div>

                     <div className='h-[564px]'>
                        <img className='mb-4' src={pic6} alt="Product pic" />
                        <p className='text-red-600 text-xs'>Member Access</p>
                        <h3 className='text-lg font-bold'>Product Name</h3>
                        <small>A place of short description goes in here</small>
                        <h4 className='text-base font-bold'>$ 999</h4>
                     </div>

                  </div>

                  {/* porduct bar end */}


               </div>
               {/* products div end */}
            </div>
            {/* Product with sidabar end */}
         </div>

      </section>
   )
}

export default ECommrce