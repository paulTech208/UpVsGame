import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const WeeklyJackPot = () => (
  <div className="w-full relative bg-white text-black flex">
    <HowToPageContainer className="py-[30px] md:py-[50px]">
      <div className="w-full md:grid grid-cols-2 justify-ccneter items-center">
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            WEEKLY <br /> JACKPOT
          </p>
          <p className="font-barlow_bold font-100 text-[15px] md:text-[36px] leading-[100%] text-center md:text-left leading-[120%] mt-[30px]">
            {`10% OF THE PLATFORM'S INCOME`} <br />
            WILL BE RAFFLED AMONG ALL THE <br />
            PARTICIPANTS IN THE GAME.
          </p>
          <p className="font-barlow_bold font-100 text-[12px] md:text-[23px] leading-[100%] text-center md:text-left leading-[120%] mt-[30px]">
            You have 5 prize pools that gives you the best chance <br />
            to win, if you are a heavy gainer you will have a big <br />
            chance, if you are a small fish you can still win, as <br />
            many trades you do, your chances will be higher!
          </p>
        </div>
        <div className="col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/howToPlay/e885c1dc159c89c0a003.png"
            blurLink="/images/howToPlay/e885c1dc159c89c0a003.png"
            containerClasses="w-[300px] w-[540px] aspect-[540/570]"
          />
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default WeeklyJackPot
