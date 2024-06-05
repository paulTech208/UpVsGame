import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const MakeMoney = () => (
  <div className="w-full relative bg-white text-black flex">
    <HowToPageContainer className="py-[30px] md:py-[50px]">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-3 justify-ccneter items-center">
        <div className="col-span-2 w-full h-full flex justify-center items-center">
          <Media
            link="/images/become/fa2282b02d6866da6ff9.png"
            blurLink="/images/become/fa2282b02d6866da6ff9.png"
            containerClasses="w-[719px] aspect-[719/620]"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start mb-[20px]">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black  text-[34px] md:text-[80px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            MAKE MONEY WHEN YOUR FRIENDS MAKE MONEY!
          </p>
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default MakeMoney
