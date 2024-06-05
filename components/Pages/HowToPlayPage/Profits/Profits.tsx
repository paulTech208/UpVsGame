import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Profits = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/a8090c035406d8c1aedb.png"
                blurLink="/images/howToPlay/a8090c035406d8c1aedb.png"
                containerClasses="w-[540px] aspect-[540/500]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              PROFITS
            </p>
            <p className="font-barlow text-[12px] md:text-[24px] leading-[110%] pt-[20px] text-center md:text-left">
              The Profits are Divided Equally Subject To The Investment Ratio of The Investors In
              The Pools Minus The Earnings Fees Commission
            </p>
            <p className="font-barlow_bold text-[18px] md:text-[36px] leading-[110%] pt-[20px] text-center md:text-left">
              THE WINNERS GET THEIR PROFITS IMMEDIATELY INTO THEIR DIGITAL WALLETS.
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/f5117d5d2ae119c0dfa7.png"
                  blurLink="/images/howToPlay/f5117d5d2ae119c0dfa7.png"
                  containerClasses="w-[3000px] aspect-[350/330] mt-[20px]"
                />
              </div>
            )}
            <PlayToButton className="bg-gradient_red text-white" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Profits
