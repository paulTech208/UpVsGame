import Media from "@/shared/Media"

const Certik = () => (
  <div className="w-full flex flex-col justify-start items-center relative z-[3]">
    <div className="w-full flex flex-col md:flex-row justify-center items-center my-[10px] md:my-[50px] gap-[5px] md:gap-[30px]">
      <p className="font-barlow font-bold text-[14px] md:text-[25px] text-yellow_2">
        Audited and verified by
      </p>
      <Media
        link="/images/about/certik-logo.svg"
        blurLink="/images/about/certik-logo.svg"
        containerClasses="w-[153px] md:w-[222px] aspect-[222/55]"
      />
    </div>
  </div>
)

export default Certik
