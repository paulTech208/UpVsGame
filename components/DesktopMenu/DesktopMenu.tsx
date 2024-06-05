import Media from "@/shared/Media"

const DesktopMenu = () => (
  <div className="flex justify-end items-center gap-[20px]">
    <Media
      link="/images/facebook.svg"
      blurLink="/images/facebook.svg"
      containerClasses="w-[32px] aspect-[1/1]"
    />
    <Media
      link="/images/landing/b7dda40f450101f0307e.svg"
      blurLink="/images/landing/b7dda40f450101f0307e.svg"
      containerClasses="w-[32px] aspect-[1/1]"
    />

    <Media
      link="/images/twitter.svg"
      blurLink="/images/twitter.svg"
      containerClasses="w-[32px] aspect-[1/1]"
    />
    <Media
      link="/images/landing/8391ad24999129b44cdb.svg"
      blurLink="/images/landing/8391ad24999129b44cdb.svg"
      containerClasses="w-[32px] aspect-[1/1]"
    />
  </div>
)

export default DesktopMenu
