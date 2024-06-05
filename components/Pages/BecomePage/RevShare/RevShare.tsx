import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const RevShare = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-white relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="text-shadow font-barlow_black text-black text-[34px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              GET REVSHARE ON YOUR FRIENDS PAID COMMISSION!
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/become/e670187ebd3b4ce58bf4.png"
                  blurLink="/images/become/e670187ebd3b4ce58bf4.png"
                  containerClasses="w-[620px] aspect-[620/520] mt-[10px]"
                />
              </div>
            )}
            <StartNowButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/e670187ebd3b4ce58bf4.png"
                blurLink="/images/become/e670187ebd3b4ce58bf4.png"
                containerClasses="w-[620px] aspect-[620/520]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default RevShare
