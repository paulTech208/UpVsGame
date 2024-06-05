import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Affiliate = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/62530d2a93779fc5be6f.png"
                blurLink="/images/become/62530d2a93779fc5be6f.png"
                containerClasses="w-[550px] aspect-[550/620]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-white text-[32px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              JOIN THE MULTI LEVEL AFFILIATE PARTNER PROGRAM!
            </p>
            <p className="font-barlow_black text-white text-[15px] md:text-[25px] py-[10px] md:py-[20px] leading-[110%] text-center md:text-left">
              {`IT'S VERY EASY! AND FREE!`}
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/become/62530d2a93779fc5be6f.png"
                  blurLink="/images/become/62530d2a93779fc5be6f.png"
                  containerClasses="w-[300px] aspect-[353/390]"
                />
              </div>
            )}
            <StartNowButton className="bg-gradient_red mb-[30px]" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Affiliate
