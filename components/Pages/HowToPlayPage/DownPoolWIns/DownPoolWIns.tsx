import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const DownPoolWins = () => (
  <div className="w-full relative bg-white text-black flex">
    <HowToPageContainer className="py-[30px] md:py-[50px]">
      <div className="w-full md:grid grid-cols-3 justify-ccneter items-center">
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start md:pl-[100px]">
          <div className="w-[200px] h-[5px] bg-gradient_red" />
          <p className="font-barlow  text-[15px] md:text-[36px] font-bold leading-[100%] text-center md:text-left leading-[120%] tracking-[0.1px] mt-[10px] md:mt-[30px]">
            LOWER THAN START RATE
          </p>
          <p className="max-w-[800px] font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            DOWN POOL WINS
          </p>
        </div>
        <div className="col-span-2 w-full h-full flex justify-center items-center">
          <Media
            link="/images/howToPlay/a5ee95e41d418ab8dd8f.png"
            blurLink="/images/howToPlay/a5ee95e41d418ab8dd8f.png"
            containerClasses="w-[300px] md:w-[550px] aspect-[550/520] mt-[20px]"
          />
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default DownPoolWins
