import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const JoinDown = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="!py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/0c30632fe75c9bcb5070.png"
                blurLink="/images/howToPlay/0c30632fe75c9bcb5070.png"
                containerClasses="w-[540px] aspect-[1/1]"
              />
            </div>
          )}
          <div className="md:col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              JOIN DOWN <br /> POOL IF YOU THINK BITCOIN IS GOING DOWN
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/97fdbc53dff7531a6312.png"
                  blurLink="/images/howToPlay/97fdbc53dff7531a6312.png"
                  containerClasses="w-[350px] aspect-[35/31] mt-[20px]"
                />
              </div>
            )}
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default JoinDown
