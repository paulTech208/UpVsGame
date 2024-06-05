import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const SellOrSend = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-3 justify-ccneter items-center gap-[20px]">
          <div className="col-span-2 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black  text-[30px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              HOW TO SELL OR SEND MY WINNINGS MATIC TOKEN?
            </p>
            <p className="font-barlow_black text-[12px] md:text-[24px] leading-[110%] pt-[20px]">
              YOU CAN SELL YOUR WINNINGS MATIC EASILY FROM THE LINK THAT APPEARS ON YOUR WEB3 GAME
              WALLET,
            </p>
            <div className="w-full flex justify-center items-center pt-[5px] md:pt-[20px]">
              <div className="w-full bg-black h-[3px]" />
              <p className="px-2 font-barlow_black text-[12px] md:text-[24px] leading-[110%]">OR</p>
              <div className="w-full bg-black h-[3px]" />
            </div>
            <p className=" font-barlow_black text-[12px] md:text-[24px] leading-[110%] pt-[5px] md:pt-[20px]">
              YOU CAN SEND YOUR WINNINGS MATIC TO OTHER CRYPTO WALLET EASILY AND SAFELY!
            </p>
            <div className="w-full flex justify-center items-center pt-[5px] md:pt-[20px]">
              <div className="w-full bg-black h-[3px]" />
              <p className="px-2 font-barlow_black text-[12px] md:text-[24px] leading-[110%]">OR</p>
              <div className="w-full bg-black h-[3px]" />
            </div>
            <p className=" font-barlow_black text-[12px] md:text-[24px] leading-[110%] pt-[10px] md:pt-[20px]">
              EXCHANGE YOUR MATIC TO OTHER CRYPTO TOKEN EASILY AND <br />
              SAFELY WITH OUR BEST SWAP SERVICE!
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/028e3b71bef390c0d1be.png"
                  blurLink="/images/howToPlay/028e3b71bef390c0d1be.png"
                  containerClasses="w-[300px] aspect-[350/500] mt-[20px]"
                />
              </div>
            )}
            <PlayToButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/5c7a0eed34fc2ee141d4.png"
                blurLink="/images/howToPlay/5c7a0eed34fc2ee141d4.png"
                containerClasses="w-[400px] aspect-[400/570]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}
export default SellOrSend
