import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"

const Chance = () => (
  <div className="w-full relative bg-black_3 text-white flex py-[30px] md:py-[50px]">
    <Container>
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 justify-ccneter items-center">
        <div className="md:col-span-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="max-w-[800px] font-barlow_black  text-[42px] md:text-[90px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            {`TODAYS BEST \n CHANCE`}
          </p>
          <p className="font-barlow text-[18px] md:text-[25px] py-[10px] md:py-[20px] leading-[110%]">
            Best Web3 Game Play.
          </p>
          <div className="w-full flex justify-center items-center">
            <PlayToButton className="font-balow_black bg-gradient_red" />
          </div>
        </div>
        <div className="md:col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/about/3962f7efa35a7fe26246.png"
            blurLink="/images/about/3962f7efa35a7fe26246.png"
            containerClasses="w-[610px] aspect-[1855/1317] mb-[20px]"
          />
        </div>
      </div>
    </Container>
  </div>
)

export default Chance
