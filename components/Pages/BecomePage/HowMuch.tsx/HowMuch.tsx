import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const HowMuch = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full flex flex-col justify-ccneter items-center gap-[10px]">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-white text-[34px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] ">
            HOW MUCH I GET?
          </p>
          {isMobile ? (
            <Media
              link="/images/become/3498b3b29a220aa97b69.png"
              blurLink="/images/become/3498b3b29a220aa97b69.png"
              containerClasses="w-[280px] aspect-[353/670] mt-[5px]"
            />
          ) : (
            <Media
              link="/images/become/39d847b1118e6cd98137.png"
              blurLink="/images/become/39d847b1118e6cd98137.png"
              containerClasses="w-[990px] aspect-[920/500] mt-[15px]"
            />
          )}
          <StartNowButton className="bg-gradient_red text-white" />
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default HowMuch
