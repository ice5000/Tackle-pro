import React from 'react'


function Main() {
  return (
    <>
     <div className="bg-[#0d111a] text-white lg:flex-row lg:h-[500px] h-[850px] flex lg:space-x-64 flex-col items-center justify-center space-y-10">
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <div className="header-fonts font-bold lg:text-[30px]">Tackle, Talent Scouting</div>
          <div className='text-[10px] lg:text-[14px]'>
            We aim to discover and support talented soccer players lacking
            <br></br> opportunities due to socio-economic barriers.
          </div>
          <div className=" space-y-5 flex flex-col text-[10px]">
            <div className="flex flex-row items-center  ">
              <li className="ol-p "></li>
              <div className="lg:text-[14px]">
                We aim to help these players transition from obscurity to
                signing
                <br></br>professional contracts.
              </div>
            </div>
            <div className="flex flex-row items-center  ">
              <li className="ol-p"></li>
              <div className='lg:text-[14px]'>
                We profit from agent fees and commissions on player deals and
                use a<br></br>portion to buy back and burn $TACKLE tokens.
              </div>
            </div>
            <div>
              <div className="flex flex-row  items-center  ">
                <li className="ol-p"></li>
                <div className='lg:text-[14px]'>
                  We aspire to become the largest and most trusted decentralized
                  <br></br>scouting network worldwide, leveraging global
                  contacts in football.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center  ">
              <li className="ol-p"></li>
              <div className='lg:text-[14px]'>
                Through AI and personalized pitches, we intend to end the
                <br></br>malpractices of fraudulent scouts demanding exorbitant
                sums.
              </div>
            </div>
          </div>
        </div>
        <div >
          <img
            src="/soccboy2.jpg"
            width={400}
            height={400}
            alt=""
            className="rounded-lg "
          />
        </div>
      </div>


      <div className="bg-[#131b2a] text-white lg:flex-row h-[750px] flex-col flex lg:space-x-64 lg:h-[500px] space-y-10 items-center justify-center ">
        <div className=" flex flex-col lg:text-justify text-center space-y-4 items-center">
          <div className="header-fonts  flex items-center text-[15px] font-bold lg:text-[30px]">
            Fostering Community  Unity for Sporting <br></br> Revolution
          </div>
          <div className=' space-y-5 flex items-center flex-col '>

          <div className="lg:text-[14px]  space-y-5  text-[10px]">
           <div className=" ">
           We will strive to create a symbiotic relationship between our<br></br> community, the token, newly discovered talents, and agents. We <br></br> will work together so that everyone can thrive and have fun<br></br> together.

            </div>            
            <div className="">
            
            Never underestimate the power of community. Together, we can<br></br> achieve great things. We need to create a supportive and <br></br> dedicated community of holders ready to contribute towards <br></br> achieving the common goal.

            </div>
          </div>
          <div className=''>
          <div className="lg:text-[14px]  mx-8 text-[10px]">
            <div>Remember, if we stick together, everyone wins! So let’s join hands <br></br>and change the face of the sport.</div>
          </div>
          </div>
          </div>
        </div>
        <div>
          <img
            src="/stevenbills.jpg"
            alt="steve"
            
            className="rounded-lg w-[400px] h-[400px]"
          />
        </div>
      </div>

      <div className="bg-[#0d111a] text-white flex-col h-[300px] flex text-center space-y-2 items-center justify-center">
        <div className="text-green-700 text-[10px] font-bold">B&nbsp; E&nbsp; N&nbsp; E&nbsp; F&nbsp; I&nbsp; T&nbsp; S</div>
        <div className="header-fonts font-bold text-[40px]"> TACKLE Exclusive Club</div>
        <div className="text-[7px] lg:text-[8px] leading-4">The TACKLE official collection 10000 animated 3D NFT is Coming soon. By holding an NFT, you will get <br></br>
        exclusive access to future collections, real-world events & meetups, VIP Season Tickets for an unforgettable VIP <br></br>
         experience, and other VIP perks.
        </div>
      </div>
      
     
    </>
  )
}

export default Main
