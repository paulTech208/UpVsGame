import HowToPageContainer from "@/components/HowToPageContainer"
import PlayToButton from "@/components/PlayToButton"
import QuestionSection from "./QuestionSection"

const FAQ = () => (
  <div className="w-full relative bg-black_3 text-white flex">
    <HowToPageContainer className="py-[30px] md:py-[50px]">
      <div className="w-full flex flex-col justify-center items-center pb-[50px]">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className="max-w-[800px] font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center mt-[30px]">
          FAQ
        </p>
        <div className="w-full flex justify-center items-start">
          <QuestionSection />
        </div>
        <PlayToButton />
      </div>
    </HowToPageContainer>
  </div>
)

export default FAQ
