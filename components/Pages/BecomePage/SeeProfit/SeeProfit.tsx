import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import Media from "@/shared/Media"

const SeeProfit = () => (
  <div className="w-full bg-white relative">
    <HowToPageContainer className="md:py-[80px]">
      <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-black text-[36px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            HOW I SEE MY PROFIT?
          </p>
          <StartNowButton />
        </div>
        <div className="col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/become/fcbd73679445ee335853.png"
            blurLink="/images/become/fcbd73679445ee335853.png"
            containerClasses="w-[580px] aspect-[580/580]"
          />
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default SeeProfit
