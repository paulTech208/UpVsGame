import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Connect = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-white">
      <HowToPageContainer>
        <div className="w-full flex flex-col justify-center items-center md:items-start py-[30px] md:py-[100px] relative">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-[34px] md:text-[80px] leading-[100%] text-center md:text-center md:text-left mt-[30px]">
            CONNECT YOUR WALLET, OR CREATE SOCIAL WALLET!
          </p>
          {isMobile ? (
            <div className="w-full flex justify-center items-center mt-[10px]">
              <Media
                link="/images/howToPlay/4d0cc150e5d6d5528207.png"
                blurLink="/images/howToPlay/4d0cc150e5d6d5528207.png"
                containerClasses="w-[350px] aspect-[350/400]"
              />
            </div>
          ) : (
            <div className="w-full flex justify-center items-center ">
              <Media
                link="/images/howToPlay/128fb1792b76f7306bea.png"
                blurLink="/images/howToPlay/128fb1792b76f7306bea.png"
                containerClasses="w-[1000px] aspect-[1000/580]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Connect
