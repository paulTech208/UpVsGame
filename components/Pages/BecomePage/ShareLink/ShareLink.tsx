import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const ShareLink = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/38875e61b67b47adb398.png"
                blurLink="/images/become/38875e61b67b47adb398.png"
                containerClasses="w-[490px] aspect-[490/490]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-white text-[32px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              SHARE THE <br />
              LINKS THROUGH <br />
              YOU SOCIAL <br />
              NETWORK <br />
              CHANNELS
            </p>
            <p className="font-barlow font-600 text-white text-[16px] md:text-[36px] py-[20px] leading-[110%]">
              TIKTOK, INSTAGRAM, FACEBOOK, <br />
              TELEGRAM, ANS MORE
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/become/23f356c29562e03234e4.png"
                  blurLink="/images/become/23f356c29562e03234e4.png"
                  containerClasses="w-[293px] aspect-[293/350]"
                />
              </div>
            )}
            <StartNowButton className="bg-gradient_red text-white mb-[30px]" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default ShareLink
