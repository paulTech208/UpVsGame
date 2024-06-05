import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Introduction = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full flex flex-col justify-start items-center relative z-[3]">
      {isMobile ? (
        ""
      ) : (
        <p className="font-barlow text-[28px] text-yellow font-bold">WEB3 POOL TRADING GAME</p>
      )}
      <div className="w-full h-full relative mt-[20px]">
        {isMobile ? (
          <div className="absolute w-full flex justify-center items-center">
            <Media
              link="/images/about/40394331d892602a490a.png"
              blurLink="/images/about/40394331d892602a490a.png"
              containerClasses="w-[300px] aspect-[340/390]"
            />
          </div>
        ) : (
          <div className="absolute w-full flex justify-around">
            <Media
              link="/images/about/ce0845f2f78f52e2df4f.png"
              blurLink="/images/about/ce0845f2f78f52e2df4f.png"
              containerClasses="w-[360px] aspect-[360/430]"
            />
            <Media
              link="/images/about/028cdc8f26bd378ff554.png"
              blurLink="/images/about/028cdc8f26bd378ff554.png"
              containerClasses="w-[360px] aspect-[360/430]"
            />
          </div>
        )}
        <div className="w-full  relative flex justify-center items-center z-[2]">
          <p
            className="font-barlow_extra font-bold text-[70px] md:text-[129px] tracking-[1%] leading-[80%] 
                      text-white text-center mt-[25vh] md:mt-0"
          >
            UP OR <br /> DOWN <br /> PREDICT <br /> & WIN
          </p>

          <div className="absolute w-full h-full flex justify-center items-center mt-[30vh] md:mt-0">
            <Media
              link="/images/about/orange-bitcoin.svg"
              blurLink="/images/about/orange-bitcoin.svg"
              containerClasses="w-[66px] md:w-[105px] aspect-[1/1]"
            />
          </div>
        </div>
      </div>
      <p className="font-barlow text-[13px] md:text-[20px]  text-yellow font-bold visible md:hidden mt-3">
        WEB3 POOL TRADING GAME
      </p>
    </div>
  )
}

export default Introduction
