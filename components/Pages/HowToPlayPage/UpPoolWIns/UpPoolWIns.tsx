import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const UpPoolWins = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-3 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-2 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/44d3cc522228e52dca05.png"
                blurLink="/images/howToPlay/44d3cc522228e52dca05.png"
                containerClasses="w-[560px] aspect-[560/560]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_bold  text-[15px] md:text-[36px] font-100 leading-[100%] text-center md:text-left leading-[90%] tracking-[0.1px] mt-[10px] md:mt-[30px]">
              HIGHER THAN START RATE
            </p>
            <p className="font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              UP POOL WINS
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/2ee5868d3598b86e5155.png"
                  blurLink="/images/howToPlay/2ee5868d3598b86e5155.png"
                  containerClasses="w-[300px] aspect-[350/340] mt-[10px]"
                />
              </div>
            )}
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default UpPoolWins
