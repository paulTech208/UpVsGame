import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const SoEasy = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid md:grid-cols-5 justify-ccneter items-center">
          <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black text-white text-[42px] md:text-[90px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`ITS SO \n EASY!`}
            </p>
            {!isMobile && <PlayToButton className="bg-gradient_red text-white" />}
          </div>
          <div className="md:col-span-3 h-[150px] md:h-[386px] flex flex-col justify-stat items-center mx-[20px] my-5 md:my-0 p-1 bg-gradient_red">
            <div className="w-full h-full bg-black flex justify-center items-center ">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                type="button"
                className="rounded-full font-balow text-[22px] text-white
                           transition duration-[300ms] hover:scale-[1.1]"
              >
                <Media
                  link="/images/about/8f605546f51033bd99da.png"
                  blurLink="/images/about/8f605546f51033bd99da.png"
                  containerClasses="w-[52px] w-[100px] aspect-[1/1]"
                />
              </button>
            </div>
          </div>
          {isMobile && (
            <div className="w-full flex justify-center items-center">
              <StartNowButton className="bg-gradient_red mb-[30px]" />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default SoEasy
