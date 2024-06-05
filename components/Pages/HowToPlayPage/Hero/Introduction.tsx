import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Introduction = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full flex flex-col justify-center md:justify-start items-center relative">
      <p className="font-barlow_extra text-[50px] md:text-[90px] text-white font-bold leading-[90%] text-center z-[10]">
        REAL WEB3 PVP TRADING GAME
      </p>
      {isMobile ? (
        <div className="w-full relative mt-[20px] flex justify-center items-center translate-y-[-40px] z-[2]">
          <Media
            link="/images/howToPLay/81949b69c045a7f7999b.png"
            blurLink="/images/howToPLay/81949b69c045a7f7999b.png"
            containerClasses="w-[370px] aspect-[370/440]"
          />
        </div>
      ) : (
        <div className="w-full h-full relative mt-[20px] flex justify-center items-center translate-y-[-50px] z-[2]">
          <Media
            link="/images/howToPLay/213cf22dfad0c49214ef.png"
            blurLink="/images/howToPLay/213cf22dfad0c49214ef.png"
            containerClasses="w-[1160px] aspect-[116/55]"
          />
        </div>
      )}
    </div>
  )
}

export default Introduction
