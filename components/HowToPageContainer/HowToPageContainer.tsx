import Media from "@/shared/Media"

const HowToPageContainer = ({
  containerClassName = "",
  children,
  contentClassName = "",
  className = "",
}) => (
  <div className={`relative w-full ${containerClassName}`}>
    <div
      className={`w-[300px] 3md:w-[900px] md:w-[1020px] xl:w-[1140px] m-auto pt-[40px] 3md:pt-[115px] relative ${contentClassName}`}
    >
      <div className={`w-full relative ${className}`}>{children}</div>
      <div
        className="absolute flex top-0 left-0 w-full translate-y-[-17px] md:translate-y-[-38px] z-[50]
            flex justify-center items-center "
      >
        <Media
          link="/images/howToPlay/d777fd31c93b098d060f.svg"
          blurLink="/images/howToPlay/d777fd31c93b098d060f.svg"
          containerClasses="w-[34px] md:w-[74px] aspect-[1/1]"
        />
      </div>
    </div>
  </div>
)

export default HowToPageContainer
