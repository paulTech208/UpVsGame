import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"
import Link from "next/link"

const Polygon = () => (
  <div className="w-full relative bg-white text-black flex py-[30px] md:py-[50px]">
    <Container>
      <div className="w-full flex flex-col justify-ccneter items-center">
        <div className="col-span-1 w-full h-full flex justify-center items-center">
          <Media
            link="/images/landing/polygonimage.svg"
            blurLink="/images/landing/polygonimage.svg"
            containerClasses="w-[66px] md:w-[105px] aspect-[1/1]"
          />
        </div>
        <p className="max-w-[960px] font-barlow_black  text-[42px] md:text-[90px] leading-[100%] text-center leading-[90%] mt-[10px] md:mt-[30px]">
          {`POLYGON BLOCKCHAIN \n NETWORK`}
        </p>
        <p className="font-barlow font-bold text-[13px] md:text-[20px] py-[20px] leading-[110%] text-center px-[20px]">
          {`The game is running on #1 Web3 polygon blockchain network, to play the game you need to have polygon \n Matic coins.`}
        </p>
        <p className="font-barlow text-[13px] md:text-[20px] font-bold leading-[110%] text-center md:text-center md:text-left">
          Our game is #1 Web3 game in the polygon network and Top 10 in sending Matic coins!
        </p>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[10px] md:gap-[20px] mb-[20px] md:mt-[50px]">
          <PlayToButton />
          <Link href="/howtoplay">
            <button
              type="button"
              className="border-2 border-yellow_2 p-[12px_36px] md:p-[16px_50px] rounded-full 
              font-barlow text-[16px] md:text-2xl bg-black_3 font-bold text-yellow_2
              transition duration-[300ms] hover:scale-[1.1]"
            >
              How to play
            </button>
          </Link>
        </div>
      </div>
    </Container>
  </div>
)

export default Polygon
