import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"

const Join = () => (
  <div className="w-full relative bg-black_3 text-white flex py-[30px] md:py-[50px]">
    <Container>
      <div className="w-full flex flex-col md:grid md:grid-cols-12 justify-ccneter items-center gap-[20px] md:gap-[70px]">
        <div className="md:col-span-5 w-full flex flex-col justify-center items-center relative">
          <Media
            link="/images/about/32ac62242e12be8c14b3.png"
            blurLink="/images/about/32ac62242e12be8c14b3.png"
            containerClasses="w-[218px] md:w-[479px] aspect-[1/1]"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
              <Media
                link="/images/about/0f08a36723cf07ffbfe2.png"
                blurLink="/images/about/0f08a36723cf07ffbfe2.png"
                containerClasses="w-[96px] w-[220px] aspect-[1/1]"
              />
            </button>
          </div>
        </div>
        <div className="col-span-7 flex flex-col justify-center items-center md:items-start">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="max-w-[800px] font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
            {`JOIN OUR \n AFFILIATE \n PROGRAM AND \n MAKE PASSIVE \n DAILY INCOME`}
          </p>
          <p className="font-barlow font-bold tex-[18px] md:text-[25px] py-[20px] leading-[120%] text-center md:text-center md:text-left">
            {`GET UP TO 35% COMMISION ON YOUR FRIENDS \n 
            EARNING FEES - JOIN NOW TO OUR MULTI LEVEL \n 
            REFERRAL PROGRAM!`}
          </p>
          <p className="font-barlow text-[12px] md:text-[20px] font-bold leading-[110%] text-center md:text-center md:text-left">
            {`Bring your friends to play and get automated daily passive income \n 
            directly to your wallet, from the winning fees they pay!`}
          </p>

          <PlayToButton className="bg-gradient_red text-white" />
        </div>
      </div>
    </Container>
  </div>
)

export default Join
