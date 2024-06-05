import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const DownPool = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              DOWN POOL <br /> POTENTIAL <br /> PROFIT
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/4898a4a7e9aff49acbab.png"
                  blurLink="/images/howToPlay/4898a4a7e9aff49acbab.png"
                  containerClasses="w-[300px] aspect-[350/350] mt-[20px]"
                />
              </div>
            )}
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/c592ebd4aeb6c46ffb09.png"
                blurLink="/images/howToPlay/c592ebd4aeb6c46ffb09.png"
                containerClasses="w-[540px] aspect-[540/490]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default DownPool
