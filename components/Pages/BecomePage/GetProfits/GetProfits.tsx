import HowToPageContainer from "@/components/HowToPageContainer"
import Media from "@/shared/Media"

const GetProfits = () => (
  <div className="w-full bg-white relative">
    <HowToPageContainer className="md:py-[80px]">
      <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-black text-[36px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            GET YOUR PROFITS EVERY DAY AT 12 GMT
          </p>
          <p className="font-barlow font-bold text-black text-[16px] md:text-[36px] py-[10px] md:py-[20px] leading-[110%]">
            DIRECTLY TO YOUR DIGITAL <br />
            WALLET AUTOMATICALLY
          </p>
        </div>
        <div className="col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/become/6f87b85a79e33668d45f.png"
            blurLink="/images/become/6f87b85a79e33668d45f.png"
            containerClasses="w-[300px] md:w-[620px] aspect-[620/670] mb-[30px]"
          />
        </div>
      </div>
    </HowToPageContainer>
  </div>
)

export default GetProfits
