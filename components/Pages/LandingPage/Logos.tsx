import Media from "@/shared/Media"

const Logos = () => (
  <div className="w-full flex justify-start items-center pb-[1vh] md:pb-12 border-b-[1px] border-b-white_2">
    <Media
      link="/images/landing/3a86a9cd94691f0cc5b7.svg"
      blurLink="/images/landing/3a86a9cd94691f0cc5b7.svg"
      containerClasses="w-[140px] md:w-[173px] aspect-[173/50]"
    />
    <p className="w-[1px] text-[30px] text-white_2 mx-[30px]">|</p>
    <Media
      link="/images/landing/625e7e9d4852177af654.svg"
      blurLink="/images/landing/625e7e9d4852177af654.svg"
      containerClasses="w-[140px] md:w-[182px] aspect-[182/43]"
    />
  </div>
)

export default Logos
