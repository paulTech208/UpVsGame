import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const GetMoney = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-white relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-3 justify-ccneter items-center gap-[40px]">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-black text-[36px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              HOW DO I GET MY MONEY AND WHEN?
            </p>
            <p className="font-barlow_black text-black text-600 text-[16px] md:text-[36px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              AUTOMATICALLY TO YOUR CRYTO WALLET EVERY DAY AT 12 GMT
            </p>
            {!isMobile && <StartNowButton />}
          </div>
          <div className="col-span-2 w-full h-full flex justify-center items-center">
            <Media
              link="/images/become/9d79d6c2ce7108b87ef7.png"
              blurLink="/images/become/9d79d6c2ce7108b87ef7.png"
              containerClasses="w-[280px] w-[690px] aspect-[690/500] mt-[20px]"
            />
          </div>
          {isMobile && (
            <div className="w-full flex justify-center items-center">
              <StartNowButton />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default GetMoney
