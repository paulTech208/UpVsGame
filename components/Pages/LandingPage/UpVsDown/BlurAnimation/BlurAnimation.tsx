import Media from "@/shared/Media"
import lists from "./firstLists.json"

export enum ANIMATION_DIRECTION {
  UP = "UP",
  DOWN = "DOWN",
}

const BlurAnimation = ({ direction = ANIMATION_DIRECTION.UP, data }) => {
  const isUpFlow = direction === ANIMATION_DIRECTION.UP

  return (
    <div className="w-[150px] md:!w-[223px] max-h-[40vh] md:max-h-[100vh] overflow-hidden flex">
      <div
        className={`flex flex-col justify-center items-center scrolled-col
      ${isUpFlow ? "animate-flow-up self-start" : "animate-flow-down self-end"} gap-[16px]`}
      >
        {lists[data].map((list, index) => (
          <Media
            // eslint-disable-next-line  react/no-array-index-key
            key={`${data.image}_${index}`}
            link={`/images/landing/${list.image}.png`}
            blurLink={`/images/landing/${list.image}.png`}
            containerClasses="w-[73px] md:w-[222px] aspect-[222/323]"
          />
        ))}
      </div>
    </div>
  )
}

export default BlurAnimation
