import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import Media from "@/shared/Media"

const CreateLink = () => (
  <div className="w-full bg-white relative">
    <HowToPageContainer className="md:py-[80px]">
      <div className="w-full flex flex-col justify-ccneter items-center gap-[10px]">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className="font-barlow_black text-black text-[36px] md:text-[75px] leading-[100%] text-center md:text-left leading-[90%] ">
          CREATE AFFILIATE LINKS
        </p>
        <p className="font-barlow font-bold text-black text-[15px] md:text-[30px] leading-[110%]">
          AS MANY YOU WANT
        </p>
        <Media
          link="/images/become/47232bf0bb89627f0de8.png"
          blurLink="/images/become/47232bf0bb89627f0de8.png"
          containerClasses="w-[300px] md:w-[920px] aspect-[920/440] mt-[5px]"
        />
        <StartNowButton className="mb-[30px]" />
      </div>
    </HowToPageContainer>
  </div>
)

export default CreateLink
