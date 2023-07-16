import React, { useState } from "react";
import logo from "../../assets/download.jpg";
import Jfk from "../Jfk";
import { CgArrowLongRight } from "react-icons/cg";
import Tabs from "./Tabs";

const Details = () => {
    const [table,setTable]=useState(false)
    const [fee,setFee]=useState(false)

  return (
    <div>
      <div className="">
      <Tabs setFee={setFee} setTable={setTable}></Tabs>

       {
        table==false?<>
        <div className=" md:flex ">
          <div className="card text-left  rounded-none card-side   bg-base-100 ">

            <div className=" pr-8">
              <img className="h-9" src={logo} alt="" />
              <h2 className="text-gray-600  mb-5 font-bold">
                Biman Bangladesh <br /> Airlines
              </h2>
              <p className="text-green-500 font-semibold">
                BG 178| W&BG 671 | E
              </p>
              <p>5H 35 MIN</p>
            </div>

            <div >
              <h2 className=" text-xl text-gray-600 mb-5 font-semibold">DAC</h2>
              <p className="text-gray-400 font-semibold">
                Hazrat Shajalal Inti Airport
              </p>
              <p className="text-green-500 font-semibold">19:05</p>
              <p className="text-gray-400 text-sm">SUN 4TH JUL 2022</p>
              <div className="flex space-x-12"></div>
            </div>
            <div>
              <CgArrowLongRight className="lg:text-7xl hidden lg:block lg:mx-10"></CgArrowLongRight>
            </div>

            <div>
              <h2 className=" text-xl mb-5 font-semibold text-gray-600">DXB</h2>
              <p className="text-gray-400 font-semibold">
                JFK Kenney Inti Airport
              </p>
              <p className="text-green-500 font-semibold ">12:05</p>
              <p className="text-gray-400 font-semibold">MON 6TH JUL ,2022</p>

              <div className="flex space-x-12">
                <p className=" text-sm text-gray-400 mt-6">Baggage: 45 KG</p>
              </div>
            </div>
          </div>
        </div>
        <p className="lg:text-center w-[763px] bg-base-100  ">
        <span className="bg-blue-200 px-14 text-sm">  Change plane at International [Kwait].connection time 04:10am</span>
        </p>

        <div className=" md:flex">
          <div className="card text-left rounded-none card-side   bg-base-100 ">
            <div>
            <div className="w-42 pr-8">
              <img className="h-9" src={logo} alt="" />
              <h2 className="text-gray-600  mb-5 font-bold">
                Biman Bangladesh <br /> Airlines
              </h2>
              <p className="text-green-500 font-semibold">
                BG 178| W&BG 671 | E
              </p>
              <p>5H 35 MIN</p>
            </div>
            </div>

            {/* <Dac></Dac> */}
            <div className="w-42">
              <h2 className=" text-xl text-gray-600 mb-5 font-semibold">DXB</h2>
              <p className="text-gray-400 font-semibold">
                Hazrat Shajalal Inti Airport{" "}
              </p>
              <p className="text-green-500 font-semibold">19:05</p>
              <p className="text-gray-400 text-sm">SUN 4TH JUL 2022</p>
              <div className="flex space-x-12"></div>
            </div>
            <div>
              <CgArrowLongRight className="text-7xl  hidden lg:block mx-10"></CgArrowLongRight>
            </div>

            <Jfk></Jfk>
          </div>
        </div>
        </>:" "
       }
      </div>
    </div>
  );
};

export default Details;
