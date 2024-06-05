import BaseHeader from "../BaseHeader"
import SeoHead from "../SeoHead"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-full flex flex-col justify-start items-start
      min-h-screen overflow-hidden bg-black"
  >
    <SeoHead />
    <BaseHeader />
    {children}
  </div>
)

export default BaseLayout
