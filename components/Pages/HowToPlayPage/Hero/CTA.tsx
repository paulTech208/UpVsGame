import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"

const CTA = () => (
  <div className="w-full flex flex-col justify-center items-center relative z-[3] translate-y-[-35px]">
    <div className="w-auto flex flex-col justify-center items-center gap-[10px] text-white">
      <div className="flex justify-center items-center gap-[15px] md:gap-[20px] p-0 font-barlow text-[18px] md:text-[36px] text-center text-white font-bold">
        <Media
          link="/images/howToPlay/6a01f412e4c4f5c4cf41.svg"
          blurLink="/images/landing/6a01f412e4c4f5c4cf41.svg"
          containerClasses="w-[30px] md:w-[43px] aspect-[1/1] border border-black rounded-full"
        />
        <p>WILL BITCOIN GO UP OR DOWN?</p>
      </div>
      <div className="flex justify-center items-center md:mt-[20px]">
        <PlayToButton className="bg-gradient_red text-white" />
      </div>
    </div>
  </div>
)

export default CTA
