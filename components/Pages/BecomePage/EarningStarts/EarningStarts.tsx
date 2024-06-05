import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const EarningStarts = () => (
  <div className="w-full bg-black_3 relative">
    <HowToPageContainer className="md:py-[80px]">
      <div className="w-full flex flex-col justify-ccneter items-center gap-[10px]">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className="text-shadow font-barlow_black text-white text-[34x] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] ">
          HOW DO I SEE MY <br /> EARNING STATS
        </p>
        <p className="font-barlow_black text-white text-text-[36px] leading-[100%] text-center md:text-left leading-[90%] ">
          UPDATES DAILY AT 12 GMT
        </p>
        <Media
          link="/images/become/46f2829522d44898df6b.png"
          blurLink="/images/become/46f2829522d44898df6b.png"
          containerClasses="w-[280px] md:w-[920px] aspect-[920/410] mt-[30px]"
        />
      </div>
    </HowToPageContainer>
  </div>
)

export default EarningStarts
