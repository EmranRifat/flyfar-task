import React from 'react';

const Table2 = () => {
    return (
        <div className='md:flex'>
           <div >
           <div className='ml-8 py-8'>
<h2 className='bg-green-200 w-32'>cancellation</h2>
<p className='text-gray-500 text-left py-4'>Return Amount=Paid Amount= Airline Cancellation Fee</p>
            </div>
            <div className='ml-8 py-8'>
<h2 className='bg-green-200 w-32'>Re-Issue</h2>
<p className='text-gray-500 text-left py-4'>Re Issue Fee=Paid Amount= Airline Cancellation Fee</p>
            </div>
           </div>
           <div>
           <div className='ml-8 py-8'>
<h2 className='bg-green-200 w-32'>Void</h2>
<p className='text-gray-500 text-left py-4'>Return Amount=Paid Amount= Airline Cancellation Fee</p>
            </div>
            <div className='ml-8 py-8'>
<h2 className='bg-green-200 w-32'>Re-Fund</h2>
<p className='text-gray-500 text-left py-4'>Re Issue Fee=Paid Amount= Airline Cancellation Fee</p>
            </div>
           </div>
        </div>
    );
};

export default Table2;