import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const PolygonMatic = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              POLYGON <br /> MATIC
            </p>
            <p className="font-barlow_extra font-100 text-[12px] md:text-[25px] leading-[100%] text-center md:text-left leading-[120%] mt-[30px]">
              THE OFFICIAL TOKEN TO PLAY THE GAME
            </p>
            <div className="font-barlow_bold text-[15px] md:text-[36px] leading-[120%] flex flex-col justify-center items-start py-[20px]">
              <p className="relative dot pl-[25px] dot pl-[25px]">TOP 10 CRYPTO TOKEN!</p>
              <p className="relative dot pl-[25px] dot pl-[25px]">#1 WEB3 BLOCKCHAIN!</p>
              <p className="relative dot pl-[25px] dot pl-[25px]">
                TRUSTED BY INSTAGRAM AND <br /> META!
              </p>
            </div>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/b0bb145cd52b752127d7.png"
                  blurLink="/images/howToPlay/b0bb145cd52b752127d7.png"
                  containerClasses="w-[300px] aspect-[350/380]"
                />
              </div>
            )}
            <PlayToButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/7ef0f96bfb8d6084e979.png"
                blurLink="/images/howToPlay/7ef0f96bfb8d6084e979.png"
                containerClasses="w-[540px] aspect-[540/570]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}
export default PolygonMatic
