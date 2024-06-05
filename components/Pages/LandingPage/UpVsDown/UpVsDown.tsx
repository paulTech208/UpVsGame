import BlurAnimation from "./BlurAnimation"

export enum ANIMATION_DIRECTION {
  UP = "UP",
  DOWN = "DOWN",
}
const UpVsDown = () => (
  <div
    className="w-full absolute top-[28vh] samsungS8:top-[22vh] md:top-0 right-[0px] md:right-[-500px] flex h-[40vh] md:min-h-[100vh] 
      gap-[10px] md:gap-[40px] overflow-x-hidden"
  >
    {Array.from({ length: 4 }).map((_, i) => (
      <BlurAnimation
        direction={i % 2 ? ANIMATION_DIRECTION.UP : ANIMATION_DIRECTION.DOWN}
        // eslint-disable-next-line  react/no-array-index-key
        key={i}
        data={i}
      />
    ))}
  </div>
)

export default UpVsDown
