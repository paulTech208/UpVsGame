import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"

const LeaderBoard = () => (
  <div className="w-full bg-white relative">
    <HowToPageContainer className="md:my-[80px]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className=" font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center mt-[10px] md:mt-[30px]">
          AFFILIATE LEADERBOARD
        </p>

        <StartNowButton label="Become an affiliate" className="mb-[50px]" />
      </div>
    </HowToPageContainer>
  </div>
)

export default LeaderBoard
