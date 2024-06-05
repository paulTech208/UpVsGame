import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const UpPool = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/f033648080452c67ce39.png"
                blurLink="/images/howToPlay/f033648080452c67ce39.png"
                containerClasses="w-[540px] aspect-[540/490]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              UP POOL <br /> POTENTIAL <br /> PROFIT
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/4a7444937e85b391b078.png"
                  blurLink="/images/howToPlay/4a7444937e85b391b078.png"
                  containerClasses="w-[300px] aspect-[350/340] mt-[20px]"
                />
              </div>
            )}
            <PlayToButton className="bg-gradient_red text-white" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}
export default UpPool
