import React from "react";

function Header() {
  return (
    <>
      <div className=" flex-col flex">
        <div className=" text-white items-center lg:top-96 hero-1  text-[28px] ">
          <div className="lg:justify-around flex lg:flex-row lg:mb-96 flex-col">
            <div className=""> Home</div>
            <div>Tokenomics</div>
            <div>Whitepaper</div>
            <div>FaQ</div>
            <div>
              <button className="border-2 w-24 rounded-lg ">Buy</button>
            </div>
          </div>
        </div>

        <div className="bg-[#0d111a] h-[390px] flex justify-center items-center">
          <div className="flex flex-col lg:mt-0 text-white space-y-3 justify-center items-center">
            <div className="header-fonts mx-5 text-center  font-bold lg:text-[30px] text-[15px]">
              Takoshi is finally the new coach of Tackle City, a struggling
              soccer <p></p>club in one of Europes's toughest leagues.
            </div>
            <div className="text-[10px] justify-center text-justify items-center flex lg:text-[14px] flex-col mx-7">
              Takoshi sets out to find the best soccer talents worldwide and
              works with each player to coax out their hidden talents and
              utilize their true potential. Using his <br></br>
              intense training camp, unorthodox methods and his knack for
              "practising for when the going gets tough," Takoshi is here to
              prove his team's skill against a host of <br></br>
              continental rivals with more capital and larger budgets. The goal
              is to discover their true potential and discover the most
              battle-hardened, self-confident soccer <br></br>
              player within the group. Only the best will be allowed to play
              with the team on the world stage.
            </div>
            <div className="text-[10px] mx-7 lg:text-[14px]">
              A few decades earlier, the Tackle team was considered one of the
              strongest football teams, but today the club is close to total
              collapse due to a lack of funds and years <br></br>
              of decay. It will be up to Takoshi and his youthful squad to
              restore Tackle to glory by winning the world's most prestigious
              Club Football championship.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131b2a] text-white lg:flex-row h-[700px] flex-col flex lg:space-x-24 lg:h-[500px] space-y-10 items-center justify-center ">
        <div className=" flex flex-col space-y-4 items-center">
          <div className="header-fonts text-[15px]font-bold lg:text-[30px]">
            Tackle, Time to take over
          </div>
          <div className="lg:text-[14px] mx-8 text-[10px]">
           <div className=" lg:-mr-[100px]">
           Step aside, Pepe, Inu. It's time for $Tackle to take over. Are you
           tired of memes with no real utility?
            </div>            
            <div className="">
            
              Don't let your memes be dreams. It's time to discover new football
              greats.
            </div>
          </div>
          <div className="lg:text-[14px] mx-8 text-[10px]">
            <div>
              We are trying to revolutionize the way young talented players get
              discovered. We
            </div>
            <div>
              aim to find the next Ronaldo or Messi before they ever step onto a
              football field.
            </div>
            Let's hit the world's villages, inner cities, and soccer playing
            grounds.Remember, if
            <div>if we stick and work together, WAGMI.</div>
          </div>
        </div>
        <div>
          <img
            src="/soccerboy.jpg"
            alt="soc"
            width={390}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
