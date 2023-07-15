import React from 'react';

// eslint-disable-next-line react/prop-types
const Sidebar = ({setShowDetail,showDetail}) => {
    return (
        <div className='mt- border-l '>
       <div className="card w-42 bg-base-100 ">
  <div className="">
    <h2 className=" text-3xl mb-14 font-semibold text-gray-600 ">$1850</h2>
      <button className="btn btn-accent btn-sm px-4 text-white rounded-3xl">Book Now</button>
  </div>
{
  showDetail==true?   <button onClick={()=>setShowDetail(false)} className='pt-4  text-gray-700 '>Hide Details</button>
 : " "

}
{
  showDetail==false?   <button onClick={()=>setShowDetail(true)} className='pt-4  text-gray-700 '>Flight Details</button>:" "

}
</div>
        
      </div>
    );
};

export default Sidebar;