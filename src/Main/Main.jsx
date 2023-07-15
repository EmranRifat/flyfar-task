import React from 'react';
import Sidebar from '../Componants/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div  className="md:flex  min-h-screen justify-center">
          <div className=''>
            <Outlet/>
         </div>
            <div className=''>
            <Sidebar/>
            </div>
        </div>
    );
};

export default Main;