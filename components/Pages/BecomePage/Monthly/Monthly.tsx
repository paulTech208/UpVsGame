import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const Monthly = () => (
  <div className="w-full bg-black_3 relative">
    <HowToPageContainer className="md:py-[80px]">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 justify-ccneter items-center gap-[20px] md:gap-[40px]">
        <div className="col-span-1 w-full h-full flex justify-center items-center md:items-center">
          <Media
            link="/images/become/84d68e0742e5b1c76cf0.png"
            blurLink="/images/become/84d68e0742e5b1c76cf0.png"
            containerClasses="w-[280px] md:w-[570px] aspect-[570/500] mb-[30px]"
          />
        </div>
        <div className="col-span-1 flex flex-col text-white justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="max-w-[800px] font-barlow_black  text-[34px] md:text-[90px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            {`MONTHLY \n JACKPOT`}
          </p>
          <p className="font-barlow text-[16px] md:text-[36px] font-bold mt-[30px] leading-[110%] text-center md:text-left">
            {`ALSO HERE IF YOU BRING LUCKY \n FRIENDS THAT WIN THE JACKPOT \n YOU ALSO WIN YOUR SHARE, \n JUMBO!`}
          </p>
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default Monthly
