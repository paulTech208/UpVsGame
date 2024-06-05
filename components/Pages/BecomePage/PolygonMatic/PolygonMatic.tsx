import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const PolygonMatic = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_extra  text-[34px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px]">
              YOUR EARNINGS ARE IN POLYGON MATIC
            </p>
            <div
              className="font-barlow_bold text-[16px] md:text-[30px] leading-[120%] 
            flex flex-col justify-center items-start py-[20px]"
            >
              <p className="relative dot pl-[25px] dot pl-[25px]">TOP 10 CRYPTO TOKEN!</p>
              <p className="relative dot pl-[25px] dot pl-[25px]">#1 WEB3 BLOCKCHAIN!</p>
              <p className="relative dot pl-[25px] dot pl-[25px]">TRUSTED BY INSTAGRAM AND META!</p>
            </div>
            {isMobile && (
              <div className=" w-full flex justify-center items-center">
                <Media
                  link="/images/become/d5c0b32fafd725ed1100.png"
                  blurLink="/images/become/d5c0b32fafd725ed1100.png"
                  containerClasses="w-[300px] aspect-[353/300]"
                />
              </div>
            )}
            <StartNowButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/3d9fbe91064f02474521.png"
                blurLink="/images/become/3d9fbe91064f02474521.png"
                containerClasses="w-[530px] aspect-[530/550]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default PolygonMatic
