import React from "react";

function FaQ() {
  return (
    <>
    <div className="lg:h-[400px] h-[500px]  flex justify-center items-center flex-col bg-[#131b2a] text-white space-y-10">
      <div className="flex lg:flex-row space-x-1 lg:text-[40px]">
        <div>Frequently Asked </div>
        <div className="brightness-200 text-blue-950">Questions</div>
      </div>

      <div className="divide-y-[1px] lg:w-[1200px] divide-[#fff]">
        <div className="container ">
          <details>
            <summary>
              WHO IS THE TEAM BEHIND TACKLE,AND IS THE CONTRACT SECURE?
            </summary>
            <div className="lg:text-[15px] text-[10px]">
            Tackle is 100% community-driven, with the team/developers leading the project alongside the community. We will do a KYC (Know Your Customer) verification with a Pinksale-approved KYC firm, and the contract will be written and Audited by SAFU (Secure Asset Fund for Users) Devs from Pinksale. To view the KYC, you can click here. Our Extensive list of partners and marketing connections are ready to back us.
            </div>
          </details>
        </div>
        <div className="container">
          <details>
            <summary>$TACKLE CONTRACT AUDITED?</summary>
            <div className="lg:text-[15px] text-[10px]">
              Contract is <em>$SAFU</em>&nbsp;<em>$HOLD,</em> &nbsp;TACKLE have
              you covered.
            </div>
          </details>
        </div>
        <div className="container">
          <details>
            <summary>DISCLAIMER OF LIABILITY.</summary>
            <div className="lg:text-[15px] text-[10px]" >
              Contract is <em>$SAFU</em>&nbsp;<em>$HOLD,</em> &nbsp;TACKLE have
              you covered.
            </div>
          </details>
        </div>
        
        
        <div className="container  ">
          
            
            <div>
            </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default FaQ;
