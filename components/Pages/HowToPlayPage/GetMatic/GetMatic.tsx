import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const GetMatic = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-0px md:py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/dd25f63ecb69aec73cc8.png"
                blurLink="/images/howToPlay/dd25f63ecb69aec73cc8.png"
                containerClasses="w-[510px] aspect-[510/530]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              HOW TO GET <br /> MATIC TOKEN?
            </p>
            <p className="font-barlow font-bold text-[12px] md:text-[24px] leading-[110%] pt-[20px]">
              BUY MATIC TOKEN EASILY WITH CREDIT/DEBIT OR <br />
              BANK TRANFER INSTANTLY AND EASILY!
            </p>
            <div className="w-full flex justify-center items-center pt-[20px]">
              <div className="w-full bg-white h-[3px]" />
              <p className="px-2 font-barlow font-bold text-[12px] md:text-[24px] leading-[110%]">
                OR
              </p>
              <div className="w-full bg-white h-[3px]" />
            </div>
            <p className=" font-barlow font-bold text-[12px] md:text-[24px] leading-[110%] pt-[20px]">
              EXCHANGE OTHER CRYPTO TO MATIC EASILY AND <br />
              SAFELY WITH OUR BEST SWAP SERVICE!
            </p>
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/ca275667c62c4c7bb911.png"
                  blurLink="/images/howToPlay/ca275667c62c4c7bb911.png"
                  containerClasses="w-[300px] aspect-[350/290] mt-[20px]"
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

export default GetMatic
