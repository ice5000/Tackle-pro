import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Roadmap() {
  return (
    <>
      <div className="bg-[#0d111a] text-white flex-col lg:flex-row lg:h-[500px] h-[550px]  flex items-center justify-center   lg:space-x-10 space-y-14">
        <div className="space-y-5 justify-center items-center flex flex-col">
          <div className=" header-fonts lg:text-[30px] font-bold">
            TACKLE DEBIT CARD
          </div>
          <div className="lg:text-[14px] text-[10px]">
            Spend crypto like cash. Spend Anywhere, Anytime.<br></br>
            $TACKLE is here to bridge the gap between Crypto and <br></br>
            Fiat Transactions. With low fees, TACKLE Debit Card <br></br>
            allows users to seamlessly spend cryptocurrencies for everyday
            <br></br>
            purchases seamlessly.
          </div>
          <div className="space-y-5 flex   flex-col ">
            <div className="items-center justify-center flex lg:flex-row space-x-8 ">
              <div>
                <FaCheckCircle className=" text-green-800 w-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row  lg:text-[14px] text-[10px]">
                  <div>Use for online purchases or in-store shopping at </div>
                  <div className="font-bold text-[8px]">37 million merchant</div>
                </div>
                <div className="text-[10px] lg:text-[14px]">
                  locations worldwide.
                </div>
              </div>
            </div>
            <div className="items-center flex flex-row space-x-5  ">
              <div>
                <FaCheckCircle className=" text-green-800 w-5" />
              </div>
              <div className="text-[10px] lg:text-[14px]">
                Keep Your Money Safe. Hold and
                <span className="font-bold">Exchange Crypto</span> only when you
                need to.
              </div>
            </div>
            <div className="items-center flex flex-row  space-x-5 ">
              <div>
                <FaCheckCircle className=" text-green-800 w-5" />
              </div>
              <div className="lg:text-[14px] text-[10px]">
                All Funds are <span className="font-bold">SAFU</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:h-[600px] lg:w-[400px] justify-center w-[290px] items-center flex">
          <img id="animated-div" src="/card.png" alt="" />
        </div>
      </div>

      <div>
        <img src="/tokenomics.jpg" alt="" width={1550} />
      </div>
    </>
  );
}

export default Roadmap;
