import BaseLayout from "./BaseLayout"
import LandingLayout from "./LandingLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  landing: LandingLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout
