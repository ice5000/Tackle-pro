import React from "react";

function Token() {
  return (
    <>

      <div className="lg:h-[500px] h-[1400px] bg-[#0d111a]  flex justify-center items-center space-y-5 flex-col text-white text-sm">
        <div className=" header-fonts font-bold text-5xl ">ROADMAP</div>
        <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 ">
          <div className="sha border-2 border-blue-500 mt-5 ">
            <div className="road-head ">Phase 1 </div>
            <ul>
              <li>Idea & Research.</li>
              <li>Website Launch.</li>
              <li>Smart Contract Creation.</li>
              <li>Listing on Dex.</li>
              <li>Marketing Campaign.</li>
              <li>Onboarding Top Tier Influencers.</li>
              <li>CoinMarketCap & CoinGecko Listing.</li>
            </ul>
          </div>
          <div className="sha border-blue-500 border-2 space-y-6">
            <div className="road-head">Phase 2 </div>
            <ul>
              <li>Community Building & Expansion.</li>
              <li>Social Media Trending Buzz.</li>
              <li>Dextool, Dexview, Avedex, Bsc Trending.</li>
              <li>NFT launch.</li>
              <li>Strategic Partnerships.</li>
              <li>Talent Scouting.</li>
              <li>1k+ Holders.</li>
              <li>CEX (Tier 2) Listing.</li>
            </ul>
          </div>
          <div className="sha border-blue-500 border-2 space-y-6">
            <div className="road-head ">Phase 3 </div>
            <ul>
              <li>10k + Holders.</li>
              <li>Tackle Debit Card.</li>
              <li>Scouting Platform.</li>
              <li>AI Integration.</li>
              <li>Top Football Club Contracts.</li>
              <li>Buy Back and Burn.</li>
              <li>Tackle Merch.</li>
              <li>Second CEX (Tier 1) Listing.</li>
            </ul>
          </div>
          <div className="sha border-blue-500 border-2 space-y-6">
            <div className="road-head ">Phase 4 </div>
            <ul>
              <li>Soccer Academy.</li>
              <li>Philanthropic efforts.</li>
              <li>100k+ Holders.</li>
              <li>Global Dominance In Crypto.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Token;
