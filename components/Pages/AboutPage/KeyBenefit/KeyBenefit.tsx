import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const KeyBenefit = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex py-[0px] md:py-[50px]">
      <Container>
        <div className="w-full flex md:grid md:grid-cols-2 justify-ccneter items-center">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/about/df991a0f9698da3a4390.png"
                  blurLink="/images/about/df991a0f9698da3a4390.png"
                  containerClasses="w-[280px] aspect-[410/250] mb-[20px]"
                />
              </div>
            )}
            <div className="flex flex-col justify-center items-center w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black  text-[42px] md:text-[90px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`5 KEY \n BENEFITS`}
            </p>
            <div
              className="font-barlow font-bold text-[18px] md:text-[20px]  leading-[100%] py-[20px] gap-[10px] md:gap-[20px]
                  flex flex-col justify-center items-start"
            >
              <p className="relative dot pl-[25px]">Best win ratio, 50%+.</p>
              <p className="relative  dot pl-[25px]">No deposit, you control your funds.</p>
              <p className="relative dot pl-[25px]">
                You play peer to peer, not against the house.
              </p>
              <p className="relative  dot pl-[25px]">
                Win & go, you get your winnings directly to your personal wallet.
              </p>
              <p className="relative dot pl-[25px]">
                {`The smart contract that manages the game is fully audited and \n 
              verified by the best company in the industry: CERTIK!`}
              </p>
              <div className="w-full flex justify-center items-center">
                <PlayToButton />
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/about/5aed6920c937dacae910.png"
                blurLink="/images/about/5aed6920c937dacae910.png"
                containerClasses="w-[480px] aspect-[480/580]"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
export default KeyBenefit
