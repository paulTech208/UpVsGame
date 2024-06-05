import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Investment = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-3 justify-ccneter items-center">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/9f86d1f7f9f374fd0c4a.png"
                blurLink="/images/howToPlay/9f86d1f7f9f374fd0c4a.png"
                containerClasses="w-[300px] aspect-[3/5]"
              />
            </div>
          )}
          <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black  text-[34px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              INVESTMENT BAR <br /> SELECT YOUR <br /> INVESTMENT
            </p>
            {isMobile ? (
              <Media
                link="/images/howToPlay/c2c78fdaca02bc2db067.png"
                blurLink="/images/howToPlay/c2c78fdaca02bc2db067.png"
                containerClasses="w-[300px] aspect-[350/280] mt-[20px]"
              />
            ) : (
              <Media
                link="/images/howToPlay/759742c876e58a3ba8d7.png"
                blurLink="/images/howToPlay/759742c876e58a3ba8d7.png"
                containerClasses="w-[713px] aspect-[713/210] translate-x-[-50px] mt-[20px]"
              />
            )}
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Investment
