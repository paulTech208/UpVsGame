import PlayToButton from "@/components/PlayToButton"
import Media from "@/shared/Media"

const CTA = () => (
  <div
    className="w-full flex justify-start items-center gap-[10px] md:gap-[30px] 
      mr-[200px] mt-[40vh] md:mt-10 mb-[10px]"
  >
    <PlayToButton className="bg-gradient_red text-white mt-[20px]" />
    {/* eslint-disable-next-line  jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */}
    <button type="button" className="w-fit bg-none rounded-full">
      <Media
        link="/images/landing/07ce29d53f6d8bc53e94.svg"
        blurLink="/images/landing/07ce29d53f6d8bc53e94.svg"
        containerClasses="w-[42px] md:w-[62px] aspect-[1/1] mt-[20px]"
      />
    </button>
  </div>
)

export default CTA
