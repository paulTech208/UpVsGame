import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const StartRate = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-3 justify-ccneter items-center">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              Start Rate
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/8cbef738843ce5b0a3e9.png"
                  blurLink="/images/howToPlay/8cbef738843ce5b0a3e9.png"
                  containerClasses="w-[300px] aspect-[350/300] mt-[20px]"
                />
              </div>
            )}
            <PlayToButton />
          </div>
          {!isMobile && (
            <div className="col-span-2 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/80b57f1b46c4748ee8fa.png"
                blurLink="/images/howToPlay/80b57f1b46c4748ee8fa.png"
                containerClasses="w-[650px] aspect-[650/530]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default StartRate
