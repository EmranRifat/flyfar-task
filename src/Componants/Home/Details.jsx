import React from 'react';
import logo from "../../assets/download.jpg";
import Dac from '../Dac';
import Jfk from '../Jfk';
import { CgArrowLongRight } from "react-icons/cg";

const Details = () => {
    return (
        <div>
            <div className="mt-2 max-w-full md:flex">
      <div className="card text-left  card-side   bg-base-100 ">
        
        <div className="w-42 pr-8">
          <img className="h-9" src={logo} alt="" />
          <h2 className="text-gray-600  mb-5 font-bold">
            Biman Bangladesh <br /> Airlines
          </h2>
          <p className="text-green-500 font-semibold">BG 178| W&BG 671 | E</p>
          <p>5H 35 MIN</p>
        </div>
        <Dac></Dac>
        <div>
            <CgArrowLongRight className='text-7xl mx-10'></CgArrowLongRight>
        </div>

        <Jfk></Jfk>

      </div>
      </div>
        </div>
    );
};

export default Details;