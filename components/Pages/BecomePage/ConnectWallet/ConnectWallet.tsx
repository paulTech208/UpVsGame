import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const ConnectWallet = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-black_3 relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/50a658fc2852121f7cb0.png"
                blurLink="/images/become/50a658fc2852121f7cb0.png"
                containerClasses="w-[520px] aspect-[520/530]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-white text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              CONNECT YOUR <br />
              WALLET
            </p>
            <p className="text-shadow font-barlow font-bold text-white text-[15px] md:text-[25px] py-[10px] md:py-[20px] mx-[20px] leading-[110%]">
              Your wallet is your affiliate ID, All of your earnings will be transferred to this
              wallet on a daily basis, be aware that all of the earnings from this affiliate links
              created on this wallet address will be transferred only to this wallet.
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/become/50a658fc2852121f7cb0.png"
                  blurLink="/images/become/50a658fc2852121f7cb0.png"
                  containerClasses="w-[300px] w-[520px] aspect-[520/530]"
                />
              </div>
            )}
            <StartNowButton className="bg-gradient_red mb-[30px] text-white" />
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default ConnectWallet
