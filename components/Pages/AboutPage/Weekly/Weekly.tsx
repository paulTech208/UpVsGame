import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Weekly = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-white text-black flex py-[30px] md:py-[50px]">
      <Container>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 justify-ccneter items-center">
          {isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/about/5ce819ed4506252e3069.png"
                blurLink="/images/about/5ce819ed4506252e3069.png"
                containerClasses="w-[280px] aspect-[375/290] mb-[30px]"
              />
            </div>
          )}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black  text-[42px] md:text-[90px] leading-[100%] text-center md:text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`WEEKLY \n JACKPOT`}
            </p>
            <p className="font-barlow_black text-[21px] md:text-[25px] py-[20px] leading-[110%] text-center md:text-center md:text-left">
              {`10% OF THE PLATFORM'S INCOME WILL BE RAFFLED AMONG ALL THE PARTICIPANTS IN THE GAME.`}
            </p>
            <p className="font-barlow text-[13px] md:stext-[20px] font-bold leading-[110%] text-center md:text-center md:text-left">
              {` You have 5 prize pools that gives you the best chance to win, if you \n
              are a heavy gainer you will have a big chance, if you are a small fish you can still win, as many trades you do, your chances will be higher!`}
            </p>
            <PlayToButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/about/9435caea6cd7c855fd58.png"
                blurLink="/images/about/9435caea6cd7c855fd58.png"
                containerClasses="w-[550px] aspect-[1/1]"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Weekly
