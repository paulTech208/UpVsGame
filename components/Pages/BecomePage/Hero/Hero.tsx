import Introduction from "./Introduction"

const Hero = () => (
  <div className="relative w-full pt-[50px] md:pt-[150px]">
    <div className="absolute top-0 left-0 w-full h-full flex z-[1]">
      <div className="w-[100vw] h-full bg-gradient_green" />
      <div className="w-[100vw] h-full bg-gradient_redLeft" />
    </div>
    <Introduction />
  </div>
)

export default Hero
