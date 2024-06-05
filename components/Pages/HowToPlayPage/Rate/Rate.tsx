import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Rate = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full flex md:grid grid-cols-2 justify-ccneter items-center md:gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/48d9fb5bcbc1c206b954.png"
                blurLink="/images/howToPlay/48d9fb5bcbc1c206b954.png"
                containerClasses="w-[550px] aspect-[550/520]"
              />
            </div>
          )}
          <div className="md:col-span-1 flex flex-col justify-center items-center md:items-start">
            <Media
              link="/images/howToPlay/58b0193cd1f5b1e6f417.svg"
              blurLink="/images/howToPlay/58b0193cd1f5b1e6f417.svg"
              containerClasses="w-[42px] md:w-[78px] aspect-[1/1] mb-[10px] md:mb-[20px]"
            />
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black  text-[38px] md:text-[38px] md:text-[82px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`LIVE BITCOIN \n RATE `}
            </p>
            <p className="font-barlow_black text-[16px] md:text-[25px] text-center md:text-center md:text-left py-[10px] md:py-[20px] leading-[110%]">
              {`THE LIVE BITCOIN RATE THAT \n ANNOUNCES THE WINNERS`}
            </p>
            {isMobile && (
              <div className="w-full h-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/48d9fb5bcbc1c206b954.png"
                  blurLink="/images/howToPlay/48d9fb5bcbc1c206b954.png"
                  containerClasses="w-[280px] aspect-[350/320]"
                />
              </div>
            )}
            <PlayToButton className="bg-gradient_red text-white mb-[50px]" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Rate
