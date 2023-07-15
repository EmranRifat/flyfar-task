import { FaPlane } from "react-icons/fa";
import logo from "../../assets/download.jpg";
import Jfk from "../Jfk";
import Dac from "../Dac";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Details from "./Details";

const Home = () => {

  const [showDetail,setShowDetails]=useState(false)
  const [flight, setFlight] = useState("DacToJfk");

  console.log(showDetail);
  // decide what to render
  let content = null;
  if (flight === "DacToJfk") {
    content = (
      <>
        <Dac />
        <div className="w-42 px-12 mt-4 flex flex-col">
          <button onClick={() => setFlight("DacToJfk")}>
            <FaPlane
              className={`text-6xl ${
                flight === "DacToJfk" ? "text-gray-200" : ""
              }`}
            ></FaPlane>
          </button>
          <button onClick={() => setFlight("JfkToDac")}>
            <FaPlane
              className={`text-6xl rotate-180 ${
                flight === "JfkToDac" ? "text-gray-100" : ""
              }`}
            ></FaPlane>
          </button>
        </div>
        <Jfk />
      </>
    );
  }
  if (flight === "JfkToDac") {
    content = (
      <>
        <Jfk />
        <div className="w-42 px-12 mt-4 flex flex-col">
          <button onClick={() => setFlight("DacToJfk")}>
            <FaPlane
              className={`text-6xl ${
                flight === "DacToJfk" ? "text-gray-200" : ""
              }`}
            ></FaPlane>
          </button>
          <button onClick={() => setFlight("JfkToDac")}>
            <FaPlane
              className={`text-6xl rotate-180 ${
                flight === "JfkToDac" ? "text-gray-100" : ""
              }`}
            ></FaPlane>
          </button>
        </div>
        <Dac />
      </>
    );
  }

  return (
   <div>
     <div className="mt-4 max-w-full md:flex">
      <div className="card text-left  card-side   bg-base-100 ">
        <div className="w-42 pr-8">
          <img className="h-9" src={logo} alt="" />
          <h2 className="text-gray-600  mb-5 font-bold">
            Biman Bangladesh <br /> Airlines
          </h2>
          <p className="text-green-500 font-semibold">BG 178| W&BG 671 | E</p>
          <p>5H 35 MIN</p>
        </div>

        {content}
      </div>
      <Sidebar showDetail={showDetail} setShowDetail={setShowDetails}/>

    </div>
    {
    showDetail==true? <Details></Details>: " "
    }
   </div>

  );
};

export default Home;
