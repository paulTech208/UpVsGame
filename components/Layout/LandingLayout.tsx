import { ILayout } from "./types"

const LandingLayout = ({ children }: ILayout) => (
  <div className="w-screen bg-black relative">{children}</div>
)

export default LandingLayout
