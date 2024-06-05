import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const MoreMoney = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/38875e61b67b47adb398.png"
                blurLink="/images/become/38875e61b67b47adb398.png"
                containerClasses="w-[530px] aspect-[53/45]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-white text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              HOW DO I MAKE <br />
              MORE MONEY
            </p>
            <p className="text-shadow font-barlow font-600 text-white text-[15px] md:text-[36px] py-[20px] leading-[110%] text-center md:text-left">
              MAKE SURE TO WAKE UP YOUR FRIENDS TO
              <br />
              PLAY AND EARN, THE MORE THEY EARN THE <br />
              MORE YOU GET!
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/become/6f07a7e41f5f6ed25650.png"
                  blurLink="/images/become/6f07a7e41f5f6ed25650.png"
                  containerClasses="w-[300px] aspect-[353/310]"
                />
              </div>
            )}
            <StartNowButton className="bg-gradient_red" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default MoreMoney
