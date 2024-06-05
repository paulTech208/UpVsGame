import HowToPageContainer from "@/components/HowToPageContainer"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const MonthlyJackpot = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 text-white flex">
      <HowToPageContainer className="py-[30px] md:py-[50px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/howToPlay/34264c6569e5ce67fecc.png"
                blurLink="/images/howToPlay/34264c6569e5ce67fecc.png"
                containerClasses="w-[570px] aspect-[570/500]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="font-barlow_black text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              MONTHLY <br /> JACKPOT
            </p>
            <p className="font-barlow_bold text-[15px] md:text-[36px] leading-[110%] pt-[20px]">
              {`10% OF THE PLATFORM'S INCOME`} <br /> WILL BE RAFFLED AMONG ALL <br /> THE
              PARTICIPANTS IN THE GAME.
            </p>
            <p className=" font-barlow text-[12px] md:text-[24px] leading-[110%] pt-[20px]">
              Each transaction you take earns you a lottery <br />
              ticket, the more you play, the more lottery tickets <br /> you will have and your
              chances of winning will <br /> increase, good luck!
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/howToPlay/34264c6569e5ce67fecc.png"
                  blurLink="/images/howToPlay/34264c6569e5ce67fecc.png"
                  containerClasses="w-[350px] aspect-[350/320] mt-[20px]"
                />
              </div>
            )}
          </div>
        </div>
      </HowToPageContainer>
    </div>
  )
}
export default MonthlyJackpot
