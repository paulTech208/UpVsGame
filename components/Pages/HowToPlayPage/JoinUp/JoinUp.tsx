import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const JoinUp = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[20px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center">
          <div className="md:col-span-1 w-full flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p
              className="max-w-[800px] w-full font-barlow_black text-[36px] md:text-[82px] leading-[100%] 
            text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]"
            >
              JOIN UP POOL IF YOU THINK BITCOIN IS GOING UP
            </p>
          </div>
          {isMobile ? (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/d2fc04649f06aa38c879.png"
                blurLink="/images/howToPlay/d2fc04649f06aa38c879.png"
                containerClasses="w-[350px] aspect-[350/310] mt-[20px]"
              />
            </div>
          ) : (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/1da4c67cbf8c916a8ed7.png"
                blurLink="/images/howToPlay/1da4c67cbf8c916a8ed7.png"
                containerClasses="w-[530px] aspect-[530/560]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default JoinUp
