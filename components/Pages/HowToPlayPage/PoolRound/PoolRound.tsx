import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const PoolRound = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/7d1ad44e1f172f7571e4.png"
                blurLink="/images/howToPlay/7d1ad44e1f172f7571e4.png"
                containerClasses="w-[490px] aspect-[490/500]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              POOL ROUND <br /> 30 SEC
            </p>
            <p className="font-barlow text-[15px] md:text-[36px] leading-[110%] pt-[10px] md:pt-[20px]">
              TIME TO PLACE A TRADE
            </p>
            <p className="font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[30px] md:mt-[30px]">
              15 SEC
            </p>
            <p className="font-barlow text-[15px] md:text-[36px] leading-[110%] pt-[10px] md:pt-[20px] text-center md:text-left">
              KNOCK OUT TIME AND WINNERS <br /> ANNOUNCEMENT!
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/5779d2203cfa44f6545f.png"
                  blurLink="/images/howToPlay/5779d2203cfa44f6545f.png"
                  containerClasses="w-[300px] aspect-[350/330] mt-[20px]"
                />
              </div>
            )}
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default PoolRound
