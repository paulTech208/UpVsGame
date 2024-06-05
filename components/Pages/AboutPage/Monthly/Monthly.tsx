import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"

const Monthly = () => (
  <div className="w-full relative bg-black_3 text-white flex py-[30px] md:py-[50px]">
    <Container>
      <div className="w-full md:grid md:grid-cols-2 justify-ccneter items-center gap-[40px]">
        <div className="col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/about/1baf42b0f94a17f61ed9.png"
            blurLink="/images/about/1baf42b0f94a17f61ed9.png"
            containerClasses="w-[280px] md:w-[550px] aspect-[550/490] mb-[20px]"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="max-w-[800px] font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            {`MONTHLY \n JACKPOT`}
          </p>
          <p className="font-barlow_black text-[18px] md:text-[25px] py-[20px] leading-[110%] text-center md:text-center md:text-left ">
            {`10% OF THE PLATFORM'S INCOME WILL BE RAFFLED AMONG ALL THE PARTICIPANTS IN THE GAME.`}
          </p>
          <p className="font-barlow text-[13px] md:text-[20px] font-bold leading-[110%] text-center md:text-center md:text-left ">
            {` Each transaction you take earns you a lottery ticket, the more you \n
            play, the more lottery tickets you will have and your chances of \n
             winning will increase, good luck!`}
          </p>
          <PlayToButton className="bg-gradient_red text-white" />
        </div>
      </div>
    </Container>
  </div>
)

export default Monthly
