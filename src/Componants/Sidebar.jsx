import React from 'react';

const Sidebar = () => {
    return (
        <div className='mt-4 border-l '>
       <div className="card w-42 bg-base-100 ">
  <div className="">
    <h2 className=" text-3xl mb-14 font-semibold text-gray-600 ">$1850</h2>
      <button className="btn btn-accent btn-sm px-4 text-white rounded-3xl">Book Now</button>
  </div>
  <button className='pt-4 text-gray-600'>Flight Details</button>

</div>
        
      </div>
    );
};

export default Sidebar;